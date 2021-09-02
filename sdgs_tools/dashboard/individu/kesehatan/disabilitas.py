import attr
from typing import Dict


@attr.dataclass
class Disabilitas:
    tunanetra: bool = False
    tunarungu: bool = False
    tunawicara: bool = False
    tunarungu_wicara: bool = False
    tunadaksa: bool = False
    tunagrahita: bool = False
    tunalaras: bool = False
    cacat_eks_kusta: bool = False
    cacat_ganda: bool = False
    dipasung: bool = False

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
        }
