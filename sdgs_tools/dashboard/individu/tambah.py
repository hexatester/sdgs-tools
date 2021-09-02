import cattr
from requests import Response, Session
from typing import Any, Dict

from . import DataIndividu
from . import DataKesehatan
from . import DataPekerjaan
from . import DataPenghasilan
from . import Penghasilan
from . import DataWilayah


cattr.register_unstructure_hook(DataIndividu, DataIndividu.todict)
cattr.register_unstructure_hook(DataKesehatan, DataKesehatan.todict)
cattr.register_unstructure_hook(DataPekerjaan, DataPekerjaan.todict)
cattr.register_unstructure_hook(DataPenghasilan, DataPenghasilan.todict)
cattr.register_unstructure_hook(Penghasilan, Penghasilan.todict)
cattr.register_unstructure_hook(DataWilayah, DataWilayah.todict)


def tambah_individu(
    session: Session,
    wilayah: DataWilayah,
    individu: DataIndividu,
    pekerjaan: DataPekerjaan,
    penghasilan: DataPenghasilan,
):
    data: Dict[str, Any] = dict()
    data.update(cattr.unstructure(wilayah))
    data.update(cattr.unstructure(individu))
    data.update(cattr.unstructure(pekerjaan))
    data.update(cattr.unstructure(penghasilan))
    # surveyIndividu/save
    return session.post(
        "https://sdgsdev.kemendesa.go.id/surveyIndividu/save",
        json=data,
    )
