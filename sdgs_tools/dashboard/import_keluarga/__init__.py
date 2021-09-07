import cattr

from .akses import Akses
from .sarpras_transport import SarprasTransport

from .akses_fasilitas_kesehatan import AksesFasilitasKesehatan
from .akses_pendidikan import AksesPendidikan
from .akses_sarpras_transport import AksesSarprasTransport
from .akses_tenaga_kesehatan import AksesTenagaKesehatan
from .bantuam_pemerintah import BantuanPemerintah
from .luas import Luas

from .data_keluarga import DataKeluarga

cattr.register_unstructure_hook(AksesFasilitasKesehatan, AksesFasilitasKesehatan.todict)
cattr.register_unstructure_hook(AksesPendidikan, AksesPendidikan.todict)
cattr.register_unstructure_hook(AksesSarprasTransport, AksesSarprasTransport.todict)
cattr.register_unstructure_hook(AksesTenagaKesehatan, AksesTenagaKesehatan.todict)
cattr.register_unstructure_hook(BantuanPemerintah, BantuanPemerintah.todict)
cattr.register_unstructure_hook(AksesTenagaKesehatan, AksesTenagaKesehatan.todict)

cattr.register_structure_hook(BantuanPemerintah, BantuanPemerintah.from_str)

__all__ = [
    "AksesFasilitasKesehatan",
    "AksesPendidikan",
    "AksesSarprasTransport",
    "AksesTenagaKesehatan",
    "Akses",
    "BantuanPemerintah",
    "DataKeluarga",
    "Luas",
    "SarprasTransport",
]
