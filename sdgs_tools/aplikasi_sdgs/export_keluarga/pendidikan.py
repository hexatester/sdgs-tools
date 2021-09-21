from typing import Any, Dict
from uiautomator2 import Device, UiObject

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to, swipe_box

AKSES_PENDIDIKAN = {
    "PAUD": "paud",
    "TK/RA": "tk",
    "SD/MI atau sederajat": "sd",
    "SMP/MTs atau sederajat": "smp",
    "SMA/MA atau sederajat": "sma",
    "Perguruan Tinggi": "pt",
    "Pesantren": "pesantren",
    "Seminari": "seminari",
    "Pendidikan Keagamaan Lain": "lainnya",
}

PENDIDIKAN_COL = {
    # "B": ("com.kemendes.survey:id/txtNIK", ""),
    "nama": ("com.kemendes.survey:id/txtNIK", "", ""),
    "jarak": ("com.kemendes.survey:id/txtNama", "Jarak : ", " km"),
    "waktu": ("com.kemendes.survey:id/txtAlamat", "Waktu Tempuh :", " jam"),
    "kemudahan": ("com.kemendes.survey:id/txtTelpon", "Kemudahan :", ""),
    # "F": ("com.kemendes.survey:id/txtStatus", ""),
}


def get_data_pendidikan(d: Device) -> Dict[str, Dict[str, Any]]:
    menu_to(d, "AKSES PENDIDIKAN")
    pendidikan: Dict[str, Dict[str, Any]] = dict()
    box_daftar_pendidikan: UiObject = d(
        resourceId="com.kemendes.survey:id/itemsPendidikan"
    )
    survey_boxes: UiObject = box_daftar_pendidikan.child(
        resourceId="com.kemendes.survey:id/box"
    )
    for survey_box in survey_boxes:
        data: Dict[str, Any] = dict()
        for name, (resourceId, lstrp, rstrp) in PENDIDIKAN_COL.items():
            current = survey_box.child(resourceId=resourceId)
            # if not current.exists:
            #     continue
            value: str = current.info.get("text")
            if isinstance(value, str):
                value = value.lstrip(lstrp)
                data[name] = value.rstrip(rstrp)
        swipe_box(d, survey_box)
        pend: str = data.pop("nama")
        pendidikan[AKSES_PENDIDIKAN[pend]] = data
    d(className="android.widget.ScrollView").fling.vert.backward()
    return pendidikan
