import cattr

from .atap import Atap
from .dinding import Dinding
from .energi_memasak import EnergiMemasak
from .fasilitas_bab import FasilitasMck
from .fasilitas_mck import FasilitasBab
from .jendela import Jendela

cattr.register_structure_hook(Atap, Atap.from_str)  # type: ignore
cattr.register_structure_hook(Dinding, Dinding.from_str)  # type: ignore
cattr.register_structure_hook(EnergiMemasak, EnergiMemasak.from_str)  # type: ignore
cattr.register_structure_hook(FasilitasMck, FasilitasMck.from_str)  # type: ignore
cattr.register_structure_hook(FasilitasBab, FasilitasBab.from_str)  # type: ignore
cattr.register_structure_hook(Jendela, Jendela.from_str)  # type: ignore

__all__ = [
    "Atap",
    "Dinding",
    "EnergiMemasak",
    "FasilitasMck",
    "FasilitasBab",
    "Jendela",
]
