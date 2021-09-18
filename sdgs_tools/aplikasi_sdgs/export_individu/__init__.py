import click
from time import sleep
from typing import Any, Dict, List
from uiautomator2 import Device

from .individu import get_data_individu
from .kesehatan import get_data_kesehatan
from .pekerjaan import get_data_pekerjaan
from .penghasilan import get_data_penghasilan


__all__ = [
    "get_data_individu",
    "get_data_kesehatan",
    "get_data_pekerjaan",
    "get_data_penghasilan",
]


def export_individu(
    d: Device,
    filepath: str,
    rows: List[int],
):
    form_rt_rw = d(resourceId="com.kemendes.survey:id/txtRTRW")
    while not form_rt_rw.exists:
        click.echo(
            "Mohon aktifkan GPS, buka aplikasi, dan masuk menu Entri Survey Individu!"
        )
        sleep(1)
    for row in rows:
        data: Dict[str, Any] = dict()
        # Individu
        data.update(get_data_individu(d))
        # Pekerjaan
        data.update(get_data_pekerjaan(d))
        # Penghasilan
        data["penghasilan"] = get_data_penghasilan(d)
        # Kesehatan
        data.update(get_data_kesehatan(d))
