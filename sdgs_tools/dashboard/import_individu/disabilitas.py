import attr
from typing import Dict

MAPPING = {
    "1": "tunanetra",
    "2": "tunarungu",
    "3": "tunawicara",
    "4": "tunarungu_wicara",
    "5": "tunadaksa",
    "6": "tunagrahita",
    "7": "tunalaras",
    "8": "cacat_eks_kusta",
    "9": "cacat_ganda",
    "10": "dipasung",
}


@attr.dataclass
class Disabilitas:
    tunanetra: str
    tunarungu: str
    tunawicara: str
    tunarungu_wicara: str
    tunadaksa: str
    tunagrahita: str
    tunalaras: str
    cacat_eks_kusta: str
    cacat_ganda: str
    dipasung: str
