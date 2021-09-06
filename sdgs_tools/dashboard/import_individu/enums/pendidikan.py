from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "Tidak Sekolah": "1",
    "SD": "2",
    "SMP": "3",
    "SMA": "4",
    "Diploma": "5",
    "S1": "6",
    "S2": "7",
    "S3": "8",
    "Pesantren / Seminari": "9",
    "Lainnya": "10",
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

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
