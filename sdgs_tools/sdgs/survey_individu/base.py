from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from sdgs_tools.sdgs import Sdgs

from . import SurveyPagedData


class SurveyIndividu:
    def __init__(self, sdgs: "Sdgs"):
        self.sdgs = sdgs

    def getSurveyPagedData(
        self,
        page: int = 1,
        search: str = "",
        pageSize: int = 50,
        isSortAsc: bool = True,
        kodeDesa: str = None,
    ) -> SurveyPagedData:
        json_data = {
            "isSortAsc": isSortAsc,
            "kodeDesa": kodeDesa or self.sdgs.token.wilayah,
            "page": page,
            "pageSize": pageSize,
            "search": search,
        }
        return self.sdgs.api_post_to_res(
            "surveyIndividu/getSurveyPagedData",
            SurveyPagedData,
            json=json_data,
        )
