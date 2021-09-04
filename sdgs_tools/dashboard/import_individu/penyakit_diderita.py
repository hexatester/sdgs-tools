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
