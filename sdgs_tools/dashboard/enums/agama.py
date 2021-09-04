from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "ISLAM": "1",
    "KRISTEN": "2",
    "KATOLIK": "3",
    "HINDU": "4",
    "BUDHA": "5",
    "KHONGHUCU": "6",
    "LAINNYA": "other",
}


class Agama(Enum):
    ISLAM = "1"
    KRISTEN = "2"
    KATOLIK = "3"
    HINDU = "4"
    BUDHA = "5"
    KHONGHUCU = "6"
    LAINNYA = "other"

    from_str = staticmethod(make_str_to_enum(MAPPING))
