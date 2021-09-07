import attr
from openpyxl.worksheet.worksheet import Worksheet

from .enums import YaTidak


@attr.dataclass
class Akses:
    jarak: str = "0"
    waktu: str = "0"
    kemudahan: YaTidak = YaTidak.YA

    @staticmethod
    def from_cols(ws: Worksheet, row: int, j: str, w: str, k: str):
        return {
            "jarak": ws[f"{j}{row}"],
            "waktu": ws[f"{w}{row}"],
            "kemudahan": ws[f"{k}{row}"],
        }
