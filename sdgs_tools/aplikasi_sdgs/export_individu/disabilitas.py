from uiautomator2 import Device
from typing import Any, Dict

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

DISABILITAS_COL = {
    "tunanetra": "com.kemendes.survey:id/cbTunanetra",
    "tunarungu": "com.kemendes.survey:id/cbTunarungu",
    "tunawicara": "com.kemendes.survey:id/cbTunawicara",
    "tunarungu_wicara": "com.kemendes.survey:id/cbTunarungiwicara",
    "tunadaksa": "com.kemendes.survey:id/cbTunadaksa",
    "tunagrahita": "com.kemendes.survey:id/cbTunagrahita",
    "tunalaras": "com.kemendes.survey:id/cbTunalaras",
    "cacat_eks_kusta": "com.kemendes.survey:id/cbCacat_eks_kusta",
    "cacat_ganda": "com.kemendes.survey:id/cbCacat_ganda",
    "dipasung": "com.kemendes.survey:id/cbDipasung",
}


def get_data_disabilitas(d: Device) -> Dict[str, Any]:
    menu_to(d, "DISABILITAS")
    data: Dict[str, Any] = dict()
    for name, resourceId in DISABILITAS_COL.items():
        data[name] = d_get_text(d, resourceId)
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
