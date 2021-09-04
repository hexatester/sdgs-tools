from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "BELUM KAWIN": "1",
    "KAWIN": "2",
    "CERAI HIDUP": "3",
    "CERAI MATI": "4",
}


class StatusPernikahan(Enum):
    BELUM_KAWIN = "1"
    KAWIN = "2"
    CERAI_HIDUP = "3"
    CERAI_MATI = "4"

    from_str = staticmethod(make_str_to_enum(MAPPING))
