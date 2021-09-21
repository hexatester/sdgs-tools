from datetime import datetime
from typing import Any, Dict
from uiautomator2 import Device, UiObjectNotFoundError

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

INDIVIDU_COL = {
    "nama": ("com.kemendes.survey:id/txtNama", None),
    "jenis_kelamin": ("com.kemendes.survey:id/cbJenisKelamin", None),
    "tempat_lahir": ("com.kemendes.survey:id/txtTempatLahir", None),
    "tanggal_lahir": ("com.kemendes.survey:id/txtTglLahir", None),
    "usia": ("com.kemendes.survey:id/txtUsia", None),
    "status_pernikahan": ("com.kemendes.survey:id/cbStatus", None),
    "usia_menikah": ("com.kemendes.survey:id/txtUsiaSaatNikah", None),
    "agama": ("com.kemendes.survey:id/cbAgama", None),
    "suku_bangsa": ("com.kemendes.survey:id/txtSuku", None),
    "warga_negara": ("com.kemendes.survey:id/cbWargaNegara", None),
    "nomor_hp": ("com.kemendes.survey:id/txtNoHP", None),
    "nomor_whatsapp": ("com.kemendes.survey:id/txtNoWA", "Nomor Untuk Whatsapp"),
    "alamat_email": ("com.kemendes.survey:id/txtEmail", "Email"),
    "alamat_facebook": ("com.kemendes.survey:id/txtFB", "Facebook"),
    "alamat_twitter": ("com.kemendes.survey:id/txtTwitter", "Twitter"),
    "alamat_instagram": ("com.kemendes.survey:id/txtInstagram", "Instagram"),
    "aktif_internet": ("com.kemendes.survey:id/cbInternet", None),
    # "akses_melalui": "com.kemendes.survey:id/cbAksesInternetLewat",
    # "kecepatan_internet": "com.kemendes.survey:id/cbKecepatanInternet",
}


def get_data_individu(d: Device) -> Dict[str, Any]:
    menu_to(d, "DATA INDIVIDU")
    data: Dict[str, Any] = dict()
    # d(text="DATA INDIVIDU").click()
    for name, (resourceId, default) in INDIVIDU_COL.items():
        try:
            value = d_get_text(d, resourceId)
            if default and value == default:
                continue
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
