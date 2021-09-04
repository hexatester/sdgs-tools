from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "BERSEKOLAH": 1,
    "IBU RUMAH TANGGA": 2,
    "TIDAK BEKERJA": 3,
    "SEDANG MENCARI PEKERJAAN": 4,
    "BEKERJA": 5,
}


class KondisiPekerjaan(Enum):
    BERSEKOLAH = 1
    IBU_RUMAH_TANGGA = 2
    TIDAK_BEKERJA = 3
    SEDANG_MENCARI_PEKERJAAN = 4
    BEKERJA = 5

    from_str = staticmethod(make_str_to_enum(MAPPING))
