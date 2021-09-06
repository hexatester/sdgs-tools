from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Gas kota/LPG/biogas": "1",
    "Minyak tanah/batu bara": "2",
    "Kayu bakar": "3",
    "Lainnya": "other",
}


class EnergiMemasak(Enum):
    GAS = "1"
    MINYAK_TANAH_BATU_BARA = "2"
    KAYU_BAKAR = "3"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
