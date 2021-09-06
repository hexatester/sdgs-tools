from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Tangki/instalasi pengelolaan limbah": "1",
    "Sawah/kolam/sungai/drainase/laut": "2",
    "Lubang di tanah": "3",
    "Lainnya": "other",
}


class PembuanganLimbahCair(Enum):
    PENGOLAHAN_LIMBAH = "1"
    SALURAN_AIR_TERBUKA = "2"
    LUBANG_TANAH = "3"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "other"))
