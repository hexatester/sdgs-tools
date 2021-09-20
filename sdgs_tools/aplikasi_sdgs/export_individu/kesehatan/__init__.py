from uiautomator2 import Device, UiObject
from typing import Any, Dict, Optional

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

from .fasilitas import get_data_fasilitas_kesehatan
from .penyakit import get_data_penyakit


__all__ = [
    "get_data_fasilitas_kesehatan",
    "get_data_penyakit",
]


def get_data_kesehatan(d: Device) -> Dict[str, Any]:
    menu_to(d, "KESEHATAN")
    data: Dict[str, Any] = dict()
    # d(text="KESEHATAN").click()
    data["penyakit_diderita"] = get_data_penyakit(d)
    data["fasilitas_kesehatan"] = get_data_fasilitas_kesehatan(d)
    jamsos_kesehatan = d_get_text(
        d, "com.kemendes.survey:id/cbJaminanKesehatanIndividu"
    )
    if jamsos_kesehatan == "Peserta":
        data["jamsos_kesehatan"] = "Ya"
    else:
        data["jamsos_kesehatan"] = "Tidak"
    data["setahun_melahirkan"] = d_get_text(d, "com.kemendes.survey:id/cbMelahirkan")
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
