from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "Diekspor": "1",
    "Sebagian": "2",
    "Tidak": "3",
}


class Diekspor(Enum):
    DIEKSPOR = "1"
    SEBAGIAN = "2"
    TIDAK = "3"

    from_str = staticmethod(make_str_to_enum(MAPPING))
