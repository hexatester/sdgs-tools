import click
import logging

from sdgs_tools.export import html_to_xlsx

LOGGING_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"

logger = logging.getLogger(__name__)


@click.group()
@click.option("--debug/--no-debug", default=False)
def cli(debug: bool):
    logging.basicConfig(
        level=logging.DEBUG if debug else logging.INFO,
        format=LOGGING_FORMAT,
    )
    logger.debug("Mode debug aktif")


@cli.command("export")
@click.argument("filename")
def exporter(filename: str):
    html_to_xlsx(filename)


if __name__ == "__main__":
    cli()
