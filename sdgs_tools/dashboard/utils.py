import cattr
from datetime import date, datetime
from dateutil import parser


def date_to_str(value: date) -> str:
    return value.strftime("%Y-%m-%d")


def parse_datetime(text: str, t) -> datetime:
    return parser.parse(
        timestr=text,
        parserinfo=parser.parserinfo(dayfirst=False, yearfirst=True),
    )


def register_cattr_hooks():
    cattr.register_structure_hook(datetime, parse_datetime)
