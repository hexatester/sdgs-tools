import click

from sdgs_tools import __version__
from sdgs_tools.cli import aplikasi
from sdgs_tools.cli import exporter
from sdgs_tools.gui import MainApp


@click.group("sdgs-tools", invoke_without_command=True)
@click.pass_context
def cli(ctx: click.Context):
    if ctx.invoked_subcommand is None:
        gui = MainApp()
        click.echo("Memulai GUI...")
        gui()


cli.add_command(aplikasi, "aplikasi")
cli.add_command(exporter, "exporter")


def main():
    click.echo(f"sdgs-tools v{__version__}")
    click.echo("Dibuat oleh Habib Rohman")
    click.echo("Error? pm https://t.me/hexatester")
    click.echo("Open donasi https://saweria.co/hexatester")
    cli()


if __name__ == "__main__":
    main()
