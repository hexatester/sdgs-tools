import attr
import cattr
from datetime import date
from enum import Enum
from openpyxl import Workbook
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict, List, Optional

from sdgs_tools.utils import parse_range
from .enums import (
    Agama,
    AksesInternet,
    JenisKelamin,
    KecepatanInternet,
    KeterbukaanDesa,
    KondisiPekerjaan,
    PekerjaanUtama,
    PelayananDesa,
    Pendidikan,
    StatusPernikahan,
    Warganegara,
    YaTidak,
)

from . import (
    Disabilitas,
    FasilitasKesehatan,
    Penghasilan,
    PenyakitDiderita,
)
from .mapping import MAPPING, MAPPING_COLS


@attr.dataclass(kw_only=True)
class DataIndividu:
    no_kk: str
    nik: str
    nama: str
    jenis_kelamin: JenisKelamin
    tempat_lahir: str
    tanggal_lahir: date
    usia: str
    status_pernikahan: StatusPernikahan = StatusPernikahan.BELUM_KAWIN
    usia_menikah: str
    agama: Agama
    suku_bangsa: str
    warga_negara: Warganegara = Warganegara.WNI
    nomor_hp: str
    nomor_whatsapp: Optional[str] = None
    alamat_email: Optional[str] = None
    alamat_facebook: Optional[str] = None
    alamat_twitter: Optional[str] = None
    alamat_instagram: Optional[str] = None
    aktif_internet: YaTidak
    akses_melalui: Optional[AksesInternet] = None
    kecepatan_internet: KecepatanInternet
    # Pekerjaan
    kondisi_pekerjaan: KondisiPekerjaan
    pekerjaan_utama: Optional[PekerjaanUtama] = None
    pekerjaan_utama_comment: Optional[str] = None
    jamsos_ketenagakerjaan: Optional[YaTidak] = None
    penghasilan: List[Penghasilan] = attr.field(factory=list)
    pekerjaan_penghasilan: Optional[str] = None
    # Kesehatan
    penyakit_diderita: PenyakitDiderita
    fasilitas_kesehatan: FasilitasKesehatan
    jamsos_kesehatan: YaTidak
    disabilitas: Disabilitas
    setahun_melahirkan: Optional[YaTidak] = None
    mendapat_asi: Optional[YaTidak] = None
    # Pendidikan
    pendidikan_tertinggi: Pendidikan
    tahun_pendidikan: Optional[str] = None
    pendidikan_diikuti: Optional[Pendidikan] = None
    pelatihan_diikuti: Optional[str] = None
    bahasa_permukiman: str
    bahasa_formal: str
    kerja_bakti: str = "0"
    siskamling: str = "0"
    pesta_rakyat: str = "0"
    menolong_kematian: str = "0"
    menolong_sakit: str = "0"
    menolong_kecelakaan: str = "0"
    memperoleh_pelayanan_desa: YaTidak
    pelayanan_desa: Optional[PelayananDesa] = None
    saran_desa: YaTidak
    keterbukaan_desa: Optional[KeterbukaanDesa] = None
    terjadi_bencana: YaTidak
    terdampak_bencana: Optional[YaTidak] = None

    def __attrs_post_init(self):
        if self.status_pernikahan != StatusPernikahan.BELUM_KAWIN:
            raise ValueError("Mohon diisi status pernikahan")
        if self.kondisi_pekerjaan == KondisiPekerjaan.BEKERJA:
            if not self.pekerjaan_utama:
                raise ValueError(
                    "Jika bekerja, mohon diisi pekerjaan utama dan penghasilan"
                )
            if (
                self.pekerjaan_utama == PekerjaanUtama.LAINNYA
                and not self.pekerjaan_utama_comment
            ):
                raise ValueError(
                    "Jika pekerjaan utama Lainnya, mohon diisi Nama Pekerjaan Lainnya"
                )
            if not self.penghasilan:
                raise ValueError("Jika bekerja mohon diisi Baris Penghasilan")
            if not self.pekerjaan_penghasilan:
                raise ValueError("Jika bekerja mohon diisi Penghasilan Setahun")
        else:
            self.pekerjaan_utama = None
            self.pekerjaan_utama_comment = None
        if self.terjadi_bencana and self.terdampak_bencana is None:
            raise ValueError(
                "Jika Terjadi bencana mohon diisi terdampak bencana atau tidak"
            )

    def make_data(self, desa: str, rt: str, rw: str):
        raw_data: Dict[str, Any] = cattr.unstructure(self)
        clean_data: Dict[str, Any] = dict()
        for key, properti in MAPPING.items():
            value = raw_data.get(properti)
            if value in (None, "None"):
                # TODO Improve empty value detection
                continue
            clean_data[key] = value
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

    @staticmethod
    def make(wb: Workbook, row: int):
        data: Dict[str, Any] = dict()
        individu: Worksheet = wb["Individu"]
        for name, col in MAPPING_COLS.items():
            data[name] = individu[f"{col}{row}"].value
        # Penghasilan
        penghasilans = individu[f"Z{row}"].value
        if penghasilans:
            data["penghasilan"] = Penghasilan.make(
                ws=wb["Penghasilan"],
                rows=parse_range(penghasilans),
            )
        else:
            data["penghasilan"] = [Penghasilan.default()]
        # Fasilitas kesehatan
        data["fasilitas_kesehatan"] = FasilitasKesehatan.make(
            ws=individu,
            row=row,
        )
        data["disabilitas"] = individu[f"AT{row}"].value
        return data

    @staticmethod
    def get_nik(
        wb: Workbook,
        row: int,
        individu_ws: str = "Individu",
    ):
        individu = wb[individu_ws]
        return individu[f"B{row}"].value

    def save(
        self,
        wb: Workbook,
        row_individu: int,
        row_penghasilan: int,
        individu_ws: str = "Individu",
    ):
        individu: Worksheet = wb[individu_ws]
        for name, col in MAPPING_COLS.items():
            value = getattr(self, name)
            if value is None:
                continue
            if isinstance(value, Enum):
                value = str(value)
            individu[f"{col}{row_individu}"] = value
