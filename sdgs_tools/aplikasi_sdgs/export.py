import click
from openpyxl import load_workbook
from uiautomator2 import Device

from sdgs_tools.utils import parse_range
from .individu import get_survey_individu


def export_individu(filepath: str, ranges: str = None, row_penghasilan: int = 2):
    device = Device()
    wb = load_workbook(filepath)
    if ranges is None:
        return
    rows = parse_range(ranges)
    rows = list(set(rows))
    individu = wb["Individu"]
    for row in rows:
        rt = individu[f"A{row}"].value
        rw = individu[f"B{row}"].value
        no_kk = individu[f"C{row}"].value
        nik: str = individu[f"D{row}"].value
        try:
            row_penghasilan = get_survey_individu(
                d=device,
                wb=wb,
                row=row,
                rt=rt,
                rw=rw,
                no_kk=no_kk,
                nik=nik,
            )
            nama: str = individu[f"A{row}"].value
            click.echo(f"Berhasil mengambil data {nama}@{nik}")
        except Exception as e:
            click.echo(f"Gagal mengambil data nik : {nik} karena {repr(e)}")
