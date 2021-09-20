import attr
import cattr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Dict

from . import Akses

MAPPING = {
    "K.P422_1RS": "rs",
    "K.P422_2bersalin": "bersalin",
    "K.P422_3Poliklinik": "poliklinik",
    "K.P422_4Puskesmas": "puskesmas",
    "K.P422_5pustu": "pustu",
    "K.P422_6Polindes": "polindes",
    "K.P422_7Poskesdes": "poskesdes",
    "K.P422_8Posyandu": "posyandu",
    "K.P422_9Apotik": "apotik",
    "K.P422_10Toko": "toko",
}

MAPPING_VALUE = {
    "rs": ("BM", "BN", "BO"),
    "bersalin": ("BP", "BQ", "BR"),
    "poliklinik": ("BS", "BT", "BU"),
    "puskesmas": ("BV", "BW", "BX"),
    "pustu": ("BY", "BZ", "CA"),
    "polindes": ("CB", "CC", "CD"),
    "poskesdes": ("CE", "CF", "CG"),
    "posyandu": ("CH", "CI", "CJ"),
    "apotik": ("CK", "CL", "CM"),
    "toko": ("CN", "CO", "CP"),
}


@attr.dataclass
class AksesFasilitasKesehatan:
    rs: Akses
    bersalin: Akses
    poliklinik: Akses
    puskesmas: Akses
    pustu: Akses
    polindes: Akses
    poskesdes: Akses
    posyandu: Akses
    apotik: Akses
    toko: Akses

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
