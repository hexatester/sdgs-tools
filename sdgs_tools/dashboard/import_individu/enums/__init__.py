import cattr

from .util import make_str_to_enum

from .agama import Agama
from .akses_internet import AksesInternet
from .diekspor import Diekspor
from .jenis_kelamin import JenisKelamin
from .kecepatan_internet import KecepatanInternet
from .keterbukaan_desa import KeterbukaanDesa
from .kondisi_pekerjaan import KondisiPekerjaan
from .pekerjaan_utama import PekerjaanUtama
from .pelayanan_desa import PelayananDesa
from .pendidikan import Pendidikan
from .status_pernikahan import StatusPernikahan
from .sumber_penghasilan import SumberPenghasilan
from .warganegara import Warganegara
from .ya_tidak import YaTidak


cattr.register_structure_hook(Agama, Agama.from_str)  # type: ignore
cattr.register_structure_hook(AksesInternet, AksesInternet.from_str)  # type: ignore
cattr.register_structure_hook(Diekspor, Diekspor.from_str)  # type: ignore
cattr.register_structure_hook(JenisKelamin, JenisKelamin.from_str)  # type: ignore
cattr.register_structure_hook(KecepatanInternet, KecepatanInternet.from_str)  # type: ignore
cattr.register_structure_hook(KeterbukaanDesa, KeterbukaanDesa.from_str)  # type: ignore
cattr.register_structure_hook(KondisiPekerjaan, KondisiPekerjaan.from_str)  # type: ignore
cattr.register_structure_hook(PekerjaanUtama, PekerjaanUtama.from_str)  # type: ignore
cattr.register_structure_hook(PelayananDesa, PelayananDesa.from_str)  # type: ignore
cattr.register_structure_hook(Pendidikan, Pendidikan.from_str)  # type: ignore
cattr.register_structure_hook(StatusPernikahan, StatusPernikahan.from_str)  # type: ignore
cattr.register_structure_hook(SumberPenghasilan, SumberPenghasilan.from_str)  # type: ignore
cattr.register_structure_hook(Warganegara, Warganegara.from_str)  # type: ignore
cattr.register_structure_hook(YaTidak, YaTidak.from_str)  # type: ignore

__all__ = [
    "make_str_to_enum",
    "Agama",
    "AksesInternet",
    "Diekspor",
    "JenisKelamin",
    "KecepatanInternet",
    "KondisiPekerjaan",
    "PekerjaanUtama",
    "PelayananDesa",
    "Pendidikan",
    "StatusPernikahan",
    "SumberPenghasilan",
    "Warganegara",
    "YaTidak",
]
