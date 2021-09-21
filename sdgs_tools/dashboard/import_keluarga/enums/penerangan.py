from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Listrik PLN": 1,
    "Listrik non PLN": 2,
    "Lampu minyak/lilin": 3,
    "Lainnya": 4,
    "Tidak ada": 5,
}


class Penerangan(Enum):
    LISTRIK_PLN = 1
    LISTRIK_NON_PLN = 2
    LAMPU_MINYAK_LILIN = 3
    LAINNYA = 4
    TIDAK_ADA = 5

    from_str = classmethod(make_str_to_enum(MAPPING, 1))
    __str__ = make_dunder_str(MAPPING)
