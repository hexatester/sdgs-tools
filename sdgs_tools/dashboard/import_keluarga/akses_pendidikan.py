import attr
import cattr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Dict

from . import Akses

MAPPING = {
    "K.P421_1PAUD": "paud",
    "K.P421_2TK": "tk",
    "K.P421_3SD": "sd",
    "K.P421_4SMP": "smp",
    "K.P421_5SMA": "sma",
    "K.P421_6PT": "pt",
    "K.P421_7Pesantren": "pesantren",
    "K.P421_8Seminari": "seminari",
    "K.P421_9lainnya": "lainnya",
}


@attr.dataclass
class AksesPendidikan:
    paud: Akses
    tk: Akses
    sd: Akses
    smp: Akses
    sma: Akses
    pt: Akses
    pesantren: Akses
    seminari: Akses
    lainnya: Akses

    def todict(self) -> Dict[str, Dict[str, str]]:
        data: Dict[str, Dict[str, str]]
        for key, name in MAPPING.items():
            value: Akses = getattr(self, name)
            data[key] = cattr.unstructure(value)
        return data
