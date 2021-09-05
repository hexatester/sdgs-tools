import cattr
import click
from openpyxl import load_workbook
from typing import List, TYPE_CHECKING

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
    sdgs: Sdgs,
    filepath: str,
    rows: List[int],
    mapping: MappingIndividu = None,
):
    mapping = mapping or MappingIndividu()
    click.echo(f"Membuka {filepath}")
    wb = load_workbook(filepath, read_only=True)
    success = 0
    for row in rows:
        click.echo(f"Mempersiapkan data baris {row}")
        data = mapping(
            wb=wb,
            row=row,
            individu_ws="Individu",
            penghasilan_ws="Penghasilan",
        )
        individu: DataIndividu = cattr.structure(data, DataIndividu)
        try:
            sdgs.save_individu(individu)
            success += 1
        except Exception as e:
            click.echo(f"Gagal menyimpan individu karena {e}")
    else:
        click.echo("Tidak ada data yang diimport")
        return
    click.echo(f"Berhasil mengimport data individu sebanyak {success}")
