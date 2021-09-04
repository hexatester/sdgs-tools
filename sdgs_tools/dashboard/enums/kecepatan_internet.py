from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "CEPAT": "1",
    "SEDANG": "2",
    "LAMBAT": "3",
}


class KecepatanInternet(Enum):
    CEPAT = "1"
    SEDANG = "2"
    LAMBAT = "3"

    from_str = staticmethod(make_str_to_enum(MAPPING))
