import attr
from openpyxl.worksheet.worksheet import Worksheet

from .enums import (
    JenisTransportasi,
    YaTidak,
)


@attr.dataclass
class SarprasTransport:
    jenis: JenisTransportasi
    transport_umum: YaTidak
    waktu: str
    biaya: str
    kemudahan: YaTidak

    def __attrs_post_init__(self):
        waktu = int(self.waktu) / 60
        self.waktu = str(waktu)

    @staticmethod
    def from_cols(
        ws: Worksheet,
        row: int,
        j: str,
        t: str,
        w: str,
        b: str,
        k: str,
    ):
        return {
            "jenis": ws[f"{j}{row}"],
            "transport_umum": ws[f"{t}{row}"],
            "waktu": ws[f"{w}{row}"],
            "biaya": ws[f"{b}{row}"],
            "kemudahan": ws[f"{k}{row}"],
        }
