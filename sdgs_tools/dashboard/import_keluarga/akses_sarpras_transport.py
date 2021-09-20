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
    "pekerjaan": ("DF", "DG", "DH", "DI", "DJ"),
    "pertanian": ("DK", "DL", "DM", "DN", "DO"),
    "sekolah": ("DP", "DQ", "DR", "DS", "DT"),
    "berobat": ("DU", "DV", "DW", "DX", "DY"),
    "ibadah": ("DZ", "EA", "EB", "EC", "ED"),
    "rekreasi": ("EE", "EF", "EG", "EH", "EI"),
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

    def save(self, ws: Worksheet, row: int):
        for name, args in MAPPING_VALUE.items():
            sarpras: SarprasTransport = getattr(self, name)
            sarpras.save(ws, row, *args)
