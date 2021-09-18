from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Bersekolah": 1,
    "Ibu Rumah Tangga": 2,
    "Tidak Bekerja": 3,
    "Sedang Mencari Pekerjaan": 4,
    "Bekerja": 5,
}


class KondisiPekerjaan(Enum):
    BERSEKOLAH = 1
    IBU_RUMAH_TANGGA = 2
    TIDAK_BEKERJA = 3
    SEDANG_MENCARI_PEKERJAAN = 4
    BEKERJA = 5

    from_str = classmethod(make_str_to_enum(MAPPING, 3))
    __str__ = make_dunder_str(MAPPING)
