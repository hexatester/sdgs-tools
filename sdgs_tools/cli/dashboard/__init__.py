import click

from .template import template_individu
from .template import template_keluarga

from .individu import import_individu
from .keluarga import import_keluarga


@click.group("dashboard")
def dashboard():
    pass


dashboard.add_command(template_individu)
dashboard.add_command(template_keluarga)

dashboard.add_command(import_individu)
dashboard.add_command(import_keluarga)
