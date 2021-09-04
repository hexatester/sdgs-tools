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
