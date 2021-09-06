from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "Cepat": "1",
    "Sedang": "2",
    "Lambat": "3",
}


class KecepatanInternet(Enum):
    CEPAT = "1"
    SEDANG = "2"
    LAMBAT = "3"

    from_str = classmethod(make_str_to_enum(MAPPING))
