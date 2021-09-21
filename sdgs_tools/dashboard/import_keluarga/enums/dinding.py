from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Semen/beton/kayu berkualitas tinggi": "1",
    "Kayu berkualitas rendah/bamboo": "2",
    "Lainnya": "other",
}


class Dinding(Enum):
    SEMEN_BETON_KAYU_KT = "1"
    KAYU_BAMBU_KR = "2"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "other"))
    __str__ = make_dunder_str(MAPPING)
