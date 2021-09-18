from typing import Any, Dict, Optional
from uiautomator2 import Device, UiObject

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to


# resourceId
FASILITAS_KESEHATAN_COL = {
    # Kesehatan - Fasilitas kesehatan
    "rumah_sakit": "com.kemendes.survey:id/txtRS",
    "rumah_sakit_bersalin": "com.kemendes.survey:id/txtRSBersalin",
    "puskesmas_rawat_inap": "com.kemendes.survey:id/txtPuskesmasRawatInap",
    "puskesmas_tanpa_inap": "com.kemendes.survey:id/txtPuskesmasTanpaRawatInap",
    "puskesmas_pembantu": "com.kemendes.survey:id/txtPuskesmasPembantu",
    "poliklinik": "com.kemendes.survey:id/txtPoliklinik",
    "tempat_praktik_dokter": "com.kemendes.survey:id/txtPraktikDokter",
    "rumah_bersalin": "com.kemendes.survey:id/txtRumahBersalin",
    "tempat_praktik_bidan": "com.kemendes.survey:id/txtPraktikBidan",
    "poskesdes": "com.kemendes.survey:id/txtPoskedes",
    "polindes": "com.kemendes.survey:id/txtPolindes",
    "apotik": "com.kemendes.survey:id/txtApotik",
    "toko_obat_jamu": "com.kemendes.survey:id/txtTokoKhusus",
    "posyandu": "com.kemendes.survey:id/txtPosyandu",
    "posbindu": "com.kemendes.survey:id/txtPosbindu",
    "tempat_praktik_dukun": "com.kemendes.survey:id/txtPraktikDukun",
}


def get_data_fasilitas_kesehatan(d: Device) -> Dict[str, Any]:
    menu_to(d, "KESEHATAN")
    data: Dict[str, Any] = dict()
    # d(text="KESEHATAN").click()
    for name, resourceId in FASILITAS_KESEHATAN_COL.items():
        value = d_get_text(d, resourceId)
        if value != "Jumlah":
            data[name] = value
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
