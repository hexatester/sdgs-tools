import attr
from datetime import datetime
from time import time
from typing import Dict, Optional


@attr.dataclass
class UserType:
    id: int
    nama: str


@attr.dataclass
class User:
    id: int
    createdBy: str
    createdOn: datetime
    email: Optional[str]
    username: str
    noHp: str
    ktp: str
    nama: str
    alamat: str
    userType: UserType
    userTypeId: int
    wilayah: str
    namaDesa: Optional[str]
    namaKecamatan: Optional[str]
    namaKota: Optional[str]
    namaProvinsi: Optional[str]


@attr.dataclass
class Token:
    access_token: str
    expires_in: int
    refresh_expires_in: int
    refresh_token: str
    token_type: str
    id_token: Optional[str]
    # not-before-policy: 0
    session_state: str
    scope: str
    error: Optional[str]
    error_description: Optional[str]
    error_uri: Optional[str]
    _expires_time: int = 0

    def __attrs_post_init__(self) -> None:
        now = int(time())
        self._expires_time = now + self.expires_in

    def is_valid(self, delta: int = -60) -> bool:
        now = int(time())
        return now >= (self._expires_time + delta)

    @property
    def token_header(self) -> Dict[str, str]:
        return {"Authorization": f"{self.token_type} {self.access_token}"}


@attr.dataclass
class AuthToken:
    token: Token
    user: User
    wilayah: str
