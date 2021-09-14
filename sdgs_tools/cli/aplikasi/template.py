import click

from sdgs_tools.aplikasi_sdgs.excel import make_template_individu
from sdgs_tools.aplikasi_sdgs.excel import make_template_keluarga


@click.command("template-individu")
@click.argument("nama_file", type=click.Path(), default="Data INDIVIDU SDGS.xlsx")
def template_individu(nama_file: str):
    try:
        make_template_individu(filepath=nama_file)
        click.echo(f"Berhasil membuat template individu")
    except Exception as e:
        click.echo(f"Gagal membuat template individu karena {repr(e)}")


@click.command("template-keluarga")
@click.argument("nama_file", type=click.Path(), default="Data KELUARGA SDGS.xlsx")
def template_keluarga(nama_file: str):
    try:
        make_template_keluarga(filepath=nama_file)
        click.echo(f"Berhasil membuat template keluarga")
    except Exception as e:
        click.echo(f"Gagal membuat template keluarga karena {repr(e)}")
