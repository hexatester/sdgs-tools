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

    def validateNik(
        self,
        nik: str,
    ):
        json_data = {"nik": nik}
        return self.api_post_to_res(
            "surveyIndividu/validateNik",
            str,
            json=json_data,
        )

    def save_individu(self, individu: DataIndividu, rt: str, rw: str):
        data_individu = individu.make_data(desa=self.token.wilayah, rt=rt, rw=rw)
        json_data = {"jsonResult": data_individu}
        res = self.api_post(
            filename="",
            json=json_data,
        )
