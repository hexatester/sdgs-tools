import attr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, Optional

from .enums import YaTidak


@attr.dataclass
class Akses:
    jarak: Optional[float] = None
    waktu: Optional[float] = None
    kemudahan: YaTidak = YaTidak.TIDAK

    @staticmethod
    def from_cols(ws: Worksheet, row: int, j: str, w: str, k: str):
        return {
            "jarak": ws[f"{j}{row}"].value,
            "waktu": ws[f"{w}{row}"].value,
            "kemudahan": ws[f"{k}{row}"].value,
        }

    def todict(self) -> Dict[str, Any]:
        data: Dict[str, Any] = {
            "jarak": None,
            "waktu": None,
            "kemudahan": None,
        }
        if isinstance(self.jarak, float):
            if self.waktu == 0:
                data["jarak"] = "0"
            else:
                data["jarak"] = str(self.jarak)
        elif isinstance(self.jarak, int):
            data["jarak"] = str(self.jarak)
        if isinstance(self.waktu, float):
            if self.waktu == 0:
                data["waktu"] = "0"
            else:
                waktu = self.waktu / 60
                data["waktu"] = str(round(waktu, 4))
        elif isinstance(self.waktu, int):
            waktu = self.waktu / 60
            data["waktu"] = str(round(waktu, 4))
        data["kemudahan"] = self.kemudahan.value
        return data

    def save(self, ws: Worksheet, row: int, j: str, w: str, k: str):
        ws[f"{j}{row}"] = self.jarak
        ws[f"{w}{row}"] = self.waktu
        ws[f"{k}{row}"] = self.kemudahan.value
