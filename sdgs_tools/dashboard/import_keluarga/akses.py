import attr
from openpyxl.worksheet.worksheet import Worksheet

from .enums import YaTidak


@attr.dataclass
class Akses:
    jarak: str = "0"
    waktu: str = "0"
    kemudahan: YaTidak = YaTidak.YA

    def __attrs_post_init__(self):
        waktu = int(self.waktu) / 60
        self.waktu = str(waktu)

    @staticmethod
    def from_cols(ws: Worksheet, row: int, j: str, w: str, k: str):
        return {
            "jarak": ws[f"{j}{row}"].value,
            "waktu": ws[f"{w}{row}"].value,
            "kemudahan": ws[f"{k}{row}"].value,
        }
