from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Jamban sendiri": "1",
    "Jamban bersama/tetangga": "2",
    "Jamban umum": "3",
    "Lainnya": "other",
}


class FasilitasBab(Enum):
    SENDIRI = "1"
    BERSAMA = "2"
    UMUM = "3"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
    __str__ = make_dunder_str(MAPPING)
