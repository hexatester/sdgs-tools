from enum import Enum
from typing import Any, Dict, Type, TypeVar, Union

E = TypeVar("E", bound=Enum)


def make_str_to_enum(mapping: Dict[str, Any], default_value: str = "1"):
    def str_to_enum(
        cls: Type[E], val: Union[str, int], default: str = default_value
    ) -> E:
        if isinstance(val, int):
            if str(val) in cls:
                return cls(str(val))
            return cls(default)
        for key, enum_val in mapping.items():
            if key == val:
                return cls(val)
        return cls(default)

    return str_to_enum
