import attr
import cattr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Dict

from . import Akses

MAPPING = {
    "K.P423_1spesialis": "spesialis",
    "K.P423_2dokter": "dokter",
    "K.P423_3Bidan": "bidan",
    "K.P423_4nakes": "nakes",
    "K.P423_5Dukun": "dukun",
}

MAPPING_VALUE = {
    "spesialis": ("CP", "CQ", "CR"),
    "dokter": ("CS", "CT", "CU"),
    "bidan": ("CV", "CW", "CX"),
    "nakes": ("CY", "CZ", "DA"),
    "dukun": ("DB", "DC", "DD"),
}


@attr.dataclass
class AksesTenagaKesehatan:
    spesialis: Akses
    dokter: Akses
    bidan: Akses
    nakes: Akses
    dukun: Akses

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
