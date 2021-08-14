import click

from sdgs_tools import __version__
from sdgs_tools.cli import exporter


@click.group("sdgs-tools")
def cli():
    pass


cli.add_command(exporter, "exporter")


def main():
    click.echo(f"sdgs-tools v{__version__}")
    click.echo("Dibuat oleh Habib Rohman")
    click.echo("Error? pm https://t.me/hexatester")
    click.echo("Open donasi https://saweria.co/hexatester")
    cli()


if __name__ == "__main__":
    main()
