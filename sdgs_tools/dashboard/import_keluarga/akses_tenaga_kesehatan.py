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
    "spesialis": ("CQ", "CR", "CS"),
    "dokter": ("CT", "CU", "CV"),
    "bidan": ("CW", "CX", "CY"),
    "nakes": ("CZ", "DA", "DB"),
    "dukun": ("DC", "DD", "DE"),
}


@attr.dataclass
class AksesTenagaKesehatan:
    spesialis: Akses = attr.field(default=attr.Factory(Akses))
    dokter: Akses = attr.field(default=attr.Factory(Akses))
    bidan: Akses = attr.field(default=attr.Factory(Akses))
    nakes: Akses = attr.field(default=attr.Factory(Akses))
    dukun: Akses = attr.field(default=attr.Factory(Akses))

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

    def save(self, ws: Worksheet, row: int):
        for name, args in MAPPING_VALUE.items():
            akses: Akses = getattr(self, name)
            akses.save(ws, row, *args)
