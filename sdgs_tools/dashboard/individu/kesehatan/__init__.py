from typing import Optional

from .fasilitas_kesehatan import FasilitasKesehatan
from .penyakit_diderita import PenyakitDiderita


__all__ = ["FasilitasKesehatan", "PenyakitDiderita"]


class DataKesehatan:
    penyakit_diderita: PenyakitDiderita
    fasilitas_kesehatan: FasilitasKesehatan
    jamsos_ketenagakerjaan: str
    setahun_melahirkan: Optional[bool]
    mendapat_asi: Optional[bool]

    def todict(self):
        # TODO UPDATE P401 & P404
        data = {
            "I.P401": self.penyakit_diderita.todict(),
            "I.P402": self.fasilitas_kesehatan.todict(),
            "I.P403": self.jamsos_ketenagakerjaan,
            "I.P404": "penyakit_diderita",
            # "I.P405": "setahun_melahirkan",
            # "I.P406": "mendapat_asi",
        }

        if self.setahun_melahirkan:
            data["I.P405"] = self.setahun_melahirkan
        if self.mendapat_asi:
            data["I.P406"] = self.mendapat_asi
        return data
