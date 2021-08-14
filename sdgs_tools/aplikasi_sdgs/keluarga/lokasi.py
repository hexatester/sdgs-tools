from uiautomator2 import Device
from openpyxl.worksheet.worksheet import Worksheet

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

KELUARGA_COL = {
    "C": "com.kemendes.survey:id/txtNama",
    "D": "com.kemendes.survey:id/txtAlamat",
    "E": "com.kemendes.survey:id/txtHP",
    "F": "com.kemendes.survey:id/txtNoTelpon",
    "G": "com.kemendes.survey:id/txtNIKKepalaKeluarga",
    "H": "com.kemendes.survey:id/cbTempatTinggal",
    "I": "com.kemendes.survey:id/cbStatusLahan",
    "J": "com.kemendes.survey:id/txtLuasLantaiTempatTinggal",
    "K": "com.kemendes.survey:id/txtLuasLahanTempatTinggal",
    "L": "com.kemendes.survey:id/cbJenisLantai",
    "M": "com.kemendes.survey:id/cbDinding",
    "N": "com.kemendes.survey:id/cbJendela",
    "O": "com.kemendes.survey:id/cbAtap",
    "P": "com.kemendes.survey:id/cbPenerangan",
    "Q": "com.kemendes.survey:id/cbEnergiMemasak",
    "R": "com.kemendes.survey:id/cbTempatPembuangan",
    "S": "com.kemendes.survey:id/cbFasilitasMCK",
    "T": "com.kemendes.survey:id/cbSumberAirMandi",
    "U": "com.kemendes.survey:id/cbFasilitasBuangAir",
    "V": "com.kemendes.survey:id/cbSumberAirMinum",
    "W": "com.kemendes.survey:id/cbTempatPembuanganLimbah",
    "X": "com.kemendes.survey:id/cbSUTET",
    "Y": "com.kemendes.survey:id/cbBantaranSungai",
    "Z": "com.kemendes.survey:id/cbRumahDiLereng",
    "AA": "com.kemendes.survey:id/cbKondisiRumah",
}


def get_data_lokasi(d: Device, ws: Worksheet, row: int):
    menu_to(d, "LOKASI & PEMUKIMAN")
    for col, resourceId in KELUARGA_COL.items():
        ws[f"{col}{row}"] = d_get_text(d, resourceId)
    d(className="android.widget.ScrollView").fling.vert.backward()
