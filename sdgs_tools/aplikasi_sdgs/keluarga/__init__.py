from .lokasi import get_data_lokasi
from .pendidikan import get_data_pendidikan
from .kesehatan import get_data_kesehatan
from .tenaga_kesehatan import get_data_tenaga_kesehatan
from .sarpras import get_data_sarpras
from .lain_lain import get_data_lain_lain


__all__ = [
    "get_data_lokasi",
    "get_data_pendidikan",
    "get_data_kesehatan",
    "get_data_tenaga_kesehatan",
    "get_data_sarpras",
    "get_data_lain_lain",
]
