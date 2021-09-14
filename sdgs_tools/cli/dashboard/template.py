import click
import requests


TEMPLATE_INDIVIDU = "https://hexatester.github.io/sdgs-tools/Template%20Individu%20Dashboard%20SDGS%20Kemendesa.xlsm"
TEMPLATE_KELUARGA = "https://hexatester.github.io/sdgs-tools/Template%20Keluarga%20Dashboard%20SDGS%20Kemendesa.xlsm"


@click.command("template-individu")
@click.argument(
    "nama-file",
    type=click.Path(exists=False),
    default="Template-Individu-Dashboard.xlsm",
)
def template_individu(nama_file: str):
    res = requests.get(TEMPLATE_INDIVIDU)
    with open(nama_file, "wb") as f:
        f.write(res.content)
    click.echo(f"Berhasil menyimpan template di {nama_file}")


@click.command("template-keluarga")
@click.argument(
    "nama-file",
    type=click.Path(exists=False),
    default="Template-Keluarga-Dashboard.xlsm",
)
def template_keluarga(nama_file: str):
    res = requests.get(TEMPLATE_KELUARGA)
    with open(nama_file, "wb") as f:
        f.write(res.content)
    click.echo(f"Berhasil menyimpan template di {nama_file}")
