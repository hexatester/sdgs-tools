import attr
import cattr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, List, Optional

from sdgs_tools.dashboard.enums import Diekspor
from sdgs_tools.dashboard.enums import SumberPenghasilan


@attr.dataclass
class Penghasilan:
    penghasilan_diekspor: Diekspor
    penghasilan_jumlah: str
    penghasilan_setahun: str
    sumber_penghasilan: SumberPenghasilan
    penghasilan_comment: Optional[str] = None

    def todict(self) -> Dict[str, str]:
        data: Dict[str, str] = {
            "diekspor": str(self.penghasilan_diekspor.value),
            "jumlah": str(self.penghasilan_jumlah),
            "penghasilan": str(self.penghasilan_setahun),
            "sumber_penghasilan": str(SumberPenghasilan.value),
        }
        if self.sumber_penghasilan == "other":
            if not self.penghasilan_comment:
                raise ValueError("comment harus diisi jika sumber_penghasilan = other")
            data["sumber_penghasilan-Comment"] = self.penghasilan_comment
        return data

    @classmethod
    def from_range(cls, ws: Worksheet, rows: List[int], cols: Dict[str, str]):
        results: List[Any] = list()
        for row in rows:
            results.append(
                cls.from_row(
                    ws=ws,
                    row=row,
                    cols=cols,
                )
            )
        return results

    @classmethod
    def from_row(cls, ws: Worksheet, row: int, cols: Dict[str, str]) -> "Penghasilan":
        data: Dict[str, Any] = dict()
        for name, col in cols.items():
            data[name] = ws[f"{col}{row}"].value
        return cattr.structure(data, cls)


cattr.register_unstructure_hook(Penghasilan, Penghasilan.todict)
