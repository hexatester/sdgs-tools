import click

from .export import export_individu
from .export import export_keluarga


@click.group("aplikasi")
def aplikasi():
    pass


aplikasi.add_command(export_individu, "export-individu")
aplikasi.add_command(export_keluarga, "export-keluarga")
