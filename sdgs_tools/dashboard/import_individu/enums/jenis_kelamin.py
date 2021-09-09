from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Laki-laki": "1",
    "Perempuan": "2",
}


class JenisKelamin(Enum):
    LAKI_LAKI = "1"
    PEREMPUAN = "2"

    from_str = classmethod(make_str_to_enum(MAPPING))
