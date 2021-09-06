from enum import Enum
from . import make_str_to_enum

MAPPING = {
    "Ya": "1",
    "Tidak": "2",
}


class YaTidak(Enum):
    YA = "1"
    TIDAK = "2"

    def __bool__(self):
        return self.value == self.YA

    from_str = classmethod(make_str_to_enum(MAPPING, "2"))