import attr
import cattr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Dict

from . import SarprasTransport

MAPPING = {
    "K.P424_1pekerjaan": "pekerjaan",
    "K.P424_2pertanian": "pertanian",
    "K.P424_3sekolah": "sekolah",
    "K.P424_4berobat": "berobat",
    "K.P424_5ibadah": "ibadah",
    "K.P424_6rekreasi": "rekreasi",
}

MAPPING_VALUE = {
    "pekerjaan": ("DE", "DF", "DG", "DH", "DI"),
    "pertanian": ("DJ", "DK", "DL", "DM", "DN"),
    "sekolah": ("DO", "DP", "DQ", "DR", "DS"),
    "berobat": ("DT", "DU", "DV", "DW", "DX"),
    "ibadah": ("DY", "DZ", "EA", "EB", "EC"),
    "rekreasi": ("ED", "EE", "EF", "EG", "EH"),
}


@attr.dataclass
class AksesSarprasTransport:
    pekerjaan: SarprasTransport
    pertanian: SarprasTransport
    sekolah: SarprasTransport
    berobat: SarprasTransport
    ibadah: SarprasTransport
    rekreasi: SarprasTransport

    def todict(self) -> Dict[str, Dict[str, str]]:
        data: Dict[str, Dict[str, str]] = dict()
        for key, name in MAPPING.items():
            value: SarprasTransport = getattr(self, name)
            data[key] = cattr.unstructure(value)
        return data

    @staticmethod
    def make(ws: Worksheet, row: int) -> Dict[str, Dict[str, str]]:
        data: Dict[str, Dict[str, str]] = dict()
        for name, args in MAPPING_VALUE.items():
            data[name] = SarprasTransport.from_cols(ws, row, *args)
        return data
