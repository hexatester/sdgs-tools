import attr
import cattr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, Optional, Tuple

from . import (
    Luas,
    AksesFasilitasKesehatan,
    AksesPendidikan,
    AksesSarprasTransport,
    AksesTenagaKesehatan,
    BantuanPemerintah,
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

MAPPING_COLS = {
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
    # "luas": "LM",
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
    "sumber_air_mandi_comment": "AA",
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

MAPPING = {
    "provinsi": "provinsi",
    "kota": "kota",
    "kecamatan": "kecamatan",
    "desa": "desa",
    "rt": "rt",
    "rw": "rw",
    "no_kk": "no_kk",
    "nik": "nik",
    "K.P206": "nama",
    "K.P207": "alamat",
    "K.P208": "nomor_hp",
    "K.P209": "telepon_rumah",
    "K.P303": "anggota_keluarga",
    "K.P401": "tempat_tinggal",
    "K.P401-Comment": "tempat_tinggal_comment",
    "K.P402": "status_lahan",
    "K.P402-Comment": "status_lahan_comment",
    "K.P403": "luas",
    "K.P404": "lantai",
    "K.P404-Comment": "lantai_other",
    "K.P405": "dinding",
    "K.P405-Comment": "dinding_other",
    "K.P407": "jendela",
    "K.P406": "atap",
    "K.P407-Comment": "atap_comment",
    "K.P408": "penerangan",
    "K.P409": "energi_memasak",
    "K.P410": "sumber_kayu_bakar",
    "K.P411": "pembuangan_sampah",
    "K.P412": "fasilitas_mck",
    "K.P413": "sumber_air_mandi",
    "K.P413-Comment": "sumber_air_mandi_comment",
    "K.P414": "fasilitas_bab",
    "K.P414-Comment": "fasilitas_bab_comment",
    "K.P416": "pembuangan_limbah_cair",
    "K.P416-Comment": "pembuangan_limbah_cair_comment",
    "K.P417": "bawah_sutet",
    "K.P418": "bantaran_sungai",
    "K.P419": "lereng_gunung",
    "K.P420": "kumuh",
    # "K.P421": "akses_pendidikan",
    # "K.P422": "akses_fasilitas_kesehatan",
    # "K.P423": "akses_tenaga_kesehatan",
    # "K.P424": "akses_sarpras_transport",
    "K.P425": "transport_umum",
    "K.P426": "transport_umum_bulan_sebelumnya",
    "K.P427": "penerima_program_pemerintah",
    "K.P428": "pengeluaran_bulanan",
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
    sumber_air_mandi_comment: Optional[str] = None
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
    penerima_program_pemerintah: BantuanPemerintah
    pengeluaran_bulanan: str

    @staticmethod
    def make_data(ws: Worksheet, row: int):
        data: Dict[str, Any] = dict()
        for name, col in MAPPING_COLS.items():
            data[name] = ws[f"{col}{row}"].value
        data["luas"] = Luas.make(ws, row)
        data["akses_pendidikan"] = AksesPendidikan.make(ws, row)
        data["akses_fasilitas_kesehatan"] = AksesFasilitasKesehatan.make(ws, row)
        data["akses_tenaga_kesehatan"] = AksesTenagaKesehatan.make(ws, row)
        data["akses_sarpras_transport"] = AksesSarprasTransport.make(ws, row)
        return data

    @staticmethod
    def get_kk_nik(ws: Worksheet, row: int) -> Tuple[str, str]:
        return (
            ws[f"{MAPPING_COLS['no_kk']}{row}"].value,
            ws[f"{MAPPING_COLS['nik']}{row}"].value,
        )

    def make_json(self, desa: str, rt: str, rw: str):
        raw_data: Dict[str, Any] = cattr.unstructure(self)
        clean_data: Dict[str, Any] = dict()
        for key, properti in MAPPING.items():
            value = raw_data.get(properti)
            if value in (None, "None"):
                # TODO Improve empty value detection
                continue
            clean_data[key] = value
        clean_data.update(self.akses_pendidikan.todict())
        clean_data.update(self.akses_tenaga_kesehatan.todict())
        clean_data.update(self.akses_tenaga_kesehatan.todict())
        clean_data.update(self.akses_sarpras_transport.todict())
        clean_data.update(
            {
                "desa": desa,
                "kecamatan": desa[0:7],
                "kota": desa[0:4],
                "provinsi": desa[0:2],
                "rt": rt,
                "rw": rw,
            }
        )
        return clean_data
