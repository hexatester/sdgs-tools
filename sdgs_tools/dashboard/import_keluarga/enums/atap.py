from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Genteng": "1",
    "Kayu/Jerami": "2",
    "Lainnya": "other",
}


class Atap(Enum):
    GENTENG = "1"
    KAYU_JERAMI = "2"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "other"))
