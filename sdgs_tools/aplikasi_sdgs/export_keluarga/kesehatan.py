from typing import Any, Dict
from uiautomator2 import Device, UiObject

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to, swipe_box

AKSES_KESEHATAN = {
    "Rumah Sakit": "rs",
    "Rumah Sakit Bersalin": "bersalin",
    "Poliklinik": "poliklinik",
    "Puskesmas": "puskesmas",
    "Puskesmas Pembantu": "pustu",
    "Polindes": "polindes",
    "Poskesdes": "poskesdes",
    "Posyandu": "posyandu",
    "Apotik": "apotik",
    "Toko": "toko",
}

KESEHATAN_COL = {
    # "B": ("com.kemendes.survey:id/txtNIK", ""),
    "nama": ("com.kemendes.survey:id/txtNIK", "", ""),
    "jarak": ("com.kemendes.survey:id/txtNama", "Jarak : ", " km"),
    "waktu": ("com.kemendes.survey:id/txtAlamat", "Waktu Tempuh :", " jam"),
    "kemudahan": ("com.kemendes.survey:id/txtTelpon", "Kemudahan :", ""),
    # "F": ("com.kemendes.survey:id/txtStatus", ""),
}


def get_data_kesehatan(d: Device) -> Dict[str, Dict[str, Any]]:
    menu_to(d, "AKSES KESEHATAN")
    kesehatan: Dict[str, Dict[str, Any]] = dict()
    box_daftar_kesehatan: UiObject = d(
        resourceId="com.kemendes.survey:id/itemsKesehatan"
    )
    survey_boxes: UiObject = box_daftar_kesehatan.child(
        resourceId="com.kemendes.survey:id/box"
    )
    for survey_box in survey_boxes:
        data: Dict[str, Any] = dict()
        for name, (resourceId, lstrp, rstrp) in KESEHATAN_COL.items():
            current = survey_box.child(resourceId=resourceId)
            value: str = current.info.get("text")
            if isinstance(value, str):
                value = value.lstrip(lstrp)
                data[name] = value.rstrip(rstrp)
        swipe_box(d, survey_box)
        key: str = data.pop("nama")
        kesehatan[AKSES_KESEHATAN[key]] = data
    d(className="android.widget.ScrollView").fling.vert.backward()
    return kesehatan
