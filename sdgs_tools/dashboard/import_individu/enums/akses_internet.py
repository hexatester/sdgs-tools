from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Wifi": "1",
    "Handphone": "2",
    "Wifi Dan Handphone": "3",
}


class AksesInternet(Enum):
    WIFI = "1"
    HANDPHONE = "2"
    WIFI_HANDPHONE = "3"

    from_str = classmethod(make_str_to_enum(MAPPING))
    __str__ = make_dunder_str(MAPPING)
