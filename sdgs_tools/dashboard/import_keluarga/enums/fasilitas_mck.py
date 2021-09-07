from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Sendiri": "1",
    "Berkelompok/tetangga": "2",
    "MCK umum": "3",
    "Tidak ada": "4",
}


class FasilitasMck(Enum):
    SENDIRI = "1"
    BERKELOMPOK = "2"
    UMUM = "3"
    TIDAK_ADA = "4"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
