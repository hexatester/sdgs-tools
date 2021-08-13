from requests import Response, Session
from typing import Type, TypeVar

from . import SdgsResponse

T = TypeVar("T")


class BaseSdgs(object):
    def __init__(self, api_server: str = "https://sdgsdev.kemendesa.go.id/"):
        self.api_server = api_server
        self.session = Session()

    def __url_api(self, filename: str) -> str:
        return self.api_server + filename.lstrip("/")

    def __api_get(self, filename: str, *args, **kwargs) -> Response:
        return self.session.get(self.__url_api(filename), *args, **kwargs)

    def __api_post(self, filename: str, *args, **kwargs) -> Response:
        return self.session.get(self.__url_api(filename), *args, **kwargs)

    def __api_get_to_res(self, filename: str, cl: Type[T], *args, **kwargs) -> T:
        res_raw = self.__api_get(filename, *args, **kwargs)
        res = SdgsResponse.from_str(res_raw.text, cl)
        return res.data
