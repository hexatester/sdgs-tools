from bs4 import BeautifulSoup, Tag
from dateutil.parser import parse as date_parse
from openpyxl import Workbook
from openpyxl.worksheet.worksheet import Worksheet
from typing import List, Tuple


def add_header(ws: Worksheet):
    ws["A1"] = "ID"
    ws["B1"] = "Provinsi"
    ws["C1"] = "Kabupaten"
    ws["D1"] = "Kecamatan"
    ws["E1"] = "Desa"
    ws["F1"] = "RT"
    ws["G1"] = "Rw"
    ws["H1"] = "No KK"
    ws["I1"] = "NIK"
    ws["J1"] = "Nama"
    ws["K1"] = "Jenis Kelamin"
    ws["L1"] = "Tgl Lahir"
    ws["M1"] = "Tempat Lahir"
    ws["N1"] = "Usia"
    ws["O1"] = "Status"
    ws["P1"] = "Usia Saat Nikah"
    ws["Q1"] = "Agama"
    ws["R1"] = "Suku Bangsa"
    ws["S1"] = "Warga Negara"
    ws["T1"] = "No HP"
    ws["U1"] = "No WA"
    ws["V1"] = "Email"
    ws["W1"] = "Facebook"
    ws["X1"] = "Instagram"
    ws["Y1"] = "Twitter"
    ws["Z1"] = "Aktif Internet"
    ws["AA1"] = "Akses Internet"
    ws["AB1"] = "Kecepatan Internet"
    ws["AC1"] = "User ID"
    ws["AD1"] = "Tgl Entri"
    ws["AE1"] = "Ter Upload"


def clean_prefix(data: Tuple[str, str]) -> Tuple[str, str]:
    return data[0].strip("0"), data[1].strip("0")


def rt_rw(data: str) -> Tuple[str, str]:
    if "/" in data:
        return tuple(data.split("/"))  # type: ignore
    if " " in data:
        return tuple(data.split(" "))  # type: ignore
    if len(data) == 3 and "0" in data:
        return tuple(data.split("0"))  # type: ignore
    return data, ""


def add_row(ws: Worksheet, tds: List[Tag], row: int = 2):
    ws["A1"] = tds[0].get_text()
    ws["B1"] = tds[1].get_text()
    ws["C1"] = tds[2].get_text()
    ws["D1"] = tds[3].get_text()
    ws["E1"] = tds[4].get_text()
    ws["F1"], ws["G1"] = clean_prefix(rt_rw(tds[5].get_text()))
    ws["H1"] = tds[6].get_text()
    ws["I1"] = tds[7].get_text()
    ws["J1"] = tds[8].get_text()
    ws["K1"] = tds[9].get_text()
    ws["L1"] = date_parse(tds[10].get_text()).date()
    ws["M1"] = tds[11].get_text()
    ws["N1"] = tds[12].get_text()
    ws["O1"] = tds[13].get_text()
    ws["P1"] = tds[14].get_text()
    ws["Q1"] = tds[15].get_text()
    ws["R1"] = tds[16].get_text()
    ws["S1"] = tds[17].get_text()
    ws["T1"] = tds[18].get_text()
    ws["U1"] = tds[19].get_text()
    ws["V1"] = tds[20].get_text()
    ws["W1"] = tds[21].get_text()
    ws["X1"] = tds[22].get_text()
    ws["Y1"] = tds[23].get_text()
    ws["Z1"] = tds[24].get_text()
    ws["AA1"] = tds[25].get_text()
    ws["AB1"] = tds[26].get_text()
    ws["AC1"] = tds[27].get_text()
    ws["AD1"] = tds[28].get_text()
    ws["AE1"] = tds[29].get_text()


def html_to_xlsx(source: str, destination: str = "INDIVIDU.xlsx"):
    with open(source, "r") as sumber:
        soup = BeautifulSoup(sumber.read(), "html.markup")
    table: Tag = soup.find("table")
    data: List[Tag] = table.find_all("tr")
    data = data[1:]
    wb = Workbook()
    ws = wb.active
    add_header(ws)
    for index, row in enumerate(data):
        add_row(ws, row.find_all("td"), index + 1)
    wb.save(destination)
