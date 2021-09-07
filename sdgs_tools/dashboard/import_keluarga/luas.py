import attr
from openpyxl.worksheet.worksheet import Worksheet


@attr.dataclass
class Luas:
    lantai: str
    lahan: str

    @staticmethod
    def make(ws: Worksheet, row: int):
        return {"lantai": ws[f"L{row}"].value, "lahan": ws[f"M{row}"].value}
