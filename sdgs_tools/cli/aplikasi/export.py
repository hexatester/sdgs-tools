import click
from uiautomator2 import connect

from sdgs_tools.utils import parse_range
from sdgs_tools.aplikasi_sdgs.export_individu import export_individu as _export_individu
from sdgs_tools.aplikasi_sdgs.export_keluarga import export_keluarga as _export_keluarga


@click.command("export-individu")
@click.option("--rt-rw", type=str, help="RT/RW")
@click.option("--ranges", type=str, help='Baris yang diambil datanya misal "2-100"')
@click.option(
    "--baris-penghasilan",
    type=int,
    default=2,
    help="Baris kosong pertama di sheet penghasilan",
)
@click.option("--individu/--no-individu", default=True)
@click.option("--pekerjaan/--no-pekerjaan", default=True)
@click.option("--pengasilan/--no-pengasilan", default=True)
@click.option("--kesehatan/--no-kesehatan", default=True)
@click.option("--disabilitas/--no-disabilitas", default=True)
@click.option("--pendidikan/--no-pendidikan", default=True)
@click.argument(
    "nama_file",
    type=click.Path(exists=True),
    default="Data INDIVIDU SDGS.xlsx",
)
def export_individu(
    nama_file: str,
    rt_rw: str,
    ranges: str = None,
    baris_penghasilan: int = 2,
    individu: bool = True,
    pekerjaan: bool = True,
    pengasilan: bool = True,
    kesehatan: bool = True,
    disabilitas: bool = True,
    pendidikan: bool = True,
):
    try:
        _export_individu(
            d=connect(),
            filepath=nama_file,
            rt_rw=rt_rw,
            rows=parse_range(ranges),
            start_row_penghasilan=baris_penghasilan,
            skip_individu=not individu,
            skip_pekerjaan=not pekerjaan,
            skip_penghasilan=not pengasilan,
            skip_kesehatan=not kesehatan,
            skip_disabilitas=not disabilitas,
            skip_pendidikan=not pendidikan,
        )
    except FileNotFoundError:
        click.echo("Gagal mengeksport data karena file template tidak ditemukan")
    except Exception as e:
        click.echo(f"Gagal mengeksport data individu karena {repr(e)}")


@click.command("export-keluarga")
@click.option("--rt-rw", type=str, help="RT/RW")
@click.option(
    "--ranges", type=str, required=True, help='Baris yang diambil datanya misal "2-100"'
)
@click.option("--lokasi/--no-lokasi", default=True)
@click.option("--pendidikan/--no-pendidikan", default=True)
@click.option("--kesehatan/--no-kesehatan", default=True)
@click.option("--tenaga_kesehatan/--no-tenaga-kesehatan", default=True)
@click.option("--sarpras/--no-sarpras", default=True)
@click.option("--lain_lain/--no-lain-lain", default=True)
@click.argument(
    "nama_file",
    type=click.Path(exists=True),
    default="Data KELUARGA SDGS.xlsx",
)
def export_keluarga(
    nama_file: str,
    rt_rw: str,
    ranges: str,
    lokasi: bool = True,
    pendidikan: bool = True,
    kesehatan: bool = True,
    tenaga_kesehatan: bool = True,
    sarpras: bool = True,
    lain_lain: bool = True,
):
    try:
        _export_keluarga(
            d=connect(),
            filepath=nama_file,
            rows=parse_range(ranges),
            skip_lokasi=not lokasi,
            skip_pendidikan=not pendidikan,
            skip_kesehatan=not kesehatan,
            skip_tenaga_kesehatan=not tenaga_kesehatan,
            skip_sarpras=not sarpras,
            skip_lain_lain=not lain_lain,
        )
    except FileNotFoundError:
        click.echo("Gagal mengeksport data karena file template tidak ditemukan")
    except Exception as e:
        click.echo(f"Gagal mengeksport data keluarga karena {repr(e)}")
