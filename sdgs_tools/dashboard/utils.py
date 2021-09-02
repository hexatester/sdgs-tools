from datetime import date


def date_to_str(value: date) -> str:
    return value.strftime("%Y-%m-%d")
