import cattr
from datetime import date


def date_to_str(value: date) -> str:
    return value.strftime("%Y-%m-%d")


def register_cattr_hooks():
    cattr.register_unstructure_hook(date, date_to_str)
