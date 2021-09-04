from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "Semua": "1",
    "Sebagian Besar": "2",
    "Tidak": "3",
}


class Diekspor(Enum):
    SEMUA = "1"
    SEBAGIAN_BESAR = "2"
    TIDAK = "3"

    from_str = staticmethod(make_str_to_enum(MAPPING))
