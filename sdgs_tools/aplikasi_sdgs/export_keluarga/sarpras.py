from typing import Any, Dict
from uiautomator2 import Device, UiObject

from sdgs_tools.aplikasi_sdgs.utils import d_get_text, menu_to, swipe_box

AKSES_SARPRAS = {
    "Lokasi pekerjaan utama": "pekerjaan",
    "Lahan pertanian yang sedang diusahakan": "pertanian",
    "Sekolah": "sekolah",
    "Berobat": "berobat",
    "Beribadah Mingguan/Bulanan/Tahunan": "ibadah",
    "Rekreasi Terdekat": "rekreasi",
}

SARPRAS_COL = {
    # "C": ("com.kemendes.survey:id/txtNama", "Tujuan : Lokasi pekerjaan utama Jenis Transportasi : Darat"),
    # "D": ("com.kemendes.survey:id/txtAlamat", "Waktu Tempuh :0.25 jam, Biaya : 5000"),
    "kemudahan": ("com.kemendes.survey:id/txtTelpon", "Kemudahan :"),
    # "H": ("com.kemendes.survey:id/txtStatus", ""),
}


def get_data_sarpras(d: Device) -> Dict[str, Dict[str, Any]]:
    menu_to(d, "AKSES SARANA PRASARANA")
    sarpras: Dict[str, Dict[str, Any]] = dict()
    box_daftar_sarpras: UiObject = d(resourceId="com.kemendes.survey:id/itemsSarana")
    survey_boxes: UiObject = box_daftar_sarpras.child(
        resourceId="com.kemendes.survey:id/box"
    )
    for survey_box in survey_boxes:
        data: Dict[str, Any] = dict()
        # Kemudahan
        kemudahan_box = survey_box.child(resourceId="com.kemendes.survey:id/txtTelpon")
        kemudahan: str = kemudahan_box.info.get("text")
        data["kemudahan"] = kemudahan.lstrip("Kemudahan :")
        # Tujuan & Jenis
        tujuan_jenis: str = survey_box.child(
            resourceId="com.kemendes.survey:id/txtNama"
        ).info.get("text")
        tujuan_jenis = tujuan_jenis.lstrip("Tujuan : ")
        tujuan_jenis = tujuan_jenis.replace(" Jenis Transportasi", "")
        tujuan, jenis = tujuan_jenis.split(":")
        nama = tujuan.strip()
        data["jenis"] = jenis.strip()
        # Waktu & Biaya
        waktu_biaya: str = survey_box.child(
            resourceId="com.kemendes.survey:id/txtAlamat"
        ).info.get("text")
        waktu_biaya = waktu_biaya.lstrip("Waktu Tempuh :")
        waktu_biaya = waktu_biaya.replace(", Biaya", "")
        waktu, biaya = waktu_biaya.split(":")
        data["waktu"] = waktu.strip()
        data["biaya"] = biaya.strip()
        swipe_box(d, survey_box)
        sarpras[AKSES_SARPRAS[nama]] = data
    d(className="android.widget.ScrollView").fling.vert.backward()
    return sarpras
