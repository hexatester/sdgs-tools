from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Jamban sendiri": "1",
    "Jamban bersama/tetangga": "2",
    "Jamban umum": "3",
    "Lainnya": "other",
}


class FasilitasMck(Enum):
    SENDIRI = "1"
    BERSAMA = "2"
    UMUM = "3"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
