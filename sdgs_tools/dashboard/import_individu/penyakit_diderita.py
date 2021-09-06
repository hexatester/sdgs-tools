import attr
import cattr
from typing import Dict, Optional

from .enums import YaTidak


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

    @staticmethod
    def todict(data: Dict[str, YaTidak]) -> Dict[str, str]:
        return {
            "1": "1" if data["mutaber_diare"] else "2",
            "2": "1" if data["demam_berdarah"] else "2",
            "3": "1" if data["campak"] else "2",
            "4": "1" if data["malaria"] else "2",
            "5": "1" if data["flu_burung_sars"] else "2",
            "6": "1" if data["covid19"] else "2",
            "7": "1" if data["hepatitis_b"] else "2",
            "8": "1" if data["hepatitis_e"] else "2",
            "9": "1" if data["difteri"] else "2",
            "10": "1" if data["chikungunya"] else "2",
            "11": "1" if data["leptospirosis"] else "2",
            "12": "1" if data["kolera"] else "2",
            "13": "1" if data["gizi_buruk"] else "2",
            "14": "1" if data["jantung"] else "2",
            "15": "1" if data["tbc_paru_paru"] else "2",
            "16": "1" if data["kanker"] else "2",
            "17": "1" if data["diabetes"] else "2",
            "18": "1" if data["lumpuh"] else "2",
            "19": "1" if data["lainnya"] else "2",
        }

    @classmethod
    def from_str(cls, value: Optional[str], t=None):
        if not value:
            return attr.asdict(cls())
        data: Dict[str, YaTidak] = dict()
        for key, name in MAPPING.items():
            if value in key:
                data[name] = YaTidak.YA
            else:
                data[name] = YaTidak.TIDAK
        return data


cattr.register_structure_hook(PenyakitDiderita, PenyakitDiderita.from_str)
cattr.register_unstructure_hook(PenyakitDiderita, PenyakitDiderita.todict)
