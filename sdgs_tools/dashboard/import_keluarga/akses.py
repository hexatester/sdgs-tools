import attr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, Optional

from .enums import YaTidak


@attr.dataclass
class Akses:
    jarak: Optional[float] = None
    waktu: Optional[float] = None
    kemudahan: Optional[YaTidak] = None

    @staticmethod
    def from_cols(ws: Worksheet, row: int, j: str, w: str, k: str):
        return {
            "jarak": ws[f"{j}{row}"].value,
            "waktu": ws[f"{w}{row}"].value,
            "kemudahan": ws[f"{k}{row}"].value,
        }

    def todict(self) -> Dict[str, Any]:
        data: Dict[str, Any] = dict()
        if isinstance(self.jarak, float):
            data["jarak"] = str(self.jarak)
        else:
            data["jarak"] = None
        if isinstance(self.waktu, float):
            waktu = float(self.waktu) / 60
            data["waktu"] = str(round(waktu, 4))
        else:
            data["waktu"] = None
        if self.kemudahan is None:
            data["kemudahan"] = None
        else:
            data["kemudahan"] = self.kemudahan.value
        return data
