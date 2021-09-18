import attr
from enum import Enum
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, List, Optional

from .enums import Diekspor
from .enums import SumberPenghasilan


MAPPING_COLS = {
    # Sheet Penghasilan
    "sumber_penghasilan": "A",
    "penghasilan_comment": "B",
    "penghasilan_jumlah": "C",
    "penghasilan_setahun": "D",
    "penghasilan_diekspor": "E",
}


@attr.dataclass
class Penghasilan:
    penghasilan_diekspor: Optional[Diekspor] = None
    penghasilan_jumlah: Optional[str] = None
    penghasilan_setahun: Optional[str] = None
    sumber_penghasilan: Optional[SumberPenghasilan] = None
    penghasilan_comment: Optional[str] = None

    def __bool__(self):
        return self.sumber_penghasilan is not None

    def todict(self) -> Dict[str, Optional[str]]:
        data: Dict[str, Optional[str]] = {
            "diekspor": None,
            "jumlah": None,
            "penghasilan": None,
            "sumber_penghasilan": None,
        }
        if self.penghasilan_diekspor is not None:
            data["diekspor"] = str(self.penghasilan_diekspor.value)
        if self.penghasilan_jumlah is not None:
            data["jumlah"] = str(self.penghasilan_jumlah)
        if self.penghasilan_setahun is not None:
            data["penghasilan"] = str(self.penghasilan_setahun)
        if self.sumber_penghasilan is not None:
            data["sumber_penghasilan"] = str(self.sumber_penghasilan.value)
        if self.sumber_penghasilan is None:
            pass
        elif self.sumber_penghasilan.value == "other":
            if not self.penghasilan_comment:
                raise ValueError(
                    "comment harus diisi jika sumber_penghasilan = Lainnya"
                )
            data["sumber_penghasilan-Comment"] = self.penghasilan_comment
        return data

    @classmethod
    def default(
        cls,
        penghasilan_diekspor: Diekspor = None,
        penghasilan_jumlah: str = None,
        penghasilan_setahun: str = None,
        sumber_penghasilan: SumberPenghasilan = None,
        penghasilan_comment: str = None,
    ):
        return attr.asdict(
            cls(
                penghasilan_diekspor=penghasilan_diekspor,
                penghasilan_jumlah=penghasilan_jumlah,
                penghasilan_setahun=penghasilan_setahun,
                sumber_penghasilan=sumber_penghasilan,
                penghasilan_comment=penghasilan_comment,
            )
        )

    @staticmethod
    def make(ws: Worksheet, rows: List[int]):
        results: List[Any] = list()
        for row in rows:
            data: Dict[str, Any] = dict()
            for name, col in MAPPING_COLS.items():
                data[name] = ws[f"{col}{row}"].value
            results.append(data)
        return results

    def save(self, ws: Worksheet, row: int):
        for name, col in MAPPING_COLS.items():
            value = getattr(self, name)
            if value is None:
                continue
            elif isinstance(value, Enum):
                value = str(value)
            ws[f"{col}{row}"] = value
