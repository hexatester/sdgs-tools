from uiautomator2 import Device
from openpyxl.worksheet.worksheet import Worksheet


def get_kesehatan_individu(d: Device, ws: Worksheet, row: int):
    d(text="KESEHATAN").click()
