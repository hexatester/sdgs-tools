from typing import Any, Dict
from uiautomator2 import Device

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

SUBTITUTE = {
    "Nelayan Pemilik Kapal/Perahu": "Nelayan Pemilik Kapal",
    "Nelayan Penyewa Kapal/Perahu": "Nelayan Penyewa Kapal",
    "Pensiunan": "Lainnya",
}

# EXCEL COL : d(resourceId="{}")
PEKERJAAN_COL = {
    "kondisi_pekerjaan": "com.kemendes.survey:id/cbKondisiPekerjaan",
    "pekerjaan_utama": "com.kemendes.survey:id/cbPekerjaanUtama",
    "jamsos_ketenagakerjaan": "com.kemendes.survey:id/cbJaminanSosial",
    "pekerjaan_penghasilan": "com.kemendes.survey:id/txtPenghasilan",
}


def get_data_pekerjaan(d: Device) -> Dict[str, Any]:
    menu_to(d, "PEKERJAAN")
    data: Dict[str, Any] = dict()
    # d(text="PEKERJAAN").click()
    for name, resourceId in PEKERJAAN_COL.items():
        data[name] = d_get_text(d, resourceId)
    d(className="android.widget.ScrollView").fling.vert.backward()
    old_pekerjaan = data["pekerjaan_utama"]
    if old_pekerjaan in SUBTITUTE:
        data["pekerjaan_utama"] = SUBTITUTE[old_pekerjaan]
    if data["jamsos_ketenagakerjaan"] == "Peserta":
        data["jamsos_ketenagakerjaan"] = "Ya"
    else:
        data["jamsos_ketenagakerjaan"] = "Tidak"
    return data
