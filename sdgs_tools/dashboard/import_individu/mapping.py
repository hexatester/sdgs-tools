import attr

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
    disabilitas: str = "AT" # TODO Parse Multi-Select
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
