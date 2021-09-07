import attr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, Optional, Tuple

from . import (
    Luas,
    AksesFasilitasKesehatan,
    AksesPendidikan,
    AksesSarprasTransport,
    AksesTenagaKesehatan,
)
from .enums import (
    Atap,
    Dinding,
    EnergiMemasak,
    FasilitasBab,
    FasilitasMck,
    Jendela,
    Lantai,
    PembuanganLimbahCair,
    PembuanganSampah,
    Penerangan,
    StatusLahan,
    SumberAirMandi,
    SumberKayuBakar,
    TempatTinggal,
    YaTidak,
)

MAPPING = {
    "no_kk": "A",
    "nik": "B",
    "nama": "C",
    "alamat": "D",
    "nomor_hp": "E",
    "telepon_rumah": "F",
    "anggota_keluarga": "G",
    "tempat_tinggal": "H",
    "tempat_tinggal_comment": "I",
    "status_lahan": "J",
    "status_lahan_comment": "K",
    "luas": "LM",
    "lantai": "N",
    "lantai_other": "O",
    "dinding": "P",
    "dinding_other": "Q",
    "jendela": "R",
    "atap": "S",
    "atap_comment": "T",
    "penerangan": "U",
    "energi_memasak": "V",
    "sumber_kayu_bakar": "W",
    "pembuangan_sampah": "X",
    "fasilitas_mck": "Y",
    "sumber_air_mandi": "Z",
    "fasilitas_bab": "AB",
    "fasilitas_bab_comment": "AC",
    "pembuangan_limbah_cair": "AE",
    "pembuangan_limbah_cair_comment": "AF",
    "bawah_sutet": "AG",
    "bantaran_sungai": "AH",
    "lereng_gunung": "AI",
    "kumuh": "AJ",
    # "akses_pendidikan": "",
    # "akses_fasilitas_kesehatan": "",
    # "akses_tenaga_kesehatan": "",
    # "akses_sarpras_transport": "",
    "transport_umum": "EI",
    "transport_umum_bulan_sebelumnya": "EJ",
    "penerima_program_pemerintah": "EK",
    "pengeluaran_bulanan": "EL",
}


@attr.dataclass(kw_only=True)
class DataKeluarga:
    # DESKRIPSI KELUARGA & PEMUKIMAN
    no_kk: str
    nik: str
    nama: str
    alamat: str
    nomor_hp: str
    telepon_rumah: str
    anggota_keluarga: str
    tempat_tinggal: TempatTinggal
    tempat_tinggal_comment: Optional[str] = None
    status_lahan: StatusLahan
    status_lahan_comment: Optional[str] = None
    luas: Luas
    lantai: Lantai
    lantai_other: Optional[str] = None
    dinding: Dinding
    dinding_other: Optional[str] = None
    jendela: Jendela
    atap: Atap
    atap_comment: Optional[str] = None
    penerangan: Penerangan
    energi_memasak: EnergiMemasak
    sumber_kayu_bakar: SumberKayuBakar
    pembuangan_sampah: PembuanganSampah
    fasilitas_mck: FasilitasMck
    sumber_air_mandi: SumberAirMandi
    fasilitas_bab: FasilitasBab
    fasilitas_bab_comment: Optional[str] = None
    pembuangan_limbah_cair: PembuanganLimbahCair
    pembuangan_limbah_cair_comment: Optional[str] = None
    bawah_sutet: YaTidak
    bantaran_sungai: YaTidak
    lereng_gunung: YaTidak
    kumuh: YaTidak
    # AKSES PENDIDIKAN TERDEKAT
    akses_pendidikan: AksesPendidikan
    # AKSES FASILITAS KESEHATAN TERDEKAT
    akses_fasilitas_kesehatan: AksesFasilitasKesehatan
    # AKSES TENAGA KESEHATAN TERDEKAT
    akses_tenaga_kesehatan: AksesTenagaKesehatan
    # AKSES PRASARANA DAN SARANA TRANSPORTASI
    akses_sarpras_transport: AksesSarprasTransport
    # LAIN-LAIN
    transport_umum: str
    transport_umum_bulan_sebelumnya: str
    penerima_program_pemerintah: str
    pengeluaran_bulanan: str

    @staticmethod
    def make_data(ws: Worksheet, row: int):
        data: Dict[str, Any] = dict()
        for name, col in MAPPING.items():
            data[name] = ws[f"{col}{row}"].value
        data["akses_pendidikan"] = AksesPendidikan.make(ws, row)
        data["akses_fasilitas_kesehatan"] = AksesFasilitasKesehatan.make(ws, row)
        data["akses_tenaga_kesehatan"] = AksesTenagaKesehatan.make(ws, row)
        data["akses_sarpras_transport"] = AksesSarprasTransport.make(ws, row)
        return data

    @staticmethod
    def get_kk_nik(ws: Worksheet, row: int) -> Tuple[str, str]:
        return (
            ws[f"{MAPPING['no_kk']}{row}"].value,
            ws[f"{MAPPING['nik']}{row}"].value,
        )
