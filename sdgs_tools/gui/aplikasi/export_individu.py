import tkinter as tk
from tkinter.filedialog import askopenfilename
from tkinter.messagebox import showerror, showinfo, showwarning
from uiautomator2 import connect

from sdgs_tools.gui.form import TextForm
from sdgs_tools.gui.ya_tidak import YaTidakForm
from sdgs_tools.aplikasi_sdgs.export_individu import export_individu as _export_individu
from sdgs_tools.utils import parse_range


class ExportIndividuWindow(tk.Toplevel):
    def __init__(self, master=None):
        super().__init__(master=master, width=400, height=400)
        self.title("Eksport Individu")
        self.label_info = tk.Label(
            self,
            text="Eksport data individu",
        )
        self.label_info.grid(row=0, column=0, columnspan=3)
        # Baris
        self.baris = TextForm(self, "Baris", 1)
        self.baris_info_button = tk.Button(self, text="?", command=self.info_baris)
        self.baris_info_button.grid(row=1, column=2)
        # RT/RW
        self.rt_rw = TextForm(self, "RT/RW", 2)
        # Individu
        self.individu = YaTidakForm(self, "Ekspor data individu", 3, True)
        # Pekerjaan
        self.pekerjaan = YaTidakForm(self, "Ekspor data pekerjaan", 4, True)
        # Penghasilan
        self.penghasilan = YaTidakForm(self, "Ekspor data penghasilan", 5, True)
        # Kesehatan
        self.kesehatan = YaTidakForm(self, "Ekspor data kesehatan", 6, True)
        # Disabilitas
        self.disabilitas = YaTidakForm(self, "Ekspor data disabilitas", 7, True)
        # Pendidikan
        self.pendidikan = YaTidakForm(self, "Ekspor data pendidikan", 8, True)
        self.info_label = tk.Label(
            self,
            text="Buat template dan isi dengan rt rw, no kk, "
            "dan nik dari data yang ingin diekspor dari aplikasi!",
        )
        self.info_label.grid(row=9, column=0, columnspan=3)
        self.start_button = tk.Button(
            self,
            text="Pilih template individu dan mulai ekspor",
            command=self.export,
        )
        self.start_button.grid(row=10, column=0)

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
            _export_individu(
                d=connect(),
                filepath=filepath,
                rt_rw=str(self.rt_rw),
                rows=parse_range(self.baris.get()),
                start_row_penghasilan=2,
                skip_individu=not self.individu.get(),
                skip_pekerjaan=not self.pekerjaan.get(),
                skip_penghasilan=not self.penghasilan.get(),
                skip_kesehatan=not self.kesehatan.get(),
                skip_disabilitas=not self.disabilitas.get(),
                skip_pendidikan=not self.pendidikan.get(),
            )
        except FileNotFoundError:
            showwarning(
                "Gagal", "Gagal mengeksport data karena file template tidak ditemukan"
            )
        except Exception as e:
            showwarning("Error", f"Gagal mengeksport data individu karena {repr(e)}")

    @staticmethod
    def info_baris():
        showinfo(
            "Baris?",
            'Baris data dari template yang diambil datanya\nMisalnya "2-100,150-200"',
        )
