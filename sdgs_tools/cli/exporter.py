import click
import os
import sys

from sdgs_tools.ext.export import html_to_xlsx

LOGGING_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"


@click.command("export")
@click.option("--offset", default=1, type=int, help="Mulai dari baris")
@click.argument(
    "filename",
    required=True,
    type=click.Path(exists=True, file_okay=True, dir_okay=False, resolve_path=True),
    default="DATA INDIVIDU.xls",
)
@click.argument(
    "outfile",
    type=click.Path(),
    default="DATA INDIVIDU-output.xlsx",
)
def exporter(offset: int, filename: str, outfile: str):
    if not outfile.endswith(".xlsx"):
        outfile += ".xlsx"
    if os.path.isfile(outfile):
        click.echo(f"File output {outfile} sudah ada, membatalkan.")
        sys.exit()
    click.echo(f"Mengeksport data dari {filename}")
    click.echo(f"Dari baris ke {offset}")
    click.echo(f"Menjadi {outfile}")
    html_to_xlsx(filename, outfile, offset)
    input("Selesai! Silahkan tutup jendela ini.")
