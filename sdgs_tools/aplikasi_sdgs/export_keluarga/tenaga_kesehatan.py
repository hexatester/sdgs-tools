from typing import Any, Dict
from uiautomator2 import Device, UiObject

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to, swipe_box

AKSES_TENKES = {
    "SPESIALIS": "spesialis",
    "DOKTER": "dokter",
    "BIDAN": "bidan",
    "NAKES": "nakes",
    "DUKUN": "dukun",
}

TENAGA_KESEHATAN_COL = {
    # "B": ("com.kemendes.survey:id/txtNIK", ""),
    "jarak": ("com.kemendes.survey:id/txtNama", "Jarak : "),
    "waktu": ("com.kemendes.survey:id/txtAlamat", "Waktu Tempuh :"),
    "kemudahan": ("com.kemendes.survey:id/txtTelpon", "Kemudahan :"),
    # "F": ("com.kemendes.survey:id/txtStatus", ""),
}


def get_data_tenaga_kesehatan(d: Device):
    menu_to(d, "AKSES TENAGA KESEHATAN")
    tenkes: Dict[str, Dict[str, Any]] = dict()
    box_daftar_tenaga_kesehatan: UiObject = d(
        resourceId="com.kemendes.survey:id/itemsTenagaKesehatan"
    )
    survey_boxes: UiObject = box_daftar_tenaga_kesehatan.child(
        resourceId="com.kemendes.survey:id/box"
    )
    for survey_box in survey_boxes:
        data: Dict[str, Any] = dict()
        for name, (resourceId, lstrp) in TENAGA_KESEHATAN_COL.items():
            current = survey_box.child(resourceId=resourceId)
            value: str = current.info.get("text")
            if isinstance(value, str):
                data[name] = value.lstrip(lstrp)
        swipe_box(d, survey_box)
        # TODO Find The Key
        key: str = data["nama"]
        tenkes[AKSES_TENKES[key]] = data
    d(className="android.widget.ScrollView").fling.vert.backward()
    return tenkes
