import cattr
import click
from openpyxl import load_workbook
from time import sleep
from typing import Any, Dict, List
from uiautomator2 import Device

from sdgs_tools.aplikasi_sdgs.utils import menu_to
from sdgs_tools.dashboard.import_keluarga import DataKeluarga
from sdgs_tools.dashboard.import_individu.mapping import MAPPING_COLS

from .kesehatan import get_data_kesehatan
from .lain_lain import get_data_lain_lain
from .lokasi import get_data_lokasi
from .pendidikan import get_data_pendidikan
from .sarpras import get_data_sarpras
from .tenaga_kesehatan import get_data_tenaga_kesehatan


__all__ = [
    "get_data_kesehatan",
    "get_data_lain_lain",
    "get_data_lokasi",
    "get_data_pendidikan",
    "get_data_sarpras",
    "get_data_tenaga_kesehatan",
]


def export_keluarga(
    d: Device,
    filepath: str,
    rt_rw: str,
    rows: List[int],
    skip_lokasi: bool = False,
    skip_pendidikan: bool = False,
    skip_kesehatan: bool = False,
    skip_tenaga_kesehatan: bool = False,
    skip_sarpras: bool = False,
    skip_lain_lain: bool = False,
):
    wb = load_workbook(filepath)
    keluarga_ws = wb["Keluarga"]
    form_rt_rw = d(resourceId="com.kemendes.survey:id/txtRTRW")
    while not form_rt_rw.exists:
        click.echo(
            "Mohon aktifkan GPS, buka aplikasi, dan masuk menu Entri Survey Keluarga!"
        )
        sleep(1)
    skipped = 0
    failed = 0
    success = 0
    no_kk_col: str = MAPPING_COLS["no_kk"]
    for row in rows:
        no_kk = keluarga_ws[f"{no_kk_col}{row}"].value
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
        data: Dict[str, Any] = {"no_kk": no_kk}
        if not skip_lokasi:
            data.update(get_data_lokasi(d))
        if not skip_pendidikan:
            data["akses_pendidikan"] = get_data_pendidikan(d)
        if not skip_kesehatan:
            data["akses_fasilitas_kesehatan"] = get_data_kesehatan(d)
        if not skip_tenaga_kesehatan:
            data["akses_tenaga_kesehatan"] = get_data_tenaga_kesehatan(d)
        if not skip_sarpras:
            data["akses_sarpras_transport"] = get_data_sarpras(d)
        if not skip_lain_lain:
            data.update(get_data_lain_lain(d))
        try:
            keluarga: DataKeluarga = cattr.structure(data, DataKeluarga)
            keluarga.save(keluarga_ws, row)
            click.echo(f"Berhasil mengekspor baris {row} : {keluarga}")
            success += 1
        except ValueError as e:
            click.echo(f"Baris {row} dilewati karena : {e}")
            skipped += 1
            continue
        except Exception as e:
            click.echo(f"Error ketika membuat DataKeluarga baris {row} : {e}")
            failed += 1
            continue
    wb.save(filepath)
