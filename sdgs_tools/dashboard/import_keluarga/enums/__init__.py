import cattr

from .atap import Atap

cattr.register_structure_hook(Atap, Atap.from_str)  # type: ignore

__all__ = [
    "Atap",
]
