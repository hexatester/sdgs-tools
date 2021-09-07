import cattr

from .atap import Atap
from .dinding import Dinding
from .energi_memasak import EnergiMemasak
from .fasilitas_bab import FasilitasBab
from .fasilitas_mck import FasilitasMck
from .jendela import Jendela
from .lantai import Lantai
from .pembuangan_limbah_cair import PembuanganLimbahCair
from .pembuangan_sampah import PembuanganSampah
from .penerangan import Penerangan
from .status_lahan import StatusLahan
from .sumber_air_mandi import SumberAirMandi
from .sumber_kayu_bakar import SumberKayuBakar
from .tempat_tinggal import TempatTinggal
from .ya_tidak import YaTidak

cattr.register_structure_hook(Atap, Atap.from_str)  # type: ignore
cattr.register_structure_hook(Dinding, Dinding.from_str)  # type: ignore
cattr.register_structure_hook(EnergiMemasak, EnergiMemasak.from_str)  # type: ignore
cattr.register_structure_hook(FasilitasBab, FasilitasBab.from_str)  # type: ignore
cattr.register_structure_hook(FasilitasMck, FasilitasMck.from_str)  # type: ignore
cattr.register_structure_hook(Jendela, Jendela.from_str)  # type: ignore
cattr.register_structure_hook(Lantai, Lantai.from_str)  # type: ignore
cattr.register_structure_hook(PembuanganLimbahCair, PembuanganLimbahCair.from_str)  # type: ignore
cattr.register_structure_hook(PembuanganSampah, PembuanganSampah.from_str)  # type: ignore
cattr.register_structure_hook(Penerangan, Penerangan.from_str)  # type: ignore
cattr.register_structure_hook(StatusLahan, StatusLahan.from_str)  # type: ignore
cattr.register_structure_hook(SumberAirMandi, SumberAirMandi.from_str)  # type: ignore
cattr.register_structure_hook(SumberKayuBakar, SumberKayuBakar.from_str)  # type: ignore
cattr.register_structure_hook(TempatTinggal, TempatTinggal.from_str)  # type: ignore
cattr.register_structure_hook(YaTidak, YaTidak.from_str)  # type: ignore

__all__ = [
    "Atap",
    "Dinding",
    "EnergiMemasak",
    "FasilitasMck",
    "FasilitasBab",
    "Jendela",
    "Lantai",
    "PembuanganLimbahCair",
    "PembuanganSampah",
    "Penerangan",
    "StatusLahan",
    "SumberAirMandi",
    "SumberKayuBakar",
    "TempatTinggal",
    "YaTidak",
]
