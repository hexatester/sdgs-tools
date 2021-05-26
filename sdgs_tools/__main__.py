import click
import logging
import os
import sys

from sdgs_tools import __version__
from sdgs_tools.export import html_to_xlsx

LOGGING_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"

logger = logging.getLogger(__name__)


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
        logger.warning(f"File output {outfile} sudah ada, membatalkan.")
        sys.exit()
    html_to_xlsx(filename, outfile, offset+1)


if __name__ == "__main__":
    click.echo(f"sdgs-tools v{__version__}")
    click.echo("Dibuat oleh https://t.me/hexatester")
    exporter()
    input("Selesai! Silahkan tutup jendela ini.")
