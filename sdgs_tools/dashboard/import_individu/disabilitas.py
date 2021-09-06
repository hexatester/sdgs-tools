import attr
from typing import Dict, Optional

from .enums import YaTidak


MAPPING = {
    "Tunanetra": "tunanetra",
    "Tunarungu": "tunarungu",
    "Tunawicara": "tunawicara",
    "Tunarungu Wicara": "tunarungu_wicara",
    "Tunadaksa": "tunadaksa",
    "Tunagrahita": "tunagrahita",
    "Tunalaras": "tunalaras",
    "Cacat Eks Kusta": "cacat_eks_kusta",
    "Cacat Ganda": "cacat_ganda",
    "Dipasung": "dipasung",
}


@attr.dataclass
class Disabilitas:
    tunanetra: YaTidak = YaTidak.TIDAK
    tunarungu: YaTidak = YaTidak.TIDAK
    tunawicara: YaTidak = YaTidak.TIDAK
    tunarungu_wicara: YaTidak = YaTidak.TIDAK
    tunadaksa: YaTidak = YaTidak.TIDAK
    tunagrahita: YaTidak = YaTidak.TIDAK
    tunalaras: YaTidak = YaTidak.TIDAK
    cacat_eks_kusta: YaTidak = YaTidak.TIDAK
    cacat_ganda: YaTidak = YaTidak.TIDAK
    dipasung: YaTidak = YaTidak.TIDAK

    def todict(self) -> Dict[str, str]:
        return {
            "1": self.tunanetra.value,
            "2": self.tunarungu.value,
            "3": self.tunawicara.value,
            "4": self.tunarungu_wicara.value,
            "5": self.tunadaksa.value,
            "6": self.tunagrahita.value,
            "7": self.tunalaras.value,
            "8": self.cacat_eks_kusta.value,
            "9": self.cacat_ganda.value,
            "10": self.dipasung.value,
            "11": "2",
            "12": "2",
            "13": "2",
            "14": "2",
            "15": "2",
            "16": "2",
            "17": "2",
            "18": "2",
            "19": "2",
        }

    @classmethod
    def from_str(cls, val: Optional[str], t=None) -> "Disabilitas":
        if not val:
            return cls()
        data: Dict[str, YaTidak] = dict()
        for key, name in MAPPING.items():
            if key in val:
                data[name] = YaTidak.YA
            else:
                data[name] = YaTidak.TIDAK
        return cls(**data)
