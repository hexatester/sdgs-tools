from typing import Any, Dict
from uiautomator2 import Device

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

# resourceId
PENDIDIKAN_COL = {
    "pendidikan_tertinggi": "com.kemendes.survey:id/cbPendidikanTertinggi",
    "tahun_pendidikan": "com.kemendes.survey:id/txtTahunPendidikanDasar",
    # pendidikan_diikuti?
    # pelatihan_diikuti?
    "bahasa_permukiman": "com.kemendes.survey:id/txtBahasa",
    "bahasa_formal": "com.kemendes.survey:id/txtBahasaLembaga",
    "kerja_bakti": "com.kemendes.survey:id/txtKerjaBakti",
    "siskamling": "com.kemendes.survey:id/txtSiskamling",
    "pesta_rakyat": "com.kemendes.survey:id/txtPestaRakyat",
    "menolong_kematian": "com.kemendes.survey:id/txtMenolongKematian",
    "menolong_sakit": "com.kemendes.survey:id/txtMenolongSakit",
    "menolong_kecelakaan": "com.kemendes.survey:id/txtMenolongKecelakaan",
    "memperoleh_pelayanan_desa": "com.kemendes.survey:id/cbPerolehPelayananDesa",
    # pelayanan_desa?
    "saran_desa": "com.kemendes.survey:id/cbMasukan",
    # keterbukaan_desa?
    "terjadi_bencana": "com.kemendes.survey:id/cbBencana",
    # terdampak_bencana?
}


def get_data_pendidikan(d: Device) -> Dict[str, Any]:
    menu_to(d, "PENDIDIKAN")
    data: Dict[str, Any] = dict()
    d(text="PENDIDIKAN").click()
    for name, resourceId in PENDIDIKAN_COL.items():
        data[name] = d_get_text(d, resourceId)
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
