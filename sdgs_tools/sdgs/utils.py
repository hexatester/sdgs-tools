import cattr
from datetime import datetime
from dateutil import parser


def parse_datetime(text: str, t) -> datetime:
    return parser.parse(
        timestr=text,
        parserinfo=parser.parserinfo(dayfirst=False, yearfirst=True),
    )


def register_cattr_hooks():
    cattr.register_structure_hook(datetime, parse_datetime)
