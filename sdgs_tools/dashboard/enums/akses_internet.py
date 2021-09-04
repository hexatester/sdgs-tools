from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "WIFI": "1",
    "HANDPHONE": "2",
    "WIFI DAN HANDPHONE": "3",
}


class AksesInternet(Enum):
    WIFI = "1"
    HANDPHONE = "2"
    WIFI_HANDPHONE = "3"

    from_str = staticmethod(make_str_to_enum(MAPPING))
