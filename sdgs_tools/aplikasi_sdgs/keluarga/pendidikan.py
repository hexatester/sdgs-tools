from uiautomator2 import Device, UiObject
from openpyxl.worksheet.worksheet import Worksheet

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

PENDIDIKAN_COL = {
    "B": ("com.kemendes.survey:id/txtNIK", ""),
    "C": ("com.kemendes.survey:id/txtNama", "Jarak : "),
    "D": ("com.kemendes.survey:id/txtAlamat", "Waktu Tempuh :"),
    "E": ("com.kemendes.survey:id/txtTelpon", "Kemudahan :"),
    "F": ("com.kemendes.survey:id/txtStatus", ""),
}


def get_data_pendidikan(d: Device, ws: Worksheet, no_kk: str, row: int):
    menu_to(d, "AKSES PENDIDIKAN")
    box_daftar_pendidikan: UiObject = d(resourceId="com.kemendes.survey:id/itemsPendidikan")
    survey_boxes: UiObject = box_daftar_pendidikan.child(resourceId="com.kemendes.survey:id/box")
    if survey_boxes.count == 0:
        return row
    for survey_boxe in survey_boxes:
        ws[f"A{row}"] = no_kk
        for col, (resourceId, lstrp) in PENDIDIKAN_COL.items():
            value: str = d_get_text(d, resourceId)
            if isinstance(value, str):
                ws[f"{col}{row}"] = value.lstrip(lstrp)
    d(className="android.widget.ScrollView").fling.vert.backward()
