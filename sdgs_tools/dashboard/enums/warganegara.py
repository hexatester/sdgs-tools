from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "WNI": "1",
    "WNA": "2",
}

class Warganegara(Enum):
    WNI = "1"
    WNA = "2"

    from_str = staticmethod(make_str_to_enum(MAPPING))
