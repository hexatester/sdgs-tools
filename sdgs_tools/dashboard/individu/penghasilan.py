import attr
from typing import Dict, List, Optional


@attr.dataclass
class Penghasilan:
    diekspor: str
    jumlah: str
    penghasilan: str
    sumber_penghasilan: str
    comment: Optional[str] = None

    def todict(self) -> Dict[str, str]:
        data: Dict[str, str] = {
            "diekspor": "diekspor",
            "jumlah": "jumlah",
            "penghasilan": "penghasilan",
            "sumber_penghasilan": "sumber_penghasilan",
        }
        if self.sumber_penghasilan == "other":
            if not self.comment:
                raise ValueError("comment harus diisi jika sumber_penghasilan = other")
            data["sumber_penghasilan-Comment"] = self.comment
        return data


@attr.dataclass
class DataPenghasilan:
    penghasilan: List[Penghasilan]
    pekerjaan_penghasilan: str

    def todict(self):
        return {
            "I.P204": [p.todict() for p in self.penghasilan],
            "I.P204_penghasilan": self.pekerjaan_penghasilan,
        }
