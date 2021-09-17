import cattr
import click
from openpyxl import load_workbook
from typing import List, Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from sdgs_tools.dashboard.sdgs import Sdgs

from .akses import Akses
from .sarpras_transport import SarprasTransport

from .akses_fasilitas_kesehatan import AksesFasilitasKesehatan
from .akses_pendidikan import AksesPendidikan
from .akses_sarpras_transport import AksesSarprasTransport
from .akses_tenaga_kesehatan import AksesTenagaKesehatan
from .bantuan_pemerintah import BantuanPemerintah
from .luas import Luas

from .data_keluarga import DataKeluarga

cattr.register_unstructure_hook(AksesFasilitasKesehatan, AksesFasilitasKesehatan.todict)
cattr.register_unstructure_hook(AksesPendidikan, AksesPendidikan.todict)
cattr.register_unstructure_hook(AksesSarprasTransport, AksesSarprasTransport.todict)
cattr.register_unstructure_hook(AksesTenagaKesehatan, AksesTenagaKesehatan.todict)
cattr.register_unstructure_hook(Akses, Akses.todict)
cattr.register_unstructure_hook(BantuanPemerintah, BantuanPemerintah.todict)
cattr.register_unstructure_hook(AksesTenagaKesehatan, AksesTenagaKesehatan.todict)

cattr.register_structure_hook(BantuanPemerintah, BantuanPemerintah.from_str)

__all__ = [
    "AksesFasilitasKesehatan",
    "AksesPendidikan",
    "AksesSarprasTransport",
    "AksesTenagaKesehatan",
    "Akses",
    "BantuanPemerintah",
    "DataKeluarga",
    "Luas",
    "SarprasTransport",
]


def import_keluarga(
    sdgs: "Sdgs",
    filepath: str,
    rows: List[int],
    rt: str,
    rw: str,
):
    click.echo(f"Membuka {filepath}")
    wb = load_workbook(filepath, read_only=True)
    keluarga = wb["Keluarga"]
    faileds: List[str] = list()
    failed = 0
    trying = 0
    success = 0
    skipped = 0
    for row in rows:
        if row < 4:
            raise ValueError(f"Tidak dapat memproses baris < 4")
        no_kk, nik = DataKeluarga.get_kk_nik(keluarga, row)
        if not no_kk:
            raise ValueError(f"Nomor KK kosong di baris {row}. Membatalkan operasi!")
        elif not nik:
            raise ValueError(
                f"NIK kepala keluarga kosong di baris {row}. Membatalkan operasi!"
            )
        if not sdgs.token.token.is_valid():
            sdgs.token = sdgs.token_refresh(sdgs.token)
        if not sdgs.validateNikKepalaKeluarga(nik, no_kk):
            click.echo(f"Melewati KK {no_kk}, karena data sudah diinput")
            skipped += 1
            continue
        click.echo(f"Mempersiapkan data keluarga {no_kk}")
        data = DataKeluarga.make(keluarga, row)
        try:
            data_keluarga: DataKeluarga = cattr.structure(data, DataKeluarga)
        except ValueError as e:
            click.echo(f"Baris {row} dilewati karena : {e}")
            skipped += 1
            continue
        except Exception as e:
            click.echo(f"Eror ketika membuat DataKeluarga baris {row}")
            failed += 1
            continue
        if not sdgs.token.token.is_valid():
            sdgs.token = sdgs.token_refresh(sdgs.token)
        try:
            click.echo(f"Berhasil mengirim data {no_kk}")
            res = sdgs.save_keluarga(data_keluarga, rt, rw)
            if res:
                click.echo(f"{row}. {no_kk} : {res.message}")
                success += 1
            elif res.message:
                click.echo(f"Gagal mengirim data {no_kk} : {res.message}")
            else:
                click.echo(f"Gagal mengirim data {no_kk}")
        except Exception as e:
            faileds.append(str(row))
            click.echo(f"Gagal menyimpan keluarga {no_kk} karena {e}")
            failed += 1
    click.echo(
        f"Berhasil : {success}\nMencoba : {trying}\n"
        f"Dilewati : {skipped}\nError : {failed}"
    )
    if faileds:
        click.echo("Baris yang gagal : " + ",".join(faileds))
