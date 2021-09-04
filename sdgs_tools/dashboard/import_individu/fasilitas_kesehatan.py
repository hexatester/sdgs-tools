import attr
import cattr
from typing import Dict


@attr.dataclass
class FasilitasKesehatan:
    rumah_sakit: int = 0
    rumah_sakit_bersalin: int = 0
    puskesmas_rawat_inap: int = 0
    puskesmas_tanpa_inap: int = 0
    puskesmas_pembantu: int = 0
    poliklinik: int = 0
    tempat_praktik_dokter: int = 0
    rumah_bersalin: int = 0
    tempat_praktik_bidan: int = 0
    poskesdes: int = 0
    polindes: int = 0
    apotik: int = 0
    toko_obat_jamu: int = 0
    posyandu: int = 0
    posbindu: int = 0
    tempat_praktik_dukun: int = 0

    def todict(self) -> Dict[str, str]:
        return {
            "1": str(self.rumah_sakit),
            "2": str(self.rumah_sakit_bersalin),
            "3": str(self.puskesmas_rawat_inap),
            "4": str(self.puskesmas_tanpa_inap),
            "5": str(self.puskesmas_pembantu),
            "6": str(self.poliklinik),
            "7": str(self.tempat_praktik_dokter),
            "8": str(self.rumah_bersalin),
            "9": str(self.tempat_praktik_bidan),
            "10": str(self.poskesdes),
            "11": str(self.polindes),
            "12": str(self.apotik),
            "13": str(self.toko_obat_jamu),
            "14": str(self.posyandu),
            "15": str(self.posbindu),
            "16": str(self.tempat_praktik_dukun),
        }


cattr.register_unstructure_hook(FasilitasKesehatan, FasilitasKesehatan.todict)
