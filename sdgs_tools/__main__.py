import click

from sdgs_tools import __version__
from sdgs_tools.cli import exporter


@click.group("sdgs-tools")
def main():
    pass


main.add_command(exporter, "exporter")

if __name__ == "__main__":
    click.echo(f"sdgs-tools v{__version__}")
    click.echo("Dibuat oleh Habib Rohman")
    click.echo("Error? pm https://t.me/hexatester")
    click.echo("Open donasi https://saweria.co/hexatester")
    main()
