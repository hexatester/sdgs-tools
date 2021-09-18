from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Petani Pemilik Lahan": "1",
    "Petani Penyewa": "2",
    "Buruh Tani": "3",
    "Nelayan Pemilik Kapal": "4",
    "Nelayan Penyewa Kapal": "5",
    "Buruh Nelayan": "6",
    "Guru": "7",
    "Guru Agama": "8",
    "Pedagang": "9",
    "Pengolahan Industri": "10",
    "Pns": "11",
    "Tni": "12",
    "Perangkat Desa": "13",
    "Pegawai Kantor Desa": "14",
    "Tki": "15",
    "Lainnya": "other",
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

    from_str = classmethod(make_str_to_enum(MAPPING))
    __str__ = make_dunder_str(MAPPING)
