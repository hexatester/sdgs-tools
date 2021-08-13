import attr


@attr.dataclass
class Wilayah:
    id: str
    value: str

    def __str__(self):
        return self.value
