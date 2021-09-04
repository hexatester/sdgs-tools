import attr
from typing import Dict

from sdgs_tools.dashboard.enums import YaTidak


@attr.dataclass
class PenyakitDiderita:
    # P404
    mutaber_diare: YaTidak
    demam_berdarah: YaTidak
    campak: YaTidak
    malaria: YaTidak
    flu_burung_sars: YaTidak
    covid19: YaTidak
    hepatitis_b: YaTidak
    hepatitis_e: YaTidak
    difteri: YaTidak
    chikungunya: YaTidak
    leptospirosis: YaTidak
    kolera: YaTidak
    gizi_buruk: YaTidak
    jantung: YaTidak
    tbc_paru_paru: YaTidak
    kanker: YaTidak
    diabetes: YaTidak
    lumpuh: YaTidak
    lainnya: YaTidak

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
