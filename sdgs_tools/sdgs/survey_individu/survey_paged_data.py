import attr
from datetime import datetime


@attr.dataclass
class SurveyPagedData:
    id: int
    createdBy: str
    createdOn: str
    statusId: str
    uid: str
    namaProvinsi: str
    namaKota: str
    namaKecamatan: str
    namaDesa: str
    namaPembuat: str
    rt: str
    rw: str
    nokk: str
    nik: str
    nama: str

    def __str__(self):
        return f"{self.nama} [{self.nik}]"
