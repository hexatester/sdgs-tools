from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "PETANI_PEMILIK_LAHAN": "1",
    "PETANI_PENYEWA": "2",
    "BURUH_TANI": "3",
    "NELAYAN_PEMILIK_KAPAL": "4",
    "NELAYAN_PENYEWA_KAPAL": "5",
    "BURUH_NELAYAN": "6",
    "GURU": "7",
    "GURU_AGAMA": "8",
    "PEDAGANG": "9",
    "PENGOLAHAN_INDUSTRI": "10",
    "PNS": "11",
    "TNI": "12",
    "PERANGKAT_DESA": "13",
    "PEGAWAI_KANTOR_DESA": "14",
    "TKI": "15",
    "LAINNYA": "other",
}


class PekerjaanUtama(Enum):
    PETANI_PEMILIK_LAHAN = "1"
    PETANI_PENYEWA = "2"
    BURUH_TANI = "3"
    NELAYAN_PEMILIK_KAPAL = "4"
    NELAYAN_PENYEWA_KAPAL = "5"
    BURUH_NELAYAN = "6"
    GURU = "7"
    GURU_AGAMA = "8"
    PEDAGANG = "9"
    PENGOLAHAN_INDUSTRI = "10"
    PNS = "11"
    TNI = "12"
    PERANGKAT_DESA = "13"
    PEGAWAI_KANTOR_DESA = "14"
    TKI = "15"
    LAINNYA = "other"

    from_str = staticmethod(make_str_to_enum(MAPPING))
