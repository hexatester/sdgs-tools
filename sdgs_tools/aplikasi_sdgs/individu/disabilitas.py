from uiautomator2 import Device
from openpyxl.worksheet.worksheet import Worksheet

from sdgs_tools.aplikasi_sdgs.utils import d_get_text
from .utils import menu_to

# resourceId
DISABILITAS_COL = {
    # Disabilitas
    "BL": "com.kemendes.survey:id/cbTunanetra",
    "BM": "com.kemendes.survey:id/cbTunarungu",
    "BN": "com.kemendes.survey:id/cbTunawicara",
    "BO": "com.kemendes.survey:id/cbTunarungiwicara",
    "BP": "com.kemendes.survey:id/cbTunadaksa",
    "BQ": "com.kemendes.survey:id/cbTunagrahita",
    "BR": "com.kemendes.survey:id/cbTunalaras",
    "BS": "com.kemendes.survey:id/cbCacatKusta",
    "BT": "com.kemendes.survey:id/cbCacatGanda",
    "BU": "com.kemendes.survey:id/cbDipasung",
}


def get_data_disabilitas(d: Device, ws: Worksheet, row: int):
    menu_to(d, "DISABILITAS")
    for col, resourceId in DISABILITAS_COL.items():
        ws[f"{col}{row}"] = d_get_text(d, resourceId)
    d(className='android.widget.ScrollView').fling.vert.backward()
