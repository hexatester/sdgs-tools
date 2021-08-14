import click

from sdgs_tools.aplikasi_sdgs.excel import make_template


@click.group("aplikasi")
def aplikasi():
    pass


@aplikasi.command("template")
@click.argument("nama_file", type=click.Path(), default="Template SDGS.xlsx")
def template(nama_file: str):
    try:
        make_template(filepath=nama_file)
        click.echo(f"Berhasil membuat template")
    except Exception as e:
        click.echo(f"Gagal membuat template karena {repr(e)}")
