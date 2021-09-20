from typing import Any, Dict
from uiautomator2 import Device

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to


BANTUAN_PEMERINTAH = [
    "blt_dd",
    "pkh",
    "bst",
    "banpres",
    "umkm",
    "bantuan_pekerja",
    "bantuan_pendidikan_anak",
    "lainnya",
]

LAIN_LAIN_COL = {
    "transport_umum": "com.kemendes.survey:id/txtTransportUmumSebulanTerakhir",
    "transport_umum_bulan_sebelumnya": "com.kemendes.survey:id/txtTranportUmumSebelumnya",
    # Bantuan
    "blt_dd": "com.kemendes.survey:id/cbBLT",
    "pkh": "com.kemendes.survey:id/cbPKH",
    "bst": "com.kemendes.survey:id/cbBST",
    "banpres": "com.kemendes.survey:id/cbBanpres",
    "umkm": "com.kemendes.survey:id/cbUMKM",
    "bantuan_pekerja": "com.kemendes.survey:id/cbBantuanPekerja",
    "bantuan_pendidikan_anak": "com.kemendes.survey:id/cbBantuanPendidikan",
    "lainnya": "com.kemendes.survey:id/cbBantuanLainnya",
    # Lain
    "pengeluaran_bulanan": "com.kemendes.survey:id/txtPengeluaranRata2",
}


def get_data_lain_lain(d: Device) -> Dict[str, Any]:
    menu_to(d, "LAIN-LAIN")
    data: Dict[str, Any] = dict()
    for name, resourceId in LAIN_LAIN_COL.items():
        data[name] = d_get_text(d, resourceId)
    bantuan: Dict[str, Any] = dict()
    for name in BANTUAN_PEMERINTAH:
        bantuan[name] = data.pop(name)
    data["penerima_program_pemerintah"] = bantuan
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
