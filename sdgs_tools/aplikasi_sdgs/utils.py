from openpyxl.worksheet.worksheet import Worksheet
from typing import Dict, Optional
from uiautomator2 import Device, UiObject


def get_text(ui: UiObject) -> Optional[str]:
    childText = ui.child(className="android.widget.TextView")
    if childText.exists:
        return childText.info.get("text")
    return ui.info.get("text")


def d_get_text(d: Device, resourceId: str):
    current = d(resourceId=resourceId)
    if not current.exists:
        d.xpath("//android.widget.ScrollView").scroll()
    if resourceId.startswith("com.kemendes.survey:id/txt"):
        if not current.exists:
            return None
        return current.info.get("text")
    childText = current.child(className="android.widget.TextView")
    if not childText.exists:
        return None
    return childText.info.get("text")


def set_ws_header(ws: Worksheet, header: Dict[str, str], row: int = 1):
    for col, nama in header.items():
        ws[f"{col}{row}"] = nama.title()


def menu_to(d: Device, text: str, resourceId="com.kemendes.survey:id/tabMenu"):
    tabMenu = d(resourceId=resourceId)
    menu = d(text=text)
    if menu.exists:
        return menu.click()
    tabMenu.fling.horiz.backward()
    if menu.exists:
        return menu.click()
    tabMenu.fling.horiz.forward()
    if menu.exists:
        return menu.click()
    raise ValueError(f"Menu tidak ditemukan {text}")
