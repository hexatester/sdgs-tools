from uiautomator2 import Device, UiObject
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, Optional

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

MAPPING = {
    "Mutaber Diare": "mutaber_diare",
    "Demam Berdarah": "demam_berdarah",
    "Campak": "campak",
    "Malaria": "malaria",
    "Flu Burung Sars": "flu_burung_sars",
    "Covid19": "covid19",
    "Hepatitis B": "hepatitis_b",
    "Hepatitis E": "hepatitis_e",
    "Difteri": "difteri",
    "Chikungunya": "chikungunya",
    "Leptospirosis": "leptospirosis",
    "Kolera": "kolera",
    "Gizi Buruk": "gizi_buruk",
    "Jantung": "jantung",
    "TBC Paru-Paru": "tbc_paru_paru",
    "Kanker": "kanker",
    "Diabetes": "diabetes",
    "Lumpuh": "lumpuh",
    "Lainnya": "lainnya",
}

# resourceId
PENYAKIT_COL = {
    # Kesehatan - Penyakit
    "mutaber_diare": "com.kemendes.survey:id/cbMuntaber",
    "demam_berdarah": "com.kemendes.survey:id/cbDemamBerdarah",
    "campak": "com.kemendes.survey:id/cbCampak",
    "malaria": "com.kemendes.survey:id/cbMalaria",
    "flu_burung_sars": "com.kemendes.survey:id/cbFlueBurung",
    "covid19": "com.kemendes.survey:id/cbCovid19",
    "hepatitis_b": "com.kemendes.survey:id/cbHepatisis",
    "hepatitis_e": "com.kemendes.survey:id/cbLeptospirosis",
    "difteri": "com.kemendes.survey:id/cbKolera",
    "chikungunya": "com.kemendes.survey:id/cbGiziburuk",
    "leptospirosis": "com.kemendes.survey:id/cbJantung",
    "kolera": "com.kemendes.survey:id/cbTBC",
    "gizi_buruk": "com.kemendes.survey:id/cbKanker",
    "jantung": "com.kemendes.survey:id/cbDiabetes",
    "tbc_paru_paru": "com.kemendes.survey:id/cbHepatisisE",
    "kanker": "com.kemendes.survey:id/cbDifteri",
    "diabetes": "com.kemendes.survey:id/cbChikungunya",
    "lumpuh": "com.kemendes.survey:id/cbLumpuh",
    "lainnya": "com.kemendes.survey:id/cbLainnya",
    # "BJ": "com.kemendes.survey:id/cbJaminanKesehatanIndividu",
    # "BK": "com.kemendes.survey:id/cbMelahirkan",
}


def get_data_penyakit(d: Device) -> Dict[str, Any]:
    menu_to(d, "KESEHATAN")
    data: Dict[str, Any] = dict()
    # d(text="KESEHATAN").click()
    for name, resourceId in PENYAKIT_COL.items():
        value = d_get_text(d, resourceId)
        if value != "Jumlah":
            data[name] = value
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
