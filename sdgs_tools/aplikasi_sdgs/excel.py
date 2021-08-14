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
    "I": "Status",
    "J": "Usia Menikah",
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
    "AT": "RS",
    "AU": "RS Bersalin",
    "AV": "Puskesmas Rawat Inap",
    "AW": "Puskesmas Tanpa Rawat Inap",
    "AX": "Puskesmas Pembantu",
    "AY": "Poliklinik",
    "AZ": "Praktik Dokter",
    "BA": "Rumah Bersalin",
    "BB": "Praktik Bidan",
    "BC": "Poskedes",
    "BC": "Polindes",
    "BE": "Apotik",
    "BF": "Toko Khusus",
    "BG": "Posyandu",
    "BH": "Posbindu",
    "BI": "Praktik Dukun",
    "BJ": "Jaminan Sosial Kesehatan",
    "BK": "Melahirkan",
    # Disabilitas
    "BL": "Buta",
    "BM": "Tuli",
    "BN": "Bisu",
    "BO": "Bisu-tuli",
    "BP": "Cacat tubuh",
    "BQ": "Cacat mental",
    "BR": "Eks-sakit jiwa",
    "BS": "Eks-sakit kusta",
    "BT": "Cacat ganda",
    "BU": "Dipasung",
    # Pendidikan
    "BV": "Pendidikan Tertinggi",
    "BW": "Tahun Pendidikan Dasar",
    "BX": "Bahasa",
    "BY": "Bahasa Lembaga",
    "BZ": "Kerja bakti",
    "CA": "Siskamling",
    "CB": "Pesta rakyat",
    "CC": "Menolong kematian",
    "CD": "Menolong sakit",
    "CE": "Menolong kecelakaan",
    "CF": "Pelayanan desa",
    "CG": "Masukan",
    "CH": "Bencana",
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


def make_template_individu(filepath: str = "Data INDIVIDU SDGS.xlsx", row: int = 1):
    if not filepath.endswith(".xlsx"):
        filepath += ".xlsx"
    wb = Workbook()
    add_header(wb, row)
    wb.save(filepath)
