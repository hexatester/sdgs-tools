from typing import List

from .auth import BaseAuth
from .import_individu import DataIndividu
from .import_keluarga import DataKeluarga


class Sdgs(BaseAuth):
    def __init__(
        self,
        username: str,
        password: str,
        api_server="https://sdgsdev.kemendesa.go.id/",
    ):
        super().__init__(api_server=api_server)
        self.token = self.login(username, password)

    def validateNikKepalaKeluarga(self, nik: str, nokk: str) -> bool:
        json_data = {"nik": nik, "nokk": nokk}
        res = self.api_post_raw(
            "surveyIndividu/validateNik",
            str,
            json=json_data,
            ignore=True,
        )
        return bool(res) or res.message == "NIK Kepala Keluarga Sudah Ada"

    def validateNik(
        self,
        nik: str,
    ) -> bool:
        json_data = {"nik": nik}
        res = self.api_post_raw(
            "surveyIndividu/validateNik",
            str,
            json=json_data,
            ignore=True,
        )
        return bool(res) or res.message == "NIK Sudah Ada"

    def save_individu(self, individu: DataIndividu, rt: str, rw: str):
        data_individu = individu.make_data(desa=self.token.wilayah, rt=rt, rw=rw)
        json_data = {"jsonResult": data_individu}
        res = self.api_post_raw(
            filename="surveyIndividu/save",
            cl=str,
            json=json_data,
        )
        return res

    def save_keluarga(self, keluarga: DataKeluarga, rt: str, rw: str):
        data_keluarga = keluarga.make_json(desa=self.token.wilayah, rt=rt, rw=rw)
        json_data = {"jsonResult": data_keluarga}
        res = self.api_post_raw(
            filename="surveyKeluarga/save",
            cl=str,
            json=json_data,
        )
        return res
