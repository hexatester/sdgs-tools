from uiautomator2 import Device, UiObject
from typing import Any, Dict, Optional

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

from .fasilitas import get_data_fasilitas_kesehatan
from .penyakit import get_data_penyakit


__all__ = [
    "get_data_fasilitas_kesehatan",
    "get_data_penyakit",
]


# resourceId
KESEHATAN_COL = {
    # Kesehatan
    "jamsos_kesehatan": "com.kemendes.survey:id/cbJaminanKesehatanIndividu",
    "setahun_melahirkan": "com.kemendes.survey:id/cbMelahirkan",
}


def get_data_kesehatan(d: Device) -> Dict[str, Any]:
    menu_to(d, "KESEHATAN")
    data: Dict[str, Any] = dict()
    # d(text="KESEHATAN").click()
    data["penyakit_diderita"] = get_data_penyakit(d)
    data["fasilitas_kesehatan"] = get_data_fasilitas_kesehatan(d)
    for name, resourceId in KESEHATAN_COL.items():
        value = d_get_text(d, resourceId)
        if value != "Jumlah":
            data[name] = value
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
