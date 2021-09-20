from typing import Any, Dict, List, Optional
from uiautomator2 import Device, UiObject

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

SUBTITUTE = {
    "Palawija (jagung,kacang-kacangan,ubi-ubian,dll)": "Palawija",
    "Hortikultura (buah-buahan,sayur-sayuran,tanaman hias,obat2an)": "Hortikultura",
    "Ternak  besar lainnya (kuda, kerbau, dll)": "Ternak  besar lainnya",
    "Ayam pedaging": "Ayam pedaging",
    "Telur ayam": "Telur ayam",
    "Ternak kecil lainnya (bebek, burung, dll)": "Ternak kecil lainnya",
    "Perikanan tangkap (termasuk biota lainnya)": "Perikanan tangkap",
    "Perikanan budidaya (termasuk biota lainnya)": "Perikanan budidaya",
    "Budidaya tanaman kehutanan (jati, mahoni, sengon, dll)": "Budidaya tanaman kehutanan",
    "Pemungutan hasil hutan (madu, gaharu, buah-buahan, kayu bakar, rotan, dll)": "Pemungutan hasil hutan",
    "Penangkapan satwa liar (babi, ayam hutan, kijang, dll)": "Penangkapan satwa liar",
    "Penangkaran satwa liar (arwana, buaya, dll)": "Penangkaran satwa liar",
    "Jasa pertanian (sewa traktor, penggilingan, dll)": "Jasa pertanian",
    "Uang Pensiun": "Uang Pensiunan",
    "TKI di luar negeri": "TKI di luar negeri",
    "Sumbangan (dari keluarga, dari pemerintah)": "Sumbangan",
}

# PER BOX! resourceId
PENGHASILAN_COL = {
    # "A": "NIK",
    "sumber_penghasilan": ("com.kemendes.survey:id/txtSumber", None),
    "penghasilan_jumlah": ("com.kemendes.survey:id/txtJumlah", None),
    # "D": ("com.kemendes.survey:id/txtSatuan", None),
    "penghasilan_setahun": (
        "com.kemendes.survey:id/txtPenghasilanSetahun",
        "Penghasilan setahun : ",
    ),
    "penghasilan_diekspor": ("com.kemendes.survey:id/txtDiekspor", "Ekspor : "),
    # "G": ("com.kemendes.survey:id/txtStatus", None),
}


def get_text(box: UiObject, resourceId: str, lstrip: str = None) -> Optional[str]:
    value: Optional[str] = None
    content = box.child(resourceId=resourceId)
    if content.exists:
        value = content.info.get("text")
    if value and lstrip:
        value = value.lstrip(lstrip)
    return value


def get_data_penghasilan(d: Device) -> List[Dict[str, Any]]:
    menu_to(d, "PENGHASILAN")
    # d(text="PENGHASILAN").click()
    box_daftar_penghasilan = d(resourceId="com.kemendes.survey:id/itemsPenghasilan")
    survey_box: UiObject = box_daftar_penghasilan.child(
        resourceId="com.kemendes.survey:id/box"
    )
    results: List[Dict[str, Any]] = list()
    for box_penghasilan in survey_box:
        data: Dict[str, Any] = dict()
        for name, resourceId_lstrip in PENGHASILAN_COL.items():
            data[name] = get_text(box_penghasilan, *resourceId_lstrip)
        old_pekerjaan = data["sumber_penghasilan"]
        if old_pekerjaan in SUBTITUTE:
            data["pekerjaan_utama"] = SUBTITUTE[old_pekerjaan]
        results.append(data)
    d(className="android.widget.ScrollView").fling.vert.backward()
    return results
