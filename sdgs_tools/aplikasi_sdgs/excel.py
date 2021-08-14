from openpyxl import Workbook

from .utils import set_ws_header

INDIVIDU = {
    "A": "RT",
    "B": "RW",
    "C": "Nomor KK",
    "D": "NIK",
    "E": "Nama",
    "F": "Jenis Kelamin",
    "G": "Tempat Lahir",
    "H": "Tgl Lahir",
    "I": "Usia",
    "J": "Status",
    "K": "Agama",
    "L": "Suku",
    "M": "Warga Negara",
    "N": "No HP",
    "O": "No WA",
    "P": "Email",
    "Q": "FB",
    "R": "Twitter",
    "S": "Instagram",
    "T": "Internet",
    "U": "Akses Internet Lewat",
    "V": "Kecepatan Internet",
    # Pekerjaan
    "W": "Kondisi Pekerjaan",
    "X": "Pekerjaan Utama",
    "Y": "Jaminan Sosial",
    "Z": "Penghasilan",
    # Kesehatan - Penyakit
    "AA": "Muntaber",
    "AB": "Demam Berdarah",
    "AC": "Campak",
    "AC": "Malaria",
    "AE": "Flu Burung",
    "AF": "Covid-19",
    "AG": "Hepatitis B",
    "AH": "Leptospirosis",
    "AI": "Kolera",
    "AJ": "Gizi Buruk",
    "AK": "Jantung",
    "AL": "TBC Paru",
    "AM": "Kanker",
    "AN": "Diabetes",
    "AO": "Hepatitis E",
    "AP": "Difteri",
    "AQ": "Chikungunya",
    "AR": "Lumpuh",
    "AS": "Lainnya",
    # Kesehatan - Fasilitas kesehatan
    "AT": "Rumah Sakit",
    "AU": "Rumah Sakit Bersalin",
    "AV": "Puskesmas rawat inap",
    "AW": "Puskesmas tanpa rawat inap",
    "AX": "Puskesmas Pembantu",
    "AY": "Poliklinik",
    "AZ": "Praktik dokter",
    "BA": "Rumah bersalin",
    "BB": "Praktik bidan",
    "BC": "Poskedes",
    "BC": "Apotik",
    "BE": "Toko khusus obat",
    "BF": "Posyandu",
    "BG": "Posbindu",
    "BH": "Dudkun bayi",
    # Disabilitas
    "BI": "Buta",
    "BJ": "Tuli",
    "BK": "Bisu",
    "BL": "Bisu-tuli",
    "BM": "Cacat tubuh",
    "BN": "Cacat mental",
    "BO": "Eks-sakit jiwa",
    "BP": "Eks-sakit kusta",
    "BQ": "Cacat ganda",
    "BR": "Dipasung",
    # Pendidikan
    "BS": "Bahasa formal",
    "BT": "Kerja bakti",
    "BU": "Siskamling",
    "BV": "Pesta rakyat",
    "BW": "Menolong kematian",
    "BX": "Menolong sakit",
    "BY": "Pelayanan desa",
    "BZ": "Saran desa",
    "CA": "Terjadi bencana",
}

PENGHASILAN = {
    "A": "NIK",
    "B": "Jumlah",
    "C": "Satuan",
    "D": "PenghasilanSetahun",
    "E": "Diekspor",
    "F": "Status",
}


def add_header(wb: Workbook, row: int = 1):
    set_ws_header(wb.create_sheet("Individu"), INDIVIDU, row)
    set_ws_header(wb.create_sheet("Penghasilan"), PENGHASILAN, row)


def make_template(filepath: str = "Template SDGS.xlsx", row: int = 1):
    if not filepath.endswith(".xlsx"):
        filepath += ".xlsx"
    wb = Workbook()
    add_header(wb, row)
    wb.save(filepath)