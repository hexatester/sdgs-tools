from typing import List

from . import BaseAuth
from .model import CapaianNasional
from .model import Wilayah


class Sdgs(BaseAuth):
    def __init__(
        self,
        username: str,
        password: str,
        api_server="https://sdgsdev.kemendesa.go.id/",
    ):
        super().__init__(api_server=api_server)
        self.token = self.login(username, password)

    def getCapaianNasional(self) -> CapaianNasional:
        return self.api_get_to_res("/dashboard/getCapaianNasional", CapaianNasional)

    def wilayah(self, jenis: str = None, wilayah_id: str = None) -> List[Wilayah]:
        if jenis is None or wilayah_id is None:
            return self.api_get_to_res("/wilayah/prov", List[Wilayah])
        if jenis not in ("desa", "kecamatan", "kota"):
            raise ValueError("jenis harus berupa desa kecamatan atau kota")
        if jenis == "desa" and len(wilayah_id) == 7:
            return self.api_get_to_res(f"/wilayah/desa/{wilayah_id}", List[Wilayah])
        if jenis == "kecamatan" and len(wilayah_id) >= 4:
            return self.api_get_to_res(
                f"/wilayah/kecamatan/{wilayah_id[0:4]}", List[Wilayah]
            )
        if jenis == "kota" and len(wilayah_id) >= 2:
            return self.api_get_to_res(
                f"/wilayah/kota/{wilayah_id[0:2]}", List[Wilayah]
            )
        raise ValueError("Wilayah tidak ditemukan")
