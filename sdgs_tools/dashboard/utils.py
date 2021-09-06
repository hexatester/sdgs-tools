import cattr
from datetime import date, datetime
from dateutil import parser
from enum import Enum
from typing import Any, Dict, Type, TypeVar, Union


def date_to_str(value: date) -> str:
    return value.strftime("%Y-%m-%d")


def parse_datetime(text: str, t) -> datetime:
    return parser.parse(
        timestr=text,
        parserinfo=parser.parserinfo(dayfirst=False, yearfirst=True),
    )


def register_cattr_hooks():
    cattr.register_structure_hook(datetime, parse_datetime)


E = TypeVar("E", bound=Enum)


def make_str_to_enum(mapping: Dict[str, Any], default_value: Union[str, int] = "1"):
    def str_to_enum(cls: Type[E], val: Union[str, int], t: Type[E] = None) -> E:
        if isinstance(val, int):
            if str(val) in cls:
                return cls(str(val))
            return cls(default_value)
        for key, enum_val in mapping.items():
            if key == val:
                return cls(enum_val)
        return cls(default_value)

    return str_to_enum
