from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Ada, berfungsi": "1",
    "Ada, tidak berfungsi": "2",
    "Tidak ada": "3",
}


class Jendela(Enum):
    ADA_BERFUNGSI = "1"
    ADA_TIDAK_BERFUNGSI = "2"
    TIDAK_ADA = "3"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
