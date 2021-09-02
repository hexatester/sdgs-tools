import cattr
from typing import Optional

from .disabilitas import Disabilitas
from .fasilitas_kesehatan import FasilitasKesehatan
from .penyakit_diderita import PenyakitDiderita


__all__ = ["Disabilitas", "FasilitasKesehatan", "PenyakitDiderita"]

cattr.unstructure(Disabilitas, Disabilitas.todict)
cattr.unstructure(FasilitasKesehatan, FasilitasKesehatan.todict)
cattr.unstructure(PenyakitDiderita, PenyakitDiderita.todict)


class DataKesehatan:
    penyakit_diderita: PenyakitDiderita
    fasilitas_kesehatan: FasilitasKesehatan
    jamsos_kesehatan: str
    disabilitas: Disabilitas
    setahun_melahirkan: Optional[bool]
    mendapat_asi: Optional[bool]

    def todict(self):
        data = {
            "I.P401": cattr.unstructure(self.penyakit_diderita),
            "I.P402": cattr.unstructure(self.fasilitas_kesehatan),
            "I.P403": self.jamsos_kesehatan,
            "I.P404": cattr.unstructure(self.disabilitas),
            # "I.P405": "setahun_melahirkan",
            # "I.P406": "mendapat_asi",
        }

        if self.setahun_melahirkan is not None:
            data["I.P405"] = "1" if self.setahun_melahirkan else "2"
        if self.mendapat_asi is not None:
            data["I.P406"] = "1" if self.mendapat_asi else "2"
        return data
