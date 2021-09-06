import cattr
import click
from openpyxl import load_workbook
from typing import List, Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from sdgs_tools.dashboard.sdgs import Sdgs


from .disabilitas import Disabilitas
from .fasilitas_kesehatan import FasilitasKesehatan
from .penghasilan import Penghasilan
from .penyakit_diderita import PenyakitDiderita

from .data_individu import DataIndividu
from .mapping import MappingIndividu


__all__ = [
    "DataIndividu",
    "Disabilitas",
    "FasilitasKesehatan",
    "MappingIndividu",
    "Penghasilan",
    "PenyakitDiderita",
]


def import_individu(
    sdgs: "Sdgs",
    filepath: str,
    rows: List[int],
    rt: str,
    rw: str,
    mapping: MappingIndividu = None,
):
    mapping = mapping or MappingIndividu()
    click.echo(f"Membuka {filepath}")
    wb = load_workbook(filepath, read_only=True)
    trying = 0
    skipped = 0
    success = 0
    for row in rows:
        if row < 4:
            raise ValueError(f"Tidak dapat memproses baris < 4")
        nik: Optional[str] = mapping.get_nik(wb, row, "Individu")
        if not nik:
            raise ValueError(f"Nik kosong di baris {row}. Membatalkan operasi!")
        if not sdgs.token.token.is_valid():
            sdgs.token = sdgs.token_refresh(sdgs.token)
        if not sdgs.validateNik(nik):
            click.echo(f"NIK {nik} sudah diinput, melewati baris {row} ...")
            skipped += 1
            continue
        click.echo(f"Mempersiapkan data nik {nik}")
        data = mapping(
            wb=wb,
            row=row,
            individu_ws="Individu",
            penghasilan_ws="Penghasilan",
        )
        individu: DataIndividu = cattr.structure(data, DataIndividu)
        if not sdgs.token.token.is_valid():
            sdgs.token = sdgs.token_refresh(sdgs.token)
        try:
            trying += 1
            res = sdgs.save_individu(individu=individu, rt=rt, rw=rw)
            if not res:
                click.echo(f"Gagal menyimpan individu karena {res}")
            else:
                success += 1
        except Exception as e:
            click.echo(f"Gagal menyimpan individu karena {e}")
    else:
        click.echo("Tidak ada data yang diimport")
        return
    click.echo(
        f"Berhasil mengimport data individu sebanyak {success}"
        f"Berhasil {success}\nMencoba {trying}\nDilewati{skipped}"
    )
