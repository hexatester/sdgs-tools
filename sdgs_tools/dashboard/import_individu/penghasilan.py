import attr
import cattr
from typing import Dict, Optional

from sdgs_tools.dashboard.enums import Diekspor
from sdgs_tools.dashboard.enums import SumberPenghasilan


@attr.dataclass
class Penghasilan:
    diekspor: Diekspor
    jumlah: str
    penghasilan: str
    sumber_penghasilan: SumberPenghasilan
    comment: Optional[str] = None

    def todict(self) -> Dict[str, str]:
        data: Dict[str, str] = {
            "diekspor": str(self.diekspor.value),
            "jumlah": str(self.jumlah),
            "penghasilan": str(self.penghasilan),
            "sumber_penghasilan": str(SumberPenghasilan.value),
        }
        if self.sumber_penghasilan == "other":
            if not self.comment:
                raise ValueError("comment harus diisi jika sumber_penghasilan = other")
            data["sumber_penghasilan-Comment"] = self.comment
        return data


cattr.register_unstructure_hook(Penghasilan, Penghasilan.todict)
