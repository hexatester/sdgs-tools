import attr
import cattr
from typing import Dict, Optional


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


cattr.register_unstructure_hook(Penghasilan, Penghasilan.todict)
