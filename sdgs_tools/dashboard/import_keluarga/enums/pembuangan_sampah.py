from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum

MAPPING = {
    "Tidak ada": 1,
    "Di kebun/sungai/drainase": 2,
    "Dibakar": 3,
    "Tempat sampah": 4,
    "Tempat sampah diangkut reguler": 5,
}


class PembuanganSampah(Enum):
    TIDAK_ADA = 1
    KEBUN_SUNGAI_DRAINASE = 2
    DIBAKAR = 3
    TEMPAT_SAMPAH = 4
    TEMPAT_SAMPAH_DIANGKUT = 5

    from_str = classmethod(make_str_to_enum(MAPPING, 1))
