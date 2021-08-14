import click
from openpyxl import load_workbook, Workbook
from uiautomator2 import Device

from sdgs_tools.aplikasi_sdgs.individu import (
    get_data_individu,
    get_data_pekerjaan,
    get_data_penghasilan,
    get_data_kesehatan,
    get_data_disabilitas,
    get_data_pendidikan,
)
from sdgs_tools.utils import parse_range


def export_individu(
    filepath: str,
    ranges: str = None,
    row_penghasilan: int = 2,
    skip_individu: bool = False,
    skip_pekerjaan: bool = False,
    skip_pengasilan: bool = False,
    skip_kesehatan: bool = False,
    skip_disabilitas: bool = False,
    skip_pendidikan: bool = False,
):
    d = Device()
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
        # Input rt rw no_kk nik & Tampilkan
        form_rt_rw = d(resourceId="com.kemendes.survey:id/txtRTRW")
        form_rt_rw.send_keys(f"{rt}/{rw}", clear=True)
        form_kk = d(resourceId="com.kemendes.survey:id/txtNoKK")
        form_kk.send_keys(no_kk, clear=True)
        form_nik = d(resourceId="com.kemendes.survey:id/txtNIK")
        form_nik.send_keys(no_kk, clear=True)
        d(resourceId="com.kemendes.survey:id/btnCariRT").click()
        if not skip_individu:
            get_data_individu(d, individu, row)
        if not skip_pekerjaan:
            get_data_pekerjaan(d, individu, row)
        if not skip_kesehatan:
            get_data_kesehatan(d, individu, row)
        if not skip_disabilitas:
            get_data_disabilitas(d, individu, row)
        if not skip_pendidikan:
            get_data_pendidikan(d, individu, row)
        if not skip_pengasilan:
            row_penghasilan = get_data_penghasilan(
                d, wb["Penghasilan"], nik, row_penghasilan
            )
        click.echo(f"Eksport individu #{row} {nik} berhasil!")
