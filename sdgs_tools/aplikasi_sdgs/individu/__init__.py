from uiautomator2 import Device
from typing import List
from openpyxl import Workbook

from .individu import get_data_individu
from .pekerjaan import get_data_pekerjaan
from .penghasilan import get_data_penghasilan
from .kesehatan import get_data_kesehatan
from .disabilitas import get_data_disabilitas
from .pendidikan import get_data_pendidikan


def get_survey_individu(
    d: Device,
    wb: Workbook,
    row: int,
    rt: str,
    rw: str,
    no_kk: str,
    nik: str,
    row_penghasilan=2,
):
    form_rt_rw = d(resourceId="com.kemendes.survey:id/txtRTRW")
    form_rt_rw.send_keys(f"{rt}/{rw}", clear=True)
    form_kk = d(resourceId="com.kemendes.survey:id/txtNoKK")
    form_kk.send_keys(no_kk, clear=True)
    form_nik = d(resourceId="com.kemendes.survey:id/txtNIK")
    form_nik.send_keys(no_kk, clear=True)
    individu = get_data_individu(d, wb["Individu"], row)
    pekerjaan = get_data_pekerjaan(d, wb["Individu"], row)
    row_penghasilan = get_data_penghasilan(
        d, wb["Penghasilan"], nik, row_penghasilan
    )
    kesehatan = get_data_kesehatan(d, wb["Individu"], row)
    disabilitas = get_data_disabilitas(d, wb["Individu"], row)
    pendidikan = get_data_pendidikan(d, wb["Individu"], row)
    return row_penghasilan
