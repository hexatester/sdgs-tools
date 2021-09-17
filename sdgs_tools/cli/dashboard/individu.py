import click

from sdgs_tools.utils import parse_range
from sdgs_tools.dashboard.sdgs import Sdgs
from sdgs_tools.dashboard.import_individu import import_individu as _import_individu


@click.command("import-individu")
@click.option("--username", required=True, help="Username dashboard-sdgs")
@click.password_option("--password", required=True, help="Password dashboard-sdgs")
@click.option("--rt", required=True, type=str)
@click.option("--rw", required=True, type=str)
@click.option(
    "--baris",
    required=True,
    type=str,
    help="Baris yang akan diinputkan dari excel",
)
@click.argument("nama-file", type=click.Path(exists=True), required=True)
def import_individu(
    username: str,
    password: str,
    rt: str,
    rw: str,
    baris: str,
    nama_file: str,
):
    try:
        _import_individu(
            sdgs=Sdgs(username, password),
            filepath=nama_file,
            rows=parse_range(baris),
            rt=rt,
            rw=rw,
        )
    except FileNotFoundError:
        click.echo("Gagal mengeksport data karena file template tidak ditemukan")
    except Exception as e:
        click.echo(f"Terjadi error : {e}")
