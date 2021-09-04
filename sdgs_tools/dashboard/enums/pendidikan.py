from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "TIDAK_SEKOLAH": "1",
    "SD": "2",
    "SMP": "3",
    "SMA": "4",
    "DIPLOMA": "5",
    "S1": "6",
    "S2": "7",
    "S3": "8",
    "PESANTREN_SEMINARI": "9",
    "LAINNYA": "10",
}


class Pendidikan(Enum):
    TIDAK_SEKOLAH = "1"
    SD = "2"
    SMP = "3"
    SMA = "4"
    DIPLOMA = "5"
    S1 = "6"
    S2 = "7"
    S3 = "8"
    PESANTREN_SEMINARI = "9"
    LAINNYA = "10"

    from_str = staticmethod(make_str_to_enum(MAPPING))
