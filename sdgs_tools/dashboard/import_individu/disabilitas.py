import attr
import cattr
from typing import Dict

from sdgs_tools.dashboard.enums import YaTidak


MAPPING = {
    "Tunanetra": "tunanetra",
    "Tunarungu": "tunarungu",
    "Tunawicara": "tunawicara",
    "Tunarungu_wicara": "tunarungu_wicara",
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
            "1": "1" if self.tunanetra else "2",
            "2": "1" if self.tunarungu else "2",
            "3": "1" if self.tunawicara else "2",
            "4": "1" if self.tunarungu_wicara else "2",
            "5": "1" if self.tunadaksa else "2",
            "6": "1" if self.tunagrahita else "2",
            "7": "1" if self.tunalaras else "2",
            "8": "1" if self.cacat_eks_kusta else "2",
            "9": "1" if self.cacat_ganda else "2",
            "10": "1" if self.dipasung else "2",
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
    def from_str(cls, val: str):
        if not val:
            return cls()
        data: Dict[str, YaTidak] = dict()
        for key, name in MAPPING.items():
            if key in val:
                data[name] = YaTidak.YA
            else:
                data[name] = YaTidak.TIDAK
        return cls(**data)


cattr.register_unstructure_hook(Disabilitas, Disabilitas.todict)
