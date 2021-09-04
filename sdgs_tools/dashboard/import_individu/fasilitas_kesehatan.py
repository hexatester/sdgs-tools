import attr
from typing import Dict

MAPPING = {
    "1": "rumah_sakit",
    "2": "rumah_sakit_bersalin",
    "3": "puskesmas_rawat_inap",
    "4": "puskesmas_tanpa_inap",
    "5": "puskesmas_pembantu",
    "6": "poliklinik",
    "7": "tempat_praktik_dokter",
    "8": "rumah_bersalin",
    "9": "tempat_praktik_bidan",
    "10": "poskesdes",
    "11": "polindes",
    "12": "apotik",
    "13": "toko_obat_jamu",
    "14": "posyandu",
    "15": "posbindu",
    "16": "tempat_praktik_dukun",
}


@attr.dataclass
class FasilitasKesehatan:
    rumah_sakit: int
    rumah_sakit_bersalin: int
    puskesmas_rawat_inap: int
    puskesmas_tanpa_inap: int
    puskesmas_pembantu: int
    poliklinik: int
    tempat_praktik_dokter: int
    rumah_bersalin: int
    tempat_praktik_bidan: int
    poskesdes: int
    polindes: int
    apotik: int
    toko_obat_jamu: int
    posyandu: int
    posbindu: int
    tempat_praktik_dukun: int

    def todict(self) -> Dict[str, str]:
        data: Dict[str, str] = dict()
        for key, name in MAPPING.items():
            data["key"] = getattr(self, name, 0)
        return data
