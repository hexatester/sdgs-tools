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
from sdgs_tools.aplikasi_sdgs.individu.utils import menu_to
from sdgs_tools.utils import parse_range


def export_individu(
    filepath: str,
    ranges: str = None,
    row_penghasilan: int = 2,
    row_start: int = 2,
    skip_individu: bool = False,
    skip_pekerjaan: bool = False,
    skip_pengasilan: bool = False,
    skip_kesehatan: bool = False,
    skip_disabilitas: bool = False,
    skip_pendidikan: bool = False,
):
    d = Device()
    wb = load_workbook(filepath)
    individu = wb["Individu"]

    def make_row(row: int, row_penghasilan: int):
        rt_rw = individu[f"A{row}"].value
        if not rt_rw:
            click.echo(f"Kolom rt/rw kosong di baris {row}, membatalkan operasi selanjutnya")
            return False
        no_kk = individu[f"B{row}"].value
        if not no_kk:
            click.echo(f"Kolom nomor kk kosong di baris {row}, membatalkan operasi")
            return False
        nik: str = individu[f"C{row}"].value
        if not nik:
            click.echo(f"Kolom nik kosong di baris {row}, membatalkan operasi")
            return False
        # Input rt rw no_kk nik & Tampilkan
        form_rt_rw = d(resourceId="com.kemendes.survey:id/txtRTRW")
        form_rt_rw.send_keys(rt_rw)
        form_kk = d(resourceId="com.kemendes.survey:id/txtNoKK")
        form_kk.send_keys(no_kk)
        form_nik = d(resourceId="com.kemendes.survey:id/txtNIK")
        form_nik.send_keys(nik)
        d.press("back")
        d(resourceId="com.kemendes.survey:id/btnCariRT").click()
        menu_to(d, "DATA INDIVIDU")
        if not d(resourceId="com.kemendes.survey:id/txtNama").info.get("text"):
            click.echo(f"Lewati data kosong untuk rtrw {rt_rw} no kk {no_kk} nik {nik}")
            return False
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
        return True

    if ranges is None:
        success: bool = True
        while success:
            success = make_row(row_start, row_penghasilan)
            row_start += 1
    else:
        rows = parse_range(ranges)
        rows = list(set(rows))
        for row in rows:
            make_row(row, row_penghasilan)
    wb.save(filepath)
