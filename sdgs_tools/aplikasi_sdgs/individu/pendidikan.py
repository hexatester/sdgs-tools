from uiautomator2 import Device
from openpyxl.worksheet.worksheet import Worksheet

from sdgs_tools.aplikasi_sdgs.utils import d_get_text
from .utils import menu_to

# resourceId
PENDIDIKAN_COL = {
    "BV": "com.kemendes.survey:id/cbPendidikanTertinggi",
    "BW": "com.kemendes.survey:id/txtTahunPendidikanDasar",
    "BX": "com.kemendes.survey:id/txtBahasa",
    "BY": "com.kemendes.survey:id/txtBahasaLembaga",
    "BZ": "com.kemendes.survey:id/txtKerjaBakti",
    "CA": "com.kemendes.survey:id/txtSiskamling",
    "CB": "com.kemendes.survey:id/txtPestaRakyat",
    "CC": "com.kemendes.survey:id/txtMenolongKematian",
    "CD": "com.kemendes.survey:id/txtMenolongSakit",
    "CE": "com.kemendes.survey:id/txtMenolongKecelakaan",
    "CF": "com.kemendes.survey:id/cbPerolehPelayananDesa",
    "CG": "com.kemendes.survey:id/cbMasukan",
    "CH": "com.kemendes.survey:id/cbBencana",
}


def get_data_pendidikan(d: Device, ws: Worksheet, row: int):
    menu_to(d, "PENDIDIKAN")
    d(text="PENDIDIKAN").click()
    for col, resourceId in PENDIDIKAN_COL.items():
        ws[f"{col}{row}"] = d_get_text(d, resourceId)
    d(className='android.widget.ScrollView').fling.vert.backward()
