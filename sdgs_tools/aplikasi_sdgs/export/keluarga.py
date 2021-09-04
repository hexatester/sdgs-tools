import click
from openpyxl import load_workbook, Workbook
from time import sleep
from typing import Optional
from uiautomator2 import connect as connect_device

from sdgs_tools.aplikasi_sdgs.keluarga import (
    get_data_lokasi,
    get_data_pendidikan,
    get_data_kesehatan,
    get_data_tenaga_kesehatan,
    get_data_sarpras,
    get_data_lain_lain,
)
from sdgs_tools.aplikasi_sdgs.utils import menu_to
from sdgs_tools.utils import parse_range


def export_keluarga(
    filepath: str,
    ranges: str,
    row_pendidikan: int = 2,
    row_kesehatan: int = 2,
    row_tenaga_kesehatan: int = 2,
    row_sarpras: int = 2,
    skip_lokasi: bool = False,
    skip_pendidikan: bool = False,
    skip_kesehatan: bool = False,
    skip_tenaga_kesehatan: bool = False,
    skip_sarpras: bool = False,
    skip_lain_lain: bool = False,
    device: Optional[str] = None,
):
    d = connect_device(device)
    # d.app_start("com.kemendes.survey")
    form_rt_rw = d(resourceId="com.kemendes.survey:id/txtRTRW")
    while not form_rt_rw.exists:
        click.echo(
            "Mohon aktifkan GPS, buka aplikasi SDGS, dan masuk menu Entri Survey Individu!"
        )
        sleep(1)
    wb = load_workbook(filepath)
    keluarga = wb["Keluarga"]
    rows = parse_range(ranges)

    for row in rows:
        rt_rw = keluarga[f"A{row}"].value
        if not rt_rw:
            click.echo(
                f"Kolom rt/rw kosong di baris {row}, membatalkan operasi selanjutnya"
            )
            return False
        no_kk = keluarga[f"B{row}"].value
        if not no_kk:
            click.echo(f"Kolom nomor kk kosong di baris {row}, membatalkan operasi")
            return False
        form_rt_rw = d(resourceId="com.kemendes.survey:id/txtRTRW")
        form_rt_rw.send_keys(rt_rw)
        form_kk = d(resourceId="com.kemendes.survey:id/txtNoKK")
        form_kk.send_keys(no_kk)
        d.press("back")
        d(resourceId="com.kemendes.survey:id/btnCariRT").click()
        menu_to(d, "LOKASI & PEMUKIMAN")
        d(className="android.widget.ScrollView").fling.vert.backward()
        if not d(resourceId="com.kemendes.survey:id/txtNama").info.get("text"):
            click.echo(f"Lewati data kosong untuk rtrw {rt_rw} no kk {no_kk}")
            return False
        if not skip_lokasi:
            get_data_lokasi(d, keluarga, row)
        if not skip_pendidikan:
            row_pendidikan = get_data_pendidikan(
                d,
                wb["Pendidikan"],
                no_kk,
                row_pendidikan,
            )
            row_pendidikan += 1
        if not skip_kesehatan:
            row_kesehatan = get_data_kesehatan(
                d,
                wb["Kesehatan"],
                no_kk,
                row_kesehatan,
            )
            row_kesehatan += 1
        if not skip_tenaga_kesehatan:
            row_tenaga_kesehatan = get_data_tenaga_kesehatan(
                d,
                wb["Tenaga Kesehatan"],
                no_kk,
                row_tenaga_kesehatan,
            )
            row_tenaga_kesehatan += 1
        if not skip_sarpras:
            row_sarpras = get_data_sarpras(
                d,
                wb["Sarpras"],
                no_kk,
                row_sarpras,
            )
            row_sarpras += 1
        if not skip_lain_lain:
            get_data_lain_lain(d, keluarga, row)
        click.echo(f"Berhasil export data no kk {no_kk}")

    wb.save(filepath)
