from enum import Enum


class Agama(Enum):
    ISLAM = "1"
    KRISTEN = "2"
    KATOLIK = "3"
    HINDU = "4"
    BUDHA = "5"
    KHONGHUCU = "6"
    LAINNYA = "other"


class KondisiPekerjaan(Enum):
    BERSEKOLAH = 1
    IBU_RUMAH_TANGGA = 2
    TIDAK_BEKERJA = 3
    SEDANG_MENCARI_PEKERJAAN = 4
    BEKERJA = 5


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


class StatusPernikahan(Enum):
    BELUM_KAWIN = "1"
    KAWIN = "2"
    CERAI_HIDUP = "3"
    CERAI_MATI = "4"
