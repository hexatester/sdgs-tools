from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "Belum Kawin": "1",
    "Kawin": "2",
    "Cerai Hidup": "3",
    "Cerai Mati": "4",
}


class StatusPernikahan(Enum):
    BELUM_KAWIN = "1"
    KAWIN = "2"
    CERAI_HIDUP = "3"
    CERAI_MATI = "4"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
