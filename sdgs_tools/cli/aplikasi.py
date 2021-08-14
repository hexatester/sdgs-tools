import click
from typing import Optional

from sdgs_tools.aplikasi_sdgs.excel import make_template_individu
from sdgs_tools.aplikasi_sdgs.export import export_individu as _export_individu


@click.group("aplikasi")
def aplikasi():
    pass


@aplikasi.command("template")
@click.argument("nama_file", type=click.Path(), default="Data INDIVIDU SDGS.xlsx")
def template(nama_file: str):
    try:
        make_template_individu(filepath=nama_file)
        click.echo(f"Berhasil membuat template")
    except Exception as e:
        click.echo(f"Gagal membuat template karena {repr(e)}")


@aplikasi.command("export-individu")
@click.option("--ranges", type=str, required=False)
@click.option("--penghasilan", type=int, default=2, help="Baris kosong penghasilan")
@click.argument("nama_file", type=click.Path(), default="Data INDIVIDU SDGS.xlsx")
def export_individu(nama_file: str, ranges: Optional[str] = None, penghasilan: int = 2):
    try:
        _export_individu(
            filepath=nama_file,
            ranges=ranges,
            row_penghasilan=penghasilan,
        )
    except FileNotFoundError:
        click.echo("Gagal mengeksport data karena file template tidak ditemukan")
    except Exception as e:
        click.echo(f"Gagal mengeksport data individu karena {repr(e)}")
