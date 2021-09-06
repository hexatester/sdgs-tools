import attr
import cattr
from typing import Any, Dict, List, Optional
from sdgs_tools.dashboard.enums import (
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
from .mapping import MAPPING


@attr.dataclass
class DataIndividu:
    no_kk: str
    nik: str
    nama: str
    jenis_kelamin: JenisKelamin
    tempat_lahir: str
    tanggal_lahir: str
    usia: str
    status_pernikahan: StatusPernikahan
    usia_menikah: str
    agama: Agama
    suku_bangsa: str
    warga_negara: Warganegara
    nomor_hp: str
    nomor_whatsapp: Optional[str]
    alamat_email: Optional[str]
    alamat_facebook: Optional[str]
    alamat_twitter: Optional[str]
    alamat_instagram: Optional[str]
    aktif_internet: YaTidak
    akses_melalui: Optional[AksesInternet]
    kecepatan_internet: KecepatanInternet
    # Pekerjaan
    kondisi_pekerjaan: KondisiPekerjaan
    pekerjaan_utama: Optional[PekerjaanUtama]
    pekerjaan_utama_comment: Optional[str]
    jamsos_ketenagakerjaan: Optional[YaTidak]
    penghasilan: List[Penghasilan]
    pekerjaan_penghasilan: Optional[str]
    # Kesehatan
    penyakit_diderita: PenyakitDiderita
    fasilitas_kesehatan: FasilitasKesehatan
    jamsos_kesehatan: YaTidak
    disabilitas: Disabilitas
    setahun_melahirkan: Optional[YaTidak]
    mendapat_asi: Optional[YaTidak]
    # Pendidikan
    pendidikan_tertinggi: Pendidikan
    tahun_pendidikan: Optional[str]
    pendidikan_diikuti: Optional[Pendidikan]
    pelatihan_diikuti: Optional[str]
    bahasa_permukiman: str
    bahasa_formal: str
    kerja_bakti: str
    siskamling: str
    pesta_rakyat: str
    menolong_kematian: str
    menolong_sakit: str
    menolong_kecelakaan: str
    memperoleh_pelayanan_desa: YaTidak
    pelayanan_desa: Optional[PelayananDesa]
    saran_desa: YaTidak
    keterbukaan_desa: Optional[KeterbukaanDesa]
    terjadi_bencana: YaTidak
    terdampak_bencana: Optional[YaTidak]

    def __attrs_post_init(self):
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
