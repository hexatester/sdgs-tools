from openpyxl import Workbook
from openpyxl.worksheet.worksheet import Worksheet
from uiautomator2 import Device, UiObject

from sdgs_tools.aplikasi_sdgs.utils import get_text

# PER BOX! resourceId
PENGHASILAN_COL = {
    "B": "com.kemendes.survey:id/txtJumlah",
    "C": "com.kemendes.survey:id/txtSatuan",
    "D": "com.kemendes.survey:id/txtPenghasilanSetahun",
    "E": "com.kemendes.survey:id/txtDiekspor",
    "F": "com.kemendes.survey:id/txtStatus",
}


def parse_penghasilan(ws: Worksheet, box: UiObject, row: int):
    for col, resourceId in PENGHASILAN_COL.items():
        ws[f"{col}{row}"] = get_text(box.child(resourceId=resourceId))


def get_data_penghasilan(d: Device, ws: Worksheet, nik: str, row: int):
    d(text="PENGHASILAN").click()
    box_daftar_penghasilan = d(resourceId="com.kemendes.survey:id/itemsPenghasilan")
    for box_penghasilan in box_daftar_penghasilan.child(
        resourceId="com.kemendes.survey:id/box"
    ):
        ws[f"A{row}"] = nik
        parse_penghasilan(ws, box_penghasilan, row)
        row += 1
    return row
