from typing import Optional
from uiautomator2 import UiObject


def get_text(ui: UiObject) -> Optional[str]:
    return ui.info.get("text")
