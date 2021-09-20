from typing import Any, Dict
from uiautomator2 import Device, UiObject

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to, swipe_box

AKSES_PENDIDIKAN = {
    "PAUD": "paud",
    "TK": "tk",
    "SD": "sd",
    "SMP": "smp",
    "SMA": "sma",
    "PT": "pt",
    "PESANTREN": "pesantren",
    "SEMINARI": "seminari",
    "LAINNYA": "lainnya",
}

PENDIDIKAN_COL = {
    # "B": ("com.kemendes.survey:id/txtNIK", ""),
    "jarak": ("com.kemendes.survey:id/txtNama", "Jarak : "),
    "waktu": ("com.kemendes.survey:id/txtAlamat", "Waktu Tempuh :"),
    "kemudahan": ("com.kemendes.survey:id/txtTelpon", "Kemudahan :"),
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
        for name, (resourceId, lstrp) in PENDIDIKAN_COL.items():
            current = survey_box.child(resourceId=resourceId)
            # if not current.exists:
            #     continue
            value: str = current.info.get("text")
            if isinstance(value, str):
                data[name] = value.lstrip(lstrp)
        swipe_box(d, survey_box)
        # TODO Find The Key
        pend: str = data["nama"]
        pendidikan[AKSES_PENDIDIKAN[pend]] = data
    d(className="android.widget.ScrollView").fling.vert.backward()
    return pendidikan
