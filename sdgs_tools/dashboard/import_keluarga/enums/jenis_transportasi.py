from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Darat": "1",
    "Air": "2",
    "Udara": "3",
}


class JenisTransportasi(Enum):
    DARAT = "1"
    AIR = "2"
    UDARA = "3"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
    __str__ = make_dunder_str(MAPPING)
