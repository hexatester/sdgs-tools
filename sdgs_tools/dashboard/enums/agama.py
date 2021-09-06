from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "Islam": "1",
    "Kristen": "2",
    "Katolik": "3",
    "Hindu": "4",
    "Budha": "5",
    "Khonghucu": "6",
    "Lainnya": "other",
}


class Agama(Enum):
    ISLAM = "1"
    KRISTEN = "2"
    KATOLIK = "3"
    HINDU = "4"
    BUDHA = "5"
    KHONGHUCU = "6"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING))

