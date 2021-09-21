from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Marmer/granit": "1",
    "Keramik": "2",
    "Parket/vinil/permadani": "3",
    "Ubin/tegel/teraso": "4",
    "Kayu/papan kualitas tinggi": "5",
    "Semen/bata merah": "6",
    "Bambu": "7",
    "Kayu/papan kualitas rendah": "8",
    "Lainnya": "other",
}


class Lantai(Enum):
    MARMER_GRANIT = "1"
    KERAMIK = "2"
    PARKET_VINIL_PERMADANI = "3"
    UBIN_TEGEL_TERASO = "4"
    KAYU_PAPAN_KUALITAS_TINGGI = "5"
    SEMEN_BATA_MERAH = "6"
    BAMBU = "7"
    KAYU_PAPAN_KUALITAS_RENDAH = "8"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "other"))
    __str__ = make_dunder_str(MAPPING)
