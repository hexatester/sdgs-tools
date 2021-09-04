import attr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Any, Dict


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
    agama: str = "I"
    suku: str = "J"
    warganegara: str = "K"
    nomor_hp: str = "L"
    aktif_internet: str = "M"
    kecepatan_internet: str = "N"
    agama_comment: str = "O"
    akses_melalui: str = "P"
    usia_menikah: str = "Q"
    nomor_whatsapp: str = "R"
    alamat_email: str = "S"
    alamat_facebook: str = "T"
    alamat_twitter: str = "U"
    alamat_instagram: str = "V"

    def make_row(self, ws: Worksheet, row: int) -> Dict[str, Any]:
        return {
            "no_kk": ws[f"{self.no_kk}{row}"],
            "nik": ws[f"{self.nik}{row}"],
            "nama": ws[f"{self.nama}{row}"],
            "jenis_kelamin": ws[f"{self.jenis_kelamin}{row}"],
            "tempat_lahir": ws[f"{self.tempat_lahir}{row}"],
            "tanggal_lahir": ws[f"{self.tanggal_lahir}{row}"],
            "usia": ws[f"{self.usia}{row}"],
            "status_pernikahan": ws[f"{self.status_pernikahan}{row}"],
            "agama": ws[f"{self.agama}{row}"],
            "suku": ws[f"{self.suku}{row}"],
            "warganegara": ws[f"{self.warganegara}{row}"],
            "nomor_hp": ws[f"{self.nomor_hp}{row}"],
            "aktif_internet": ws[f"{self.aktif_internet}{row}"],
            "kecepatan_internet": ws[f"{self.kecepatan_internet}{row}"],
            "agama_comment": ws[f"{self.agama_comment}{row}"],
            "akses_melalui": ws[f"{self.akses_melalui}{row}"],
            "usia_menikah": ws[f"{self.usia_menikah}{row}"],
            "nomor_whatsapp": ws[f"{self.nomor_whatsapp}{row}"],
            "alamat_email": ws[f"{self.alamat_email}{row}"],
            "alamat_facebook": ws[f"{self.alamat_facebook}{row}"],
            "alamat_twitter": ws[f"{self.alamat_twitter}{row}"],
            "alamat_instagram": ws[f"{self.alamat_instagram}{row}"],
        }
