from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Pembelian": "1",
    "Diambil dari hutan": "2",
    "Diambil di luar/bukan hutan": "3",
    "Lainnya": "other",
}


class SumberKayuBakar(Enum):
    BELI = "1"
    HUTAN = "2"
    BUKAN_HUTAN = "3"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
    __str__ = make_dunder_str(MAPPING)
