from enum import Enum

MAPPING = {
    "Ya": "1",
    "Tidak": "2",
}


class YaTidak(Enum):
    YA = "1"
    TIDAK = "2"

    def __bool__(self):
        return self.value == self.YA
