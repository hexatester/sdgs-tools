import attr
from typing import List, Optional
from sdgs_tools.dashboard.enums import (
    Agama,
    AksesInternet,
    JenisKelamin,
    KecepatanInternet,
    KondisiPekerjaan,
    PekerjaanUtama,
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



@attr.dataclass
class DataIndividu:
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
    pendidikan_tertinggi: Pendidikan
    tahun_pendidikan: Optional[str]
    bahasa_permukiman: str
    bahasa_formal: str
    kerja_bakti: str
    siskamling: str
    pesta_rakyat: str
    menolong_kematian: str
    menolong_sakit: str
    menolong_kecelakaan: str
    memperoleh_pelayanan_desa: str
    pelayanan_desa: YaTidak
    saran_desa: str
    keterbukaan_desa: str
    terjadi_bencana: YaTidak
    terdampak_bencana: Optional[YaTidak]
