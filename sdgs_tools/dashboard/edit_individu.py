from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from sdgs_tools.dashboard.sdgs import Sdgs
    from .import_individu import DataIndividu


def edit_individu(
    sdgs: "Sdgs",
    individu: "DataIndividu",
):
    meta_individu = sdgs.get_individu(
        search=individu.nama,
        kodeDesa=sdgs.token.wilayah,
    )
    print(meta_individu)
