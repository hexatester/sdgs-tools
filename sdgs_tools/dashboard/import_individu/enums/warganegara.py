from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "WNI": "1",
    "WNA": "2",
}


class Warganegara(Enum):
    WNI = "1"
    WNA = "2"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
