from . import BaseAuth
from .model import CapaianNasional


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
