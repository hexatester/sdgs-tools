from uiautomator2 import Device, UiObject
from openpyxl.worksheet.worksheet import Worksheet
from typing import Optional

from sdgs_tools.aplikasi_sdgs.utils import d_get_text


# resourceId
KESEHATAN_COL = {
    # Kesehatan - Penyakit
    "AA": "com.kemendes.survey:id/cbMuntaber",
    "AB": "com.kemendes.survey:id/cbDemamBerdarah",
    "AC": "com.kemendes.survey:id/cbCampak",
    "AC": "com.kemendes.survey:id/cbMalaria",
    "AE": "com.kemendes.survey:id/cbFlueBurung",
    "AF": "com.kemendes.survey:id/cbCovid19",
    "AG": "com.kemendes.survey:id/cbHepatisis",
    "AH": "com.kemendes.survey:id/cbLeptospirosis",
    "AI": "com.kemendes.survey:id/cbKolera",
    "AJ": "com.kemendes.survey:id/cbGiziburuk",
    "AK": "com.kemendes.survey:id/cbJantung",
    "AL": "com.kemendes.survey:id/cbTBC",
    "AM": "com.kemendes.survey:id/cbKanker",
    "AN": "com.kemendes.survey:id/cbDiabetes",
    "AO": "com.kemendes.survey:id/cbHepatisisE",
    "AP": "com.kemendes.survey:id/cbDifteri",
    "AQ": "com.kemendes.survey:id/cbChikungunya",
    "AR": "com.kemendes.survey:id/cbLumpuh",
    "AS": "com.kemendes.survey:id/cbLainnya",
    # Kesehatan - Fasilitas kesehatan
    "AT": "com.kemendes.survey:id/txtRS",
    "AU": "com.kemendes.survey:id/txtRSBersalin",
    "AV": "com.kemendes.survey:id/txtPuskesmasRawatInap",
    "AW": "com.kemendes.survey:id/txtPuskesmasTanpaRawatInap",
    "AX": "com.kemendes.survey:id/txtPuskesmasPembantu",
    "AY": "com.kemendes.survey:id/txtPoliklinik",
    "AZ": "com.kemendes.survey:id/txtPraktikDokter",
    "BA": "com.kemendes.survey:id/txtRumahBersalin",
    "BB": "com.kemendes.survey:id/txtPraktikBidan",
    "BC": "com.kemendes.survey:id/txtPoskedes",
    "BD": "com.kemendes.survey:id/txtPolindes",
    "BE": "com.kemendes.survey:id/txtApotik",
    "BF": "com.kemendes.survey:id/txtTokoKhusus",
    "BG": "com.kemendes.survey:id/txtPosyandu",
    "BH": "com.kemendes.survey:id/txtPosbindu",
    "BI": "com.kemendes.survey:id/txtPraktikDukun",
    "BJ": "com.kemendes.survey:id/cbJaminanKesehatanIndividu",
    "BK": "com.kemendes.survey:id/cbMelahirkan",
}


def get_data_kesehatan(d: Device, ws: Worksheet, row: int):
    d(text="KESEHATAN").click()
    for col, resourceId in KESEHATAN_COL.items():
        current = d(resourceId=resourceId)
        if not current.exists:
            d(scrollable=True).fling.vert.forward()
        if resourceId.startswith("com.kemendes.survey:id/txt"):
            value = current.info.get("text")
            if value != "Jumlah":
                ws[f"{col}{row}"] = value
