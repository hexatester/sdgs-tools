import click

from .export import export_individu
from .export import export_keluarga

from .template import template_individu
from .template import template_keluarga


@click.group("aplikasi")
def aplikasi():
    pass


aplikasi.add_command(export_individu, "export-individu")
aplikasi.add_command(export_keluarga, "export-keluarga")

aplikasi.add_command(template_individu, "template-individu")
aplikasi.add_command(template_keluarga, "template-keluarga")
