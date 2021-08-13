from uiautomator2 import Device
from openpyxl.worksheet.worksheet import Worksheet

# EXCEL COL : d(resourceId="{}")
PEKERJAAN_COL = {
    "W": "com.kemendes.survey:id/cbKondisiPekerjaan",
    "X": "com.kemendes.survey:id/cbPekerjaanUtama",
    "Y": "com.kemendes.survey:id/cbJaminanSosial",
    "Z": "com.kemendes.survey:id/txtPenghasilan",
}


def get_pekerjaan_individu(d: Device, ws: Worksheet, row: int):
    d(text="PEKERJAAN").click()
