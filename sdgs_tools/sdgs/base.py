from requests import Session


class BaseSdgs(object):
    def __init__(self, server: str = "https://sdgsdev.kemendesa.go.id/"):
        self.server = server
        self.session = Session()
