from openpyxl.worksheet.worksheet import Worksheet
from typing import Dict, Optional
from uiautomator2 import Device, UiObject


def get_text(ui: UiObject) -> Optional[str]:
    childText = ui.child(className="android.widget.TextView")
    if childText.exists:
        return childText.info.get("text")
    return ui.info.get("text")


def d_get_text(d: Device, resourceId: str):
    if resourceId.startswith("com.kemendes.survey:id/txt"):
        return d(resourceId=resourceId).info.get("text")
    parent = d(resourceId=resourceId)
    childText = parent.child(className="android.widget.TextView")
    return childText.info.get("text")


def set_ws_header(ws: Worksheet, header: Dict[str, str], row: int = 1):
    for col, nama in header.items():
        ws[f"{col}{row}"] = nama.title()
