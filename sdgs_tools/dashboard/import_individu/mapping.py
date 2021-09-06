import attr
from openpyxl import Workbook
from typing import Any, Dict

from sdgs_tools.utils import parse_range

# from .disabilitas import Disabilitas
from .fasilitas_kesehatan import FasilitasKesehatan
from .penghasilan import Penghasilan

MAPPING = {
    "desa": "desa",
    "I.P103": "nama",
    "I.P104": "jenis_kelamin",
    "I.P105": "tempat_lahir",
    "I.P106": "tanggal_lahir",
    "I.P107": "usia",
    "I.P108": "status_pernikahan",
    "I.P109": "usia_menikah",
    "I.P110": "agama",
    "I.P111": "suku_bangsa",
    "I.P112": "warga_negara",
    "I.P113": "nomor_hp",
    "I.P114": "nomor_whatsapp",
    "I.P115": "alamat_email",
    "I.P116": "alamat_facebook",
    "I.P117": "alamat_twitter",
    "I.P118": "alamat_instagram",
    "I.P119": "aktif_internet",
    "I.P120": "akses_melalui",
    "I.P121": "kecepatan_internet",
    "I.P201": "kondisi_pekerjaan",
    "I.P202": "pekerjaan_utama",
    "I.P202-Comment": "pekerjaan_utama_comment",
    "I.P203": "jamsos_ketenagakerjaan",
    "I.P204": "penghasilan",
    "I.P204_penghasilan": "pekerjaan_penghasilan",
    "I.P401": "penyakit_diderita",
    "I.P402": "fasilitas_kesehatan",
    "I.P403": "jamsos_kesehatan",
    "I.P404": "disabilitas",
    "I.P405": "setahun_melahirkan",
    "I.P406": "mendapat_asi",
    "I.P501": "pendidikan_tertinggi",
    "I.P502": "tahun_pendidikan",
    "I.P503": "pendidikan_diikuti",
    "I.P504": "pelatihan_diikuti",
    "I.P505": "bahasa_permukiman",
    "I.P506": "bahasa_formal",
    "I.P507": "kerja_bakti",
    "I.P508": "siskamling",
    "I.P509": "pesta_rakyat",
    "I.P510": "menolong_kematian",
    "I.P511": "menolong_sakit",
    "I.P512": "menolong_kecelakaan",
    "I.P513": "memperoleh_pelayanan_desa",
    "I.P514": "pelayanan_desa",
    "I.P515": "saran_desa",
    "I.P516": "keterbukaan_desa",
    "I.P517": "terjadi_bencana",
    "I.P518": "terdampak_bencana",
    "kecamatan": "kecamatan",
    "kota": "kota",
    "nik": "nik",
    "no_kk": "no_kk",
    "provinsi": "provinsi",
    "rt": "rt",
    "rw": "rw",
}

NORMAL_DATA = [
    "no_kk",
    "nik",
    "nama",
    "jenis_kelamin",
    "tempat_lahir",
    "tanggal_lahir",
    "usia",
    "status_pernikahan",
    "usia_menikah",
    "agama",
    "suku_bangsa",
    "warga_negara",
    "nomor_hp",
    "nomor_whatsapp",
    "alamat_email",
    "alamat_facebook",
    "alamat_twitter",
    "alamat_instagram",
    "aktif_internet",
    "akses_melalui",
    "kecepatan_internet",
    "kondisi_pekerjaan",
    "pekerjaan_utama",
    "pekerjaan_utama_comment",
    "jamsos_ketenagakerjaan",
    "pekerjaan_penghasilan",
    "penyakit_diderita",
    "jamsos_kesehatan",
    "setahun_melahirkan",
    "mendapat_asi",
    "pendidikan_tertinggi",
    "tahun_pendidikan",
    "pendidikan_diikuti",
    "pelatihan_diikuti",
    "bahasa_permukiman",
    "bahasa_formal",
    "kerja_bakti",
    "siskamling",
    "pesta_rakyat",
    "menolong_kematian",
    "menolong_sakit",
    "menolong_kecelakaan",
    "memperoleh_pelayanan_desa",
    "pelayanan_desa",
    "saran_desa",
    "keterbukaan_desa",
    "terjadi_bencana",
    "terdampak_bencana",
]

PENGHASILAN_DATA = [
    "sumber_penghasilan",
    "penghasilan_comment",
    "penghasilan_jumlah",
    "penghasilan_setahun",
    "penghasilan_diekspor",
]

FASILITAS_KESEHATAN_DATA = [
    "rumah_sakit",
    "rumah_sakit_bersalin",
    "puskesmas_rawat_inap",
    "puskesmas_tanpa_inap",
    "puskesmas_pembantu",
    "poliklinik",
    "tempat_praktik_dokter",
    "rumah_bersalin",
    "tempat_praktik_bidan",
    "poskesdes",
    "polindes",
    "apotik",
    "toko_obat_jamu",
    "posyandu",
    "posbindu",
    "tempat_praktik_dukun",
]


@attr.dataclass
class MappingIndividu:
    no_kk: str = "A"
    nik: str = "B"
    nama: str = "C"
    jenis_kelamin: str = "D"
    tempat_lahir: str = "E"
    tanggal_lahir: str = "F"
    usia: str = "G"
    status_pernikahan: str = "H"
    usia_menikah: str = "I"
    agama: str = "J"
    suku_bangsa: str = "K"
    warga_negara: str = "L"
    nomor_hp: str = "M"
    nomor_whatsapp: str = "N"
    alamat_email: str = "O"
    alamat_facebook: str = "P"
    alamat_twitter: str = "Q"
    alamat_instagram: str = "R"
    aktif_internet: str = "S"
    akses_melalui: str = "T"
    kecepatan_internet: str = "U"
    kondisi_pekerjaan: str = "V"
    pekerjaan_utama: str = "W"
    pekerjaan_utama_comment: str = "X"
    jamsos_ketenagakerjaan: str = "Y"
    penghasilan: str = "Z"  # TODO Penghasilan Dari Sheet Penghasilan
    pekerjaan_penghasilan: str = "AA"
    penyakit_diderita: str = "AB"
    fasilitas_kesehatan: str = "AC-AR"  # TODO Parse From Range
    jamsos_kesehatan: str = "AS"
    disabilitas: str = "AT"  # TODO Parse Multi-Select
    setahun_melahirkan: str = "AU"
    mendapat_asi: str = "AV"
    pendidikan_tertinggi: str = "AW"
    tahun_pendidikan: str = "AX"
    pendidikan_diikuti: str = "AY"
    pelatihan_diikuti: str = "AZ"
    bahasa_permukiman: str = "BA"
    bahasa_formal: str = "BB"
    kerja_bakti: str = "BC"
    siskamling: str = "BD"
    pesta_rakyat: str = "BE"
    menolong_kematian: str = "BF"
    menolong_sakit: str = "BG"
    menolong_kecelakaan: str = "BH"
    memperoleh_pelayanan_desa: str = "BI"
    pelayanan_desa: str = "BJ"
    saran_desa: str = "BK"
    keterbukaan_desa: str = "BL"
    terjadi_bencana: str = "BM"
    terdampak_bencana: str = "BN"
    # Sheet Penghasilan
    sumber_penghasilan: str = "A"
    penghasilan_comment: str = "B"
    penghasilan_jumlah: str = "C"
    penghasilan_setahun: str = "D"
    penghasilan_diekspor: str = "E"
    # Fasilitas Kesehatan
    rumah_sakit: str = "AC"
    rumah_sakit_bersalin: str = "AD"
    puskesmas_rawat_inap: str = "AE"
    puskesmas_tanpa_inap: str = "AF"
    puskesmas_pembantu: str = "AG"
    poliklinik: str = "AH"
    tempat_praktik_dokter: str = "AI"
    rumah_bersalin: str = "AJ"
    tempat_praktik_bidan: str = "AK"
    poskesdes: str = "AL"
    polindes: str = "AM"
    apotik: str = "AN"
    toko_obat_jamu: str = "AO"
    posyandu: str = "AP"
    posbindu: str = "AQ"
    tempat_praktik_dukun: str = "AR"
    _normal_cols: Dict[str, str] = attr.field(factory=dict)
    _penghasilan_cols: Dict[str, str] = attr.field(factory=dict)
    _fasilitas_kesehatan_cols: Dict[str, str] = attr.field(factory=dict)

    def __attrs_post_init__(self):
        # Name : Column
        self._normal_cols: Dict[str, str] = dict()
        for name in NORMAL_DATA:
            col = getattr(self, name)
            assert col
            self._normal_cols[name] = col
        self._penghasilan_cols: Dict[str, str] = dict()
        for name in PENGHASILAN_DATA:
            col = getattr(self, name)
            assert col
            self._penghasilan_cols[name] = col
        self._fasilitas_kesehatan_cols: Dict[str, str] = dict()
        for name in FASILITAS_KESEHATAN_DATA:
            col = getattr(self, name)
            assert col
            self._fasilitas_kesehatan_cols[name] = col

    def __call__(
        self,
        wb: Workbook,
        row: int,
        individu_ws: str = "Individu",
        penghasilan_ws: str = "Penghasilan",
    ) -> Dict[str, Any]:
        data: Dict[str, Any] = dict()
        individu = wb[individu_ws]
        for name, col in self._normal_cols.items():
            data[name] = individu[f"{col}{row}"].value
        # penghasilan: str = "Z"  # TODO Penghasilan Dari Sheet Penghasilan
        penghasilans = individu[f"{self.penghasilan}{row}"].value
        if penghasilans:
            data["penghasilan"] = Penghasilan.make_range(
                ws=wb[penghasilan_ws],
                rows=parse_range(penghasilans),
                cols=self._penghasilan_cols,
            )
        else:
            data["penghasilan"] = Penghasilan.default()
        # fasilitas_kesehatan: str = "AC-AR"  # TODO Parse From Range
        data["fasilitas_kesehatan"] = FasilitasKesehatan.make_row(
            ws=individu,
            row=row,
            cols=self._fasilitas_kesehatan_cols,
        )
        # disabilitas: str = "AT"  # TODO Parse Multi-Select
        data["disabilitas"] = individu[f"{self.disabilitas}{row}"].value
        return data

    def get_nik(
        self,
        wb: Workbook,
        row: int,
        individu_ws: str = "Individu",
    ):
        individu = wb[individu_ws]
        return individu[f"{self.nik}{row}"].value
