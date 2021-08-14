from uiautomator2 import Device
from openpyxl.worksheet.worksheet import Worksheet

from sdgs_tools.aplikasi_sdgs.utils import d_get_text

# EXCEL COL : d(resourceId="{}")
PEKERJAAN_COL = {
    "W": "com.kemendes.survey:id/cbKondisiPekerjaan",
    "X": "com.kemendes.survey:id/cbPekerjaanUtama",
    "Y": "com.kemendes.survey:id/cbJaminanSosial",
    "Z": "com.kemendes.survey:id/txtPenghasilan",
}


def get_data_pekerjaan(d: Device, ws: Worksheet, row: int):
    d(text="PEKERJAAN").click()
    for col, resourceId in PEKERJAAN_COL.items():
        ws[f"{col}{row}"] = d_get_text(d, resourceId)
