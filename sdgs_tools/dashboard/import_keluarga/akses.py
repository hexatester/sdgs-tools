import attr
from openpyxl.worksheet.worksheet import Worksheet


@attr.dataclass
class Akses:
    jarak: str
    waktu: str
    kemudahan: str

    @staticmethod
    def from_cols(ws: Worksheet, row: int, j: str, w: str, k: str):
        return {
            "jarak": ws[f"{j}{row}"],
            "waktu": ws[f"{w}{row}"],
            "kemudahan": ws[f"{k}{row}"],
        }
