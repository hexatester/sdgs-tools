import attr
import cattr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, List, Optional

from sdgs_tools.dashboard.import_individu.enums import Diekspor
from sdgs_tools.dashboard.import_individu.enums import SumberPenghasilan


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
            "sumber_penghasilan": str(self.sumber_penghasilan.value),
        }
        if self.sumber_penghasilan == "other":
            if not self.penghasilan_comment:
                raise ValueError("comment harus diisi jika sumber_penghasilan = other")
            data["sumber_penghasilan-Comment"] = self.penghasilan_comment
        return data

    @classmethod
    def default(
        cls,
        penghasilan_diekspor: Diekspor = Diekspor.TIDAK,
        penghasilan_jumlah: str = "0",
        penghasilan_setahun: str = "0",
        sumber_penghasilan: SumberPenghasilan = SumberPenghasilan.LAINNYA,
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

    @staticmethod
    def make_range(ws: Worksheet, rows: List[int], cols: Dict[str, str]):
        results: List[Any] = list()
        for row in rows:
            data: Dict[str, Any] = dict()
            for name, col in cols.items():
                data[name] = ws[f"{col}{row}"].value
            results.append(data)
        return results


cattr.register_unstructure_hook(Penghasilan, Penghasilan.todict)
