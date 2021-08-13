from requests import Session


class BaseSdgs(object):
    def __init__(self, api_server: str = "https://sdgsdev.kemendesa.go.id/"):
        self.api_server = api_server
        self.session = Session()

    def __url_api(self, filename: str) -> str:
        return self.api_server + filename.lstrip("/")
