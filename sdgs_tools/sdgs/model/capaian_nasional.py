import attr


@attr.dataclass
class Capaian:
    surveyDesa: int
    surveyRT: int
    surveyKeluarga: int
    surveyIndividu: int


@attr.dataclass
class CapaianNasional:
    perolehanNasional: Capaian
    hariiniNasional: Capaian
