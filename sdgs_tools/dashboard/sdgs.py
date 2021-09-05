from typing import List

from .auth import BaseAuth


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
