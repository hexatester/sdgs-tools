from requests import Response, Session
from typing import Type, TypeVar

from .response import SdgsResponse
from .utils import register_cattr_hooks

T = TypeVar("T")


class BaseSdgs:
    def __init__(self, api_server: str = "https://sdgsdev.kemendesa.go.id/"):
        self.api_server = api_server
        self.session = Session()
        register_cattr_hooks()

    def url_api(self, filename: str) -> str:
        return self.api_server + filename.lstrip("/")

    def api_get(self, filename: str, *args, **kwargs) -> Response:
        return self.session.get(self.url_api(filename), *args, **kwargs)

    def api_post(self, filename: str, *args, **kwargs) -> Response:
        headers = {
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
        }
        if "headers" in kwargs:
            headers.update(kwargs["headers"])
        kwargs["headers"] = headers
        return self.session.post(
            self.url_api(filename),
            *args,
            **kwargs,
        )

    def api_get_to_res(self, filename: str, cl: Type[T], *args, **kwargs) -> T:
        res_raw = self.api_get(filename, *args, **kwargs)
        res = SdgsResponse.from_str(res_raw.text, cl)
        return res.data

    def api_post_to_res(self, filename: str, cl: Type[T], *args, **kwargs) -> T:
        res_raw = self.api_post(filename, *args, **kwargs)
        res = SdgsResponse.from_str(res_raw.text, cl)
        return res.data

    def api_post_raw(
        self,
        filename: str,
        cl: Type[T],
        *args,
        **kwargs,
    ) -> SdgsResponse[T]:
        res_raw = self.api_post(filename, *args, **kwargs)
        return SdgsResponse.from_str(res_raw.text, cl)
