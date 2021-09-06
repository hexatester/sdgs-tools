from enum import Enum
from sdgs_tools.dashboard.utils import make_str_to_enum


MAPPING = {
    "Milik Sendiri": "1",
    "Kontrak Sewa": "2",
    "Bebas Sewa": "3",
    "Dipinjami": "4",
    "Dinas": "5",
    "Lainnya": "other",
}


class TempatTinggal(Enum):
    MILIK_SENDIRI = "1"
    KONTRAK_SEWA = "2"
    BEBAS_SEWA = "3"
    DIPINJAMI = "4"
    DINAS = "5"
    LAINNYA = "other"

    from_str = classmethod(make_str_to_enum(MAPPING, "1"))
