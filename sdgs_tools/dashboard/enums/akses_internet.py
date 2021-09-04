from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "Wifi": "1",
    "Handphone": "2",
    "Wifi Dan Handphone": "3",
}


class AksesInternet(Enum):
    WIFI = "1"
    HANDPHONE = "2"
    WIFI_HANDPHONE = "3"

    from_str = staticmethod(make_str_to_enum(MAPPING))
