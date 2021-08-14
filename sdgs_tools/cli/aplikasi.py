import click
from typing import Optional

from sdgs_tools.aplikasi_sdgs.excel import make_template_individu
from sdgs_tools.aplikasi_sdgs.excel import make_template_keluarga
from sdgs_tools.aplikasi_sdgs.export import export_individu as _export_individu


@click.group("aplikasi")
def aplikasi():
    pass


@aplikasi.command("template-individu")
@click.argument("nama_file", type=click.Path(), default="Data INDIVIDU SDGS.xlsx")
def template_individu(nama_file: str):
    try:
        make_template_individu(filepath=nama_file)
        click.echo(f"Berhasil membuat template individu")
    except Exception as e:
        click.echo(f"Gagal membuat template individu karena {repr(e)}")


@aplikasi.command("template-keluarga")
@click.argument("nama_file", type=click.Path(), default="Data KELUARGA SDGS.xlsx")
def template_keluarga(nama_file: str):
    try:
        make_template_keluarga(filepath=nama_file)
        click.echo(f"Berhasil membuat template keluarga")
    except Exception as e:
        click.echo(f"Gagal membuat template keluarga karena {repr(e)}")


@aplikasi.command("export-individu")
@click.option("--ranges", type=str, help='Baris yang diambil datanya misal "2-100"')
@click.option(
    "--baris-penghasilan",
    type=int,
    default=2,
    help="Baris kosong pertama di sheet penghasilan",
)
@click.option("--individu/--no-individu", default=True)
@click.option("--pekerjaan/--no-pekerjaan", default=True)
@click.option("--pengasilan/--no-pengasilan", default=True)
@click.option("--kesehatan/--no-kesehatan", default=True)
@click.option("--disabilitas/--no-disabilitas", default=True)
@click.option("--pendidikan/--no-pendidikan", default=True)
@click.argument(
    "nama_file",
    type=click.Path(exists=True),
    default="Data INDIVIDU SDGS.xlsx",
)
def export_individu(
    nama_file: str,
    ranges: str = None,
    baris_penghasilan: int = 2,
    individu: bool = True,
    pekerjaan: bool = True,
    pengasilan: bool = True,
    kesehatan: bool = True,
    disabilitas: bool = True,
    pendidikan: bool = True,
):
    try:
        _export_individu(
            filepath=nama_file,
            ranges=ranges,
            row_penghasilan=baris_penghasilan,
            row_start=2,
            skip_individu=not individu,
            skip_pekerjaan=not pekerjaan,
            skip_pengasilan=not pengasilan,
            skip_kesehatan=not kesehatan,
            skip_disabilitas=not disabilitas,
            skip_pendidikan=not pendidikan,
        )
    except FileNotFoundError:
        click.echo("Gagal mengeksport data karena file template tidak ditemukan")
    except Exception as e:
        click.echo(f"Gagal mengeksport data individu karena {repr(e)}")
