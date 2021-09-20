from datetime import datetime
from typing import Any, Dict
from uiautomator2 import Device, UiObjectNotFoundError

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

INDIVIDU_COL = {
    "nama": "com.kemendes.survey:id/txtNama",
    "jenis_kelamin": "com.kemendes.survey:id/cbJenisKelamin",
    "tempat_lahir": "com.kemendes.survey:id/txtTempatLahir",
    "tanggal_lahir": "com.kemendes.survey:id/txtTglLahir",
    "usia": "com.kemendes.survey:id/txtUsia",
    "status_pernikahan": "com.kemendes.survey:id/cbStatus",
    "usia_menikah": "com.kemendes.survey:id/txtUsiaSaatNikah",
    "agama": "com.kemendes.survey:id/cbAgama",
    "suku_bangsa": "com.kemendes.survey:id/txtSuku",
    "warga_negara": "com.kemendes.survey:id/cbWargaNegara",
    "nomor_hp": "com.kemendes.survey:id/txtNoHP",
    "nomor_whatsapp": "com.kemendes.survey:id/txtNoWA",
    "alamat_email": "com.kemendes.survey:id/txtEmail",
    "alamat_facebook": "com.kemendes.survey:id/txtFB",
    "alamat_twitter": "com.kemendes.survey:id/txtTwitter",
    "alamat_instagram": "com.kemendes.survey:id/txtInstagram",
    "aktif_internet": "com.kemendes.survey:id/cbInternet",
    # "akses_melalui": "com.kemendes.survey:id/cbAksesInternetLewat",
    # "kecepatan_internet": "com.kemendes.survey:id/cbKecepatanInternet",
}


def get_data_individu(d: Device) -> Dict[str, Any]:
    menu_to(d, "DATA INDIVIDU")
    data: Dict[str, Any] = dict()
    # d(text="DATA INDIVIDU").click()
    for name, resourceId in INDIVIDU_COL.items():
        try:
            data[name] = d_get_text(d, resourceId)
        except UiObjectNotFoundError:
            continue
    if data["aktif_internet"] == "Ya":
        # Internet = Ya
        data["akses_melalui"] = d_get_text(
            d, "com.kemendes.survey:id/cbAksesInternetLewat"
        )
        data["kecepatan_internet"] = d_get_text(
            d, "com.kemendes.survey:id/cbKecepatanInternet"
        )
    tanggal, bulan, tahun = data["tanggal_lahir"].split("/")
    data["tanggal_lahir"] = datetime(int(tahun), int(bulan), int(tanggal)).date()
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
