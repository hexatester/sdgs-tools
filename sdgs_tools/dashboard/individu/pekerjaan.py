import attr
from typing import Optional

from .enums import KondisiPekerjaan, PekerjaanUtama


@attr.dataclass
class DataPekerjaan:
    kondisi_pekerjaan: KondisiPekerjaan
    pekerjaan_utama: Optional[PekerjaanUtama] = None
    pekerjaan_utama_comment: Optional[str] = None
    jaminan_sosial_ketenagakerjaan: Optional[str] = None

    def todict(self):
        data = {"I.P201": self.kondisi_pekerjaan.value}
        if self.kondisi_pekerjaan != KondisiPekerjaan.BEKERJA:
            return data
        assert self.pekerjaan_utama
        data["I.P202"] = self.pekerjaan_utama.value
        if self.pekerjaan_utama == PekerjaanUtama.LAINNYA:
            assert self.pekerjaan_utama_comment
            data["I.P202"] = self.pekerjaan_utama_comment
        if self.jaminan_sosial_ketenagakerjaan:
            data["I.P203"] = self.jaminan_sosial_ketenagakerjaan
        else:
            data["I.P203"] = "2"
        return data
