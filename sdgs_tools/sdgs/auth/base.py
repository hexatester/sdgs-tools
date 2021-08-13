from sdgs_tools.sdgs import BaseSdgs, SdgsResponse

from . import AuthToken


class BaseAuth(BaseSdgs):
    def login(self, username: str, password: str) -> AuthToken:
        res = self.session.get("https://dashboard-sdgs.kemendesa.go.id/")
        # AuthToken
        assert res.ok
        url = self.__url_api("auth/token")
        data = {"username": username, "password": password}
        res = self.session.post(url, data)
        assert res.ok
        res_data = SdgsResponse.from_str(res.text, AuthToken)
        self.session.headers.update(res_data.data.token.token_header)
        return res_data.data
