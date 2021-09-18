from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum, make_dunder_str

MAPPING = {
    "Padi": "1",
    "Palawija": "2",
    "Hortikultura": "3",
    "Karet": "4",
    "Kelapa sawit": "5",
    "Kopi": "6",
    "Kakao": "7",
    "Kelapa": "8",
    "Lada": "9",
    "Cengkeh": "10",
    "Tembakau": "11",
    "Tebu": "12",
    "Sapi potong": "13",
    "Susu sapi": "14",
    "Domba": "15",
    "Ternak besar lainnya": "16",
    "Ayam pedaging": "17",
    "Telur ayam": "18",
    "Ternak kecil lainnya": "19",
    "Perikanan tangkap": "20",
    "Perikanan budidaya": "21",
    "Bambu": "22",
    "Budidaya tanaman kehutanan": "23",
    "Pemungutan hasil hutan": "24",
    "Penangkapan satwa liar": "25",
    "Penangkaran satwa liar": "26",
    "Jasa pertanian": "27",
    "Pertambangan dan penggalian": "28",
    "Industri kerajinan": "29",
    "Industri pengolahan": "30",
    "Perdagangan": "31",
    "Warung dan rumah makan": "32",
    "Angkutan": "33",
    "Pergudangan": "34",
    "Komunikasi": "35",
    "Jasa di luar pertanian": "36",
    "Uang Pensiunan": "37",
    "Karyawan tetap": "38",
    "Karyawan tidak tetap": "39",
    "TNI": "40",
    "PNS": "41",
    "TKI di luar negeri": "42",
    "Sumbangan": "43",
    "Lainnya": "other",
}


class SumberPenghasilan(Enum):
    PADI = "1"
    PALAWIJA = "2"
    HORTIKULTURA = "3"
    KARET = "4"
    KELAPA_SAWIT = "5"
    KOPI = "6"
    KAKAO = "7"
    KELAPA = "8"
    LADA = "9"
    CENGKEH = "10"
    TEMBAKAU = "11"
    TEBU = "12"
    SAPI_POTONG = "13"
    SUSU_SAPI = "14"
    DOMBA = "15"
    TERNAK_BESAR_LAINNYA = "16"
    AYAM_PEDAGING = "17"
    TELUR_AYAM = "18"
    TERNAK_KECIL_LAINNYA = "19"
    PERIKANAN_TANGKAP = "20"
    PERIKANAN_BUDIDAYA = "21"
    BAMBU = "22"
    BUDIDAYA_TANAMAN_KEHUTANAN = "23"
    PEMUNGUTAN_HASIL_HUTAN = "24"
    PENANGKAPAN_SATWA_LIAR = "25"
    PENANGKARAN_SATWA_LIAR = "26"
    JASA_PERTANIAN = "27"
    PERTAMBANGAN_DAN_PENGGALIAN = "28"
    INDUSTRI_KERAJINAN = "29"
    INDUSTRI_PENGOLAHAN = "30"
    PERDAGANGAN = "31"
    WARUNG_DAN_RUMAH_MAKAN = "32"
    ANGKUTAN = "33"
    PERGUDANGAN = "34"
    KOMUNIKASI = "35"
    JASA_DI_LUAR_PERTANIAN = "36"
    UANG_PENSIUNAN = "37"
    KARYAWAN_TETAP = "38"
    KARYAWAN_TIDAK_TETAP = "39"
    TNI = "40"
    PNS = "41"
    TKI_DI_LUAR_NEGERI = "42"
    SUMBANGAN = "43"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "43"))
    __str__ = make_dunder_str(MAPPING)
