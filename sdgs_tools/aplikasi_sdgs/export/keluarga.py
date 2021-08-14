import click
from openpyxl import load_workbook, Workbook
from uiautomator2 import Device

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
):
    d = Device()
    wb = load_workbook(filepath)
    keluarga = wb["Keluarga"]
    rows = parse_range(ranges)

    def make_row(row: int):
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
        if not skip_kesehatan:
            row_kesehatan = get_data_kesehatan(
                d,
                wb["Kesehatan"],
                no_kk,
                row_kesehatan,
            )
        if not skip_tenaga_kesehatan:
            row_tenaga_kesehatan = get_data_tenaga_kesehatan(
                d,
                wb["Tenaga Kesehatan"],
                no_kk,
                row_tenaga_kesehatan,
            )
        if not skip_sarpras:
            row_sarpras = get_data_sarpras(
                d,
                wb["Sarpras"],
                no_kk,
                row_sarpras,
            )
        if not skip_lain_lain:
            get_data_lain_lain(d, keluarga, row)

    for row in rows:
        make_row(row)

    wb.save(filepath)
