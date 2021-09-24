import attr
from openpyxl.worksheet.worksheet import Worksheet
from typing import Dict, List, Optional

from .enums import YaTidak
from .mapping import MAPPING_COLS


MAPPING = {
    "Mutaber Diare": "mutaber_diare",
    "Demam Berdarah": "demam_berdarah",
    "Campak": "campak",
    "Malaria": "malaria",
    "Flu Burung Sars": "flu_burung_sars",
    "Covid19": "covid19",
    "Hepatitis B": "hepatitis_b",
    "Hepatitis E": "hepatitis_e",
    "Difteri": "difteri",
    "Chikungunya": "chikungunya",
    "Leptospirosis": "leptospirosis",
    "Kolera": "kolera",
    "Gizi Buruk": "gizi_buruk",
    "Jantung": "jantung",
    "TBC Paru-Paru": "tbc_paru_paru",
    "Kanker": "kanker",
    "Diabetes": "diabetes",
    "Lumpuh": "lumpuh",
    "Lainnya": "lainnya",
}


@attr.dataclass
class PenyakitDiderita:
    # P404
    mutaber_diare: YaTidak = YaTidak.TIDAK
    demam_berdarah: YaTidak = YaTidak.TIDAK
    campak: YaTidak = YaTidak.TIDAK
    malaria: YaTidak = YaTidak.TIDAK
    flu_burung_sars: YaTidak = YaTidak.TIDAK
    covid19: YaTidak = YaTidak.TIDAK
    hepatitis_b: YaTidak = YaTidak.TIDAK
    hepatitis_e: YaTidak = YaTidak.TIDAK
    difteri: YaTidak = YaTidak.TIDAK
    chikungunya: YaTidak = YaTidak.TIDAK
    leptospirosis: YaTidak = YaTidak.TIDAK
    kolera: YaTidak = YaTidak.TIDAK
    gizi_buruk: YaTidak = YaTidak.TIDAK
    jantung: YaTidak = YaTidak.TIDAK
    tbc_paru_paru: YaTidak = YaTidak.TIDAK
    kanker: YaTidak = YaTidak.TIDAK
    diabetes: YaTidak = YaTidak.TIDAK
    lumpuh: YaTidak = YaTidak.TIDAK
    lainnya: YaTidak = YaTidak.TIDAK

    def todict(self) -> Dict[str, str]:
        return {
            "1": "1" if self.mutaber_diare else "2",
            "2": "1" if self.demam_berdarah else "2",
            "3": "1" if self.campak else "2",
            "4": "1" if self.malaria else "2",
            "5": "1" if self.flu_burung_sars else "2",
            "6": "1" if self.covid19 else "2",
            "7": "1" if self.hepatitis_b else "2",
            "8": "1" if self.hepatitis_e else "2",
            "9": "1" if self.difteri else "2",
            "10": "1" if self.chikungunya else "2",
            "11": "1" if self.leptospirosis else "2",
            "12": "1" if self.kolera else "2",
            "13": "1" if self.gizi_buruk else "2",
            "14": "1" if self.jantung else "2",
            "15": "1" if self.tbc_paru_paru else "2",
            "16": "1" if self.kanker else "2",
            "17": "1" if self.diabetes else "2",
            "18": "1" if self.lumpuh else "2",
            "19": "1" if self.lainnya else "2",
        }

    @classmethod
    def from_str(cls, value: Optional[str], t=None):
        if not value:
            return cls()
        elif isinstance(value, dict):
            return cls.from_dict(value)
        data: Dict[str, YaTidak] = dict()
        for key, name in MAPPING.items():
            if value in key:
                data[name] = YaTidak.YA
            else:
                data[name] = YaTidak.TIDAK
        return cls(**data)

    @classmethod
    def from_dict(cls, val: Dict[str, str]):
        data: Dict[str, YaTidak] = dict()
        for name, value in val.items():
            if value == "Ya":
                data[name] = YaTidak.YA
            else:
                data[name] = YaTidak.TIDAK
        return cls(**data)

    def save(self, ws: Worksheet, row: int):
        results: List[str] = list()
        for key, name in MAPPING.items():
            value = getattr(self, name)
            if value == "Ya":
                results.append(key)
        if not results:
            return
        col: str = MAPPING_COLS["penyakit_diderita"]
        ws[f"{col}{row}"] = ", ".join(results)
