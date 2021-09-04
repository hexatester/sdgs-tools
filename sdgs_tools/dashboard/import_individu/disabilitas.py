import attr
import cattr
from typing import Dict

from sdgs_tools.dashboard.enums import YaTidak


@attr.dataclass
class Disabilitas:
    tunanetra: YaTidak
    tunarungu: YaTidak
    tunawicara: YaTidak
    tunarungu_wicara: YaTidak
    tunadaksa: YaTidak
    tunagrahita: YaTidak
    tunalaras: YaTidak
    cacat_eks_kusta: YaTidak
    cacat_ganda: YaTidak
    dipasung: YaTidak

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


cattr.register_unstructure_hook(Disabilitas, Disabilitas.todict)
