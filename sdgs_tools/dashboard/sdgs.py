from typing import List

from .auth import BaseAuth
from .import_individu import DataIndividu


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
        return bool(res)

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
