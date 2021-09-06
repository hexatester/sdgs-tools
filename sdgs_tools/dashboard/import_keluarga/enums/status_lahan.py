from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Milik Sendiri": "1",
    "Milik Orang Lain": "2",
    "Tanah Negara": "3",
    "Lainnya": "other",
}


class StatusLahan(Enum):
    MILIK_SENDIRI = "1"
    MILIK_ORANG_LAIN = "2"
    TANAH_NEGARA = "3"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
