from typing import Any, Dict
from uiautomator2 import Device

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to

KELUARGA_COL = {
    "nama": "com.kemendes.survey:id/txtNama",
    "alamat": "com.kemendes.survey:id/txtAlamat",
    "nomor_hp": "com.kemendes.survey:id/txtHP",
    "telepon_rumah": "com.kemendes.survey:id/txtNoTelpon",
    "nik": "com.kemendes.survey:id/txtNIKKepalaKeluarga",
    "tempat_tinggal": "com.kemendes.survey:id/cbTempatTinggal",
    "status_lahan": "com.kemendes.survey:id/cbStatusLahan",
    "lantai": "com.kemendes.survey:id/txtLuasLantaiTempatTinggal",
    "lahan": "com.kemendes.survey:id/txtLuasLahanTempatTinggal",
    "lantai": "com.kemendes.survey:id/cbJenisLantai",
    "dinding": "com.kemendes.survey:id/cbDinding",
    "jendela": "com.kemendes.survey:id/cbJendela",
    "atap": "com.kemendes.survey:id/cbAtap",
    "penerangan": "com.kemendes.survey:id/cbPenerangan",
    "energi_memasak": "com.kemendes.survey:id/cbEnergiMemasak",
    "pembuangan_sampah": "com.kemendes.survey:id/cbTempatPembuangan",
    "fasilitas_mck": "com.kemendes.survey:id/cbFasilitasMCK",
    "sumber_air_mandi": "com.kemendes.survey:id/cbSumberAirMandi",
    "fasilitas_bab": "com.kemendes.survey:id/cbFasilitasBuangAir",
    "sumber_air_minum": "com.kemendes.survey:id/cbSumberAirMinum",
    "pembuangan_limbah_cair": "com.kemendes.survey:id/cbTempatPembuanganLimbah",
    "bawah_sutet": "com.kemendes.survey:id/cbSUTET",
    "bantaran_sungai": "com.kemendes.survey:id/cbBantaranSungai",
    "lereng_gunung": "com.kemendes.survey:id/cbRumahDiLereng",
    "kumuh": "com.kemendes.survey:id/cbKondisiRumah",
}


def get_data_lokasi(d: Device) -> Dict[str, Any]:
    menu_to(d, "LOKASI & PEMUKIMAN")
    data: Dict[str, Any] = dict()
    for name, resourceId in KELUARGA_COL.items():
        data[name] = d_get_text(d, resourceId)
    data["luas"] = {"lantai": data.pop("lantai"), "lahan": data.pop("lahan")}
    d(className="android.widget.ScrollView").fling.vert.backward()
    return data
