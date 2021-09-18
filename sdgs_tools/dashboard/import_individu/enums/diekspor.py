from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Semua": "1",
    "Sebagian Besar": "2",
    "Tidak": "3",
}


class Diekspor(Enum):
    SEMUA = "1"
    SEBAGIAN_BESAR = "2"
    TIDAK = "3"

    from_str = classmethod(make_str_to_enum(MAPPING, "3"))
    __str__ = make_dunder_str(MAPPING, "Tidak")
