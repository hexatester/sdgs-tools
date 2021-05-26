from bs4 import BeautifulSoup, Tag
from openpyxl import Workbook
from typing import List


def html_to_xlsx(source: str, destination: str = "INDIVIDU.xlsx"):
    with open(source, "r") as sumber:
        soup = BeautifulSoup(sumber.read(), "html.markup")
    table: Tag = soup.find("table")
    data: List[Tag] = table.find_all("tr")
