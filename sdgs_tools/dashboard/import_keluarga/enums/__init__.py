import cattr

from .atap import Atap
from .dinding import Dinding
from .energi_memasak import EnergiMemasak

cattr.register_structure_hook(Atap, Atap.from_str)  # type: ignore
cattr.register_structure_hook(Dinding, Dinding.from_str)  # type: ignore
cattr.register_structure_hook(EnergiMemasak, EnergiMemasak.from_str)  # type: ignore

__all__ = [
    "Atap",
    "Dinding",
    "EnergiMemasak",
]
