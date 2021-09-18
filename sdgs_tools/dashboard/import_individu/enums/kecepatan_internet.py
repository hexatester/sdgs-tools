from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

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
    __str__ = make_dunder_str(MAPPING)
