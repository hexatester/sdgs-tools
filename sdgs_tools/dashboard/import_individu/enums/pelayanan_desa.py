from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Baik": "1",
    "Cukup": "2",
    "Buruk": "3",
}


class PelayananDesa(Enum):
    BAIK = "1"
    CUKUP = "2"
    BURUK = "3"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
    __str__ = make_dunder_str(MAPPING)
