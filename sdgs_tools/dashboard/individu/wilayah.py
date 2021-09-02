import attr
from typing import Dict, Union


@attr.dataclass
class DataWilayah:
    rt_rw: str
    desa: str

    def todict(self) -> Dict[str, str]:
        if "/" not in self.rt_rw:
            raise ValueError(f"isi rt rw dengan format rt/rw")
        elif len(self.rt_rw) != "7":
            raise ValueError(f"rt dan rw masing2 harus 3 digit")
        rt, rw = self.rt_rw.split("/")
        return {
            "desa": self.desa,
            "kecamatan": self.desa[0:7],
            "kota": self.desa[0:4],
            "provinsi": self.desa[0:2],
            "rt": rt,
            "rw": rw,
        }
