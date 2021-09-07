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

MAPPING_VALUE = {
    "paud": ("AK", "AL", "AM"),
    "tk": ("AN", "AO", "AP"),
    "sd": ("AQ", "AR", "AS"),
    "smp": ("AT", "AU", "AV"),
    "sma": ("AW", "AX", "AY"),
    "pt": ("AZ", "BA", "BB"),
    "pesantren": ("BC", "BD", "BE"),
    "seminari": ("BF", "BG", "BH"),
    "lainnya": ("BI", "BJ", "BK"),
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
        data: Dict[str, Dict[str, str]] = dict()
        for key, name in MAPPING.items():
            value: Akses = getattr(self, name)
            data[key] = cattr.unstructure(value)
        return data

    @staticmethod
    def make(ws: Worksheet, row: int) -> Dict[str, Dict[str, str]]:
        data: Dict[str, Dict[str, str]] = dict()
        for name, args in MAPPING_VALUE.items():
            data[name] = Akses.from_cols(ws, row, *args)
        return data