from openpyxl.worksheet.worksheet import Worksheet
from typing import Dict, Optional
from uiautomator2 import UiObject


def get_text(ui: UiObject) -> Optional[str]:
    return ui.info.get("text")


def set_ws_header(ws: Worksheet, header: Dict[str, str], row: int = 1):
    for col, nama in header.items():
        ws[f"{col}{row}"] = nama.title()
