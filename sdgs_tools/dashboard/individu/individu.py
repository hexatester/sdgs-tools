from datetime import date
from typing import Dict, Optional

from sdgs_tools.dashboard.utils import date_to_str


class DataIndividu:
    no_kk: str
    nik: str
    nama: str
    jenis_kelamin: str
    tempat_lahir: str
    tanggal_lahir: date
    usia: str
    status_pernikahan: str
    agama: str
    suku: str
    warganegara: str
    nomor_hp: str
    aktif_internet: str
    kecepatan_internet: str
    akses_melalui: Optional[str] = None
    usia_menikah: Optional[str] = None
    nomor_whatsapp: Optional[str] = None
    alamat_email: Optional[str] = None
    alamat_facebook: Optional[str] = None
    alamat_twitter: Optional[str] = None
    alamat_instagram: Optional[str] = None

    def todict(self) -> Dict[str, str]:
        data = {
            "I.P103": self.nama,
            "I.P104": "2" if self.jenis_kelamin == "P" else "1",
            "I.P105": self.tempat_lahir,
            "I.P106": date_to_str(self.tanggal_lahir),
            "I.P107": self.usia,
            "I.P108": "2",
            "I.P109": "23",
            "I.P110": "1",
            "I.P111": self.suku,
            "I.P112": "2" if self.warganegara == "WNA" else "1",
            "I.P113": self.nomor_hp,
        }
        if self.nomor_whatsapp:
            data["I.P114"] = self.nomor_whatsapp
        if self.alamat_email:
            data["I.P115"] = self.alamat_email
        if self.alamat_facebook:
            data["I.P116"] = self.alamat_facebook
        if self.alamat_twitter:
            data["I.P117"] = self.alamat_twitter
        if self.alamat_instagram:
            data["I.P118"] = self.alamat_instagram
        return data
