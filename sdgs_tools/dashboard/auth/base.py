import click
from ..response import SdgsResponse
from ..base import BaseSdgs

from . import AuthToken


class BaseAuth(BaseSdgs):
    def login(self, username: str, password: str, userType: str = "enumerator") -> AuthToken:
        res = self.session.get("https://dashboard-sdgs.kemendesa.go.id/")
        # AuthToken
        if not res.ok:
            raise Exception("Server tidak merespon, mohon coba beberapa saat lagi")
        url = self.url_api("auth/token")
        data = {"username": username, "password": password}
        res = self.session.post(url, data)
        if not res.ok:
            raise Exception("Server tidak merespon, mohon coba beberapa saat lagi")
        res_data = SdgsResponse.from_str(res.text, AuthToken)
        if res_data.status == 500:
            raise Exception(res_data.message)
        self.session.headers.update(res_data.data.token.token_header)
        if res_data.data.user.userType.nama != userType:
            raise ValueError(f"Mohon login menggunakan user bertipe {userType}")
        return res_data.data

    def token_refresh(self, token: AuthToken) -> AuthToken:
        click.echo("Mencoba refresh token")
        url = self.url_api("auth/token/refresh")
        data = {
            "refreshToken": token.token.refresh_token,
            "username": token.user.username,
        }
        res = self.session.post(url, data)
        if not res.ok:
            raise Exception("Server tidak merespon")
        res_data = SdgsResponse.from_str(res.text, AuthToken)
        self.session.headers.update(res_data.data.token.token_header)
        return res_data.data
