from uiautomator2 import Device


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
