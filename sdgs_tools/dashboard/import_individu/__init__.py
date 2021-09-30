import cattr
import click
from openpyxl import load_workbook
from typing import List, Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from sdgs_tools.dashboard.sdgs import Sdgs

from sdgs_tools.dashboard.edit_individu import edit_individu

from .disabilitas import Disabilitas
from .fasilitas_kesehatan import FasilitasKesehatan
from .penghasilan import Penghasilan
from .penyakit_diderita import PenyakitDiderita

from .data_individu import DataIndividu


cattr.register_structure_hook(Disabilitas, Disabilitas.from_str)
cattr.register_structure_hook(PenyakitDiderita, PenyakitDiderita.from_str)

cattr.register_unstructure_hook(Disabilitas, Disabilitas.todict)
cattr.register_unstructure_hook(FasilitasKesehatan, FasilitasKesehatan.todict)
cattr.register_unstructure_hook(Penghasilan, Penghasilan.todict)
cattr.register_unstructure_hook(PenyakitDiderita, PenyakitDiderita.todict)

__all__ = [
    "DataIndividu",
    "Disabilitas",
    "FasilitasKesehatan",
    "Penghasilan",
    "PenyakitDiderita",
]


def import_individu(
    sdgs: "Sdgs",
    filepath: str,
    rows: List[int],
    rt: str,
    rw: str,
    edit: bool = False,
):
    click.echo(f"Membuka {filepath}")
    wb = load_workbook(filepath, read_only=True)
    faileds: List[str] = list()
    failed = 0
    trying = 0
    skipped = 0
    success = 0
    for row in rows:
        if row < 4:
            raise ValueError(f"Tidak dapat memproses baris < 4")
        nik: Optional[str] = DataIndividu.get_nik(wb, row, "Individu")
        if not nik:
            raise ValueError(f"Nik kosong di baris {row}. Membatalkan operasi!")
        if not sdgs.token.token.is_valid():
            sdgs.token = sdgs.token_refresh(sdgs.token)
        if not sdgs.validateNik(nik):
            if edit:
                data = DataIndividu.make(wb, row)
                edit_individu(
                    sdgs=sdgs,
                    individu=cattr.structure(data, DataIndividu),
                )
            click.echo(f"NIK {nik} sudah diinput, melewati baris {row} ...")
            skipped += 1
            continue
        click.echo(f"Mempersiapkan data nik {nik}")
        data = DataIndividu.make(wb, row)
        try:
            individu: DataIndividu = cattr.structure(data, DataIndividu)
        except ValueError as e:
            click.echo(f"Baris {row} dilewati karena : {e}")
            skipped += 1
            continue
        except Exception as e:
            click.echo(f"Error ketika membuat DataKeluarga baris {row} : {e}")
            failed += 1
            continue
        if not sdgs.token.token.is_valid():
            sdgs.token = sdgs.token_refresh(sdgs.token)
        try:
            trying += 1
            res = sdgs.save_individu(individu=individu, rt=rt, rw=rw)
            if not res:
                click.echo(f"Gagal mengirim {individu} karena {res}")
            else:
                click.echo(f"Berhasil mengirim {individu}")
                success += 1
        except Exception as e:
            faileds.append(str(row))
            click.echo(f"Gagal menyimpan individu {nik} karena {e}")
            failed += 1
    click.echo(
        f"Berhasil : {success}\nMencoba : {trying}\n"
        f"Dilewati : {skipped}\nError : {failed}"
    )
    if faileds:
        click.echo("Baris yang gagal : " + ",".join(faileds))
