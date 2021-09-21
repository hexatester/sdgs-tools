import tkinter as tk
from tkinter.filedialog import askopenfilename
from tkinter.messagebox import showerror, showinfo, showwarning
from uiautomator2 import connect

from sdgs_tools.aplikasi_sdgs.export_keluarga import export_keluarga as _export_keluarga
from sdgs_tools.gui.form import TextForm
from sdgs_tools.gui.ya_tidak import YaTidakForm
from sdgs_tools.utils import parse_range


class ExportKeluargaWindow(tk.Toplevel):
    def __init__(self, master=None):
        super().__init__(master=master, width=400, height=400)
        self.title("Eksport Keluarga")
        self.label_info = tk.Label(
            self,
            text="Eksport data keluarga",
        )
        self.label_info.grid(row=0, column=0, columnspan=3)
        # Baris
        self.baris = TextForm(self, "Baris", 1)
        self.baris_info_button = tk.Button(self, text="?", command=self.info_baris)
        self.baris_info_button.grid(row=1, column=2)
        # RT/RW
        self.rt_rw = TextForm(self, "RT/RW", 2)
        # Lokasi
        self.lokasi = YaTidakForm(self, "Ekspor data lokasi", 3, True)
        # Pendidikan
        self.pendidikan = YaTidakForm(self, "Ekspor data pendidikan", 4, True)
        # Kesehatan
        self.kesehatan = YaTidakForm(self, "Ekspor data kesehatan", 5, True)
        # Tenaga Kesehatan
        self.tenaga_kesehatan = YaTidakForm(
            self, "Ekspor data tenaga kesehatan", 6, True
        )
        # Sarpras
        self.sarpras = YaTidakForm(self, "Ekspor data sarpras", 7, True)
        # Lain-lain
        self.lain_lain = YaTidakForm(self, "Ekspor data lain-lain", 8, True)
        self.info_label = tk.Label(
            self,
            text="Buat template dan isi dengan rt rw, dan no kk "
            "dari data yang ingin diekspor dari aplikasi!",
        )
        self.info_label.grid(row=8, column=0, columnspan=3)
        self.start_button = tk.Button(
            self,
            text="Pilih template keluarga dan mulai ekspor",
            command=self.export,
        )
        self.start_button.grid(row=9, column=0)

    def export(self):
        files = [
            ("Excel 2010+", "*.xlsx"),
            ("Excel + Macro", "*.xlsm"),
        ]
        filepath = askopenfilename(filetypes=files, defaultextension=files)
        if not filepath:
            showwarning("Gagal", "Mohon pilih template yang benar")
            return
        try:
            _export_keluarga(
                d=connect(),
                rt_rw=self.rt_rw.get(),
                filepath=filepath,
                rows=parse_range(self.baris.get()),
                skip_lokasi=not self.lokasi.get(),
                skip_pendidikan=not self.pendidikan.get(),
                skip_kesehatan=not self.kesehatan.get(),
                skip_tenaga_kesehatan=not self.tenaga_kesehatan.get(),
                skip_sarpras=not self.sarpras.get(),
                skip_lain_lain=not self.lain_lain.get(),
            )
        except FileNotFoundError:
            showwarning(
                "Gagal", "Gagal mengeksport data karena file template tidak ditemukan"
            )
        except Exception as e:
            showwarning("Error", f"Gagal mengeksport data keluarga karena {repr(e)}")

    @staticmethod
    def info_baris():
        showinfo(
            "Baris?",
            'Baris data dari template yang diambil datanya\nMisalnya "2-100,150-200"',
        )
