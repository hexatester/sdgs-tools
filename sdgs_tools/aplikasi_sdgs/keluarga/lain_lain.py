from uiautomator2 import Device
from openpyxl.worksheet.worksheet import Worksheet

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

LAIN_LAIN_COL = {
    "AB": "com.kemendes.survey:id/txtTransportUmumSebulanTerakhir",
    "AC": "com.kemendes.survey:id/txtTranportUmumSebelumnya",
    "AD": "com.kemendes.survey:id/cbBLT",
    "AE": "com.kemendes.survey:id/cbPKH",
    "AF": "com.kemendes.survey:id/cbBST",
    "AG": "com.kemendes.survey:id/cbBanpres",
    "AH": "com.kemendes.survey:id/cbUMKM",
    "AI": "com.kemendes.survey:id/cbBantuanPekerja",
    "AJ": "com.kemendes.survey:id/cbBantuanPendidikan",
    "AK": "com.kemendes.survey:id/cbBantuanLainnya",
    "AL": "com.kemendes.survey:id/txtPengeluaranRata2",
}


def get_data_lain_lain(d: Device, ws: Worksheet, row: int):
    menu_to(d, "LAIN-LAIN")
    for col, resourceId in LAIN_LAIN_COL.items():
        ws[f"{col}{row}"] = d_get_text(d, resourceId)
    d(className="android.widget.ScrollView").fling.vert.backward()
