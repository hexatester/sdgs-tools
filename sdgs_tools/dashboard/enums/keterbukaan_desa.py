from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "BAIK": "1",
    "CUKUP": "2",
    "BURUK": "3",
}


class KeterbukaanDesa(Enum):
    BAIK = "1"
    CUKUP = "2"
    BURUK = "3"

    from_str = staticmethod(make_str_to_enum(MAPPING))
