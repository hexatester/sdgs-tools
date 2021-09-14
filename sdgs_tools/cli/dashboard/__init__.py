import click

from .template import template_individu
from .template import template_keluarga


@click.group("dashboard")
def dashboard():
    pass


dashboard.add_command(template_individu)
dashboard.add_command(template_keluarga)
