import attr
from typing import Dict, Optional

MAPPING = {
    "diekspor": "diekspor",
    "jumlah": "jumlah",
    "penghasilan": "penghasilan",
    "sumber_penghasilan": "sumber_penghasilan",
    # "comment": "comment",
}


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
