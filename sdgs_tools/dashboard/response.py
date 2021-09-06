import attr
import cattr
from typing import Any, Dict, Generic, Optional, Type, TypeVar

try:
    import ujson as json
except ImportError:
    import json  # type: ignore[no-redef]


T = TypeVar("T")


@attr.dataclass
class SdgsResponse(Generic[T]):
    status: int
    message: str
    data: T

    def __bool__(self):
        return self.message == "SUCCESS"

    @classmethod
    def from_str(
        cls,
        data_str: str,
        cl: Type[T],
        ignore: bool = False,
    ) -> "SdgsResponse":
        data: Dict[str, Any] = json.loads(data_str)
        if data["status"] == 500 and not ignore:
            raise Exception(data["message"])
        return cls(
            status=data["status"],
            message=data["message"],
            data=cattr.structure(data["data"], cl),
        )
