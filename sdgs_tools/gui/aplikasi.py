import logging
import tkinter as tk
from tkinter.filedialog import asksaveasfilename
from tkinter.messagebox import showerror, showinfo, showwarning

import adbutils
from uiautomator2.init import Initer

from sdgs_tools.aplikasi_sdgs.excel import make_template_individu
from sdgs_tools.aplikasi_sdgs.excel import make_template_keluarga
from sdgs_tools.aplikasi_sdgs.export import export_individu as _export_individu
from sdgs_tools.aplikasi_sdgs.export import export_keluarga as _export_keluarga


class ExportIndividuWindow(tk.Toplevel):
    def __init__(self, master=None):
        super().__init__(master=master, width=400, height=400)
        self.title("Eksport Individu")
        self.label_info = tk.Label(
            self,
            text="Eksport data individu",
        )
        self.label_info.grid(row=0, column=0)
        # Baris
        self.baris_label = tk.Label(self, text="Baris")
        self.baris_label.grid(row=1, column=0)
        self.baris = tk.StringVar(self, "1")
        self.baris_entry = tk.Entry(self, textvariable=self.baris)
        self.baris_entry.grid(row=1, column=1)
        # Individu
        self.individu_label = tk.Label(self, text="Ekspor data individu")
        self.individu_label.grid(row=2, column=0)
        self.individu = tk.BooleanVar(self, value=True)
        self.individu_ya = tk.Radiobutton(
            self, text="Ya", variable=self.individu, value=True
        )
        self.individu_ya.grid(row=2, column=1)
        self.individu_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.individu, value=False
        )
        self.individu_tidak.grid(row=2, column=2)
        # Pekerjaan
        self.pekerjaan_label = tk.Label(self, text="Ekspor data pekerjaan")
        self.pekerjaan_label.grid(row=3, column=0)
        self.pekerjaan = tk.BooleanVar(self, value=True)
        self.pekerjaan_ya = tk.Radiobutton(
            self, text="Ya", variable=self.pekerjaan, value=True
        )
        self.pekerjaan_ya.grid(row=3, column=1)
        self.pekerjaan_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.pekerjaan, value=False
        )
        self.pekerjaan_tidak.grid(row=3, column=2)
        # Penghasilan
        self.penghasilan_label = tk.Label(self, text="Ekspor data penghasilan")
        self.penghasilan_label.grid(row=4, column=0)
        self.penghasilan = tk.BooleanVar(self, value=True)
        self.penghasilan_ya = tk.Radiobutton(
            self, text="Ya", variable=self.penghasilan, value=True
        )
        self.penghasilan_ya.grid(row=4, column=1)
        self.penghasilan_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.penghasilan, value=False
        )
        self.penghasilan_tidak.grid(row=4, column=2)
        # Kesehatan
        self.kesehatan_label = tk.Label(self, text="Ekspor data kesehatan")
        self.kesehatan_label.grid(row=5, column=0)
        self.kesehatan = tk.BooleanVar(self, value=True)
        self.kesehatan_ya = tk.Radiobutton(
            self, text="Ya", variable=self.kesehatan, value=True
        )
        self.kesehatan_ya.grid(row=5, column=1)
        self.kesehatan_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.kesehatan, value=False
        )
        self.kesehatan_tidak.grid(row=5, column=2)
        # Disabilitas
        self.disabilitas_label = tk.Label(self, text="Ekspor data disabilitas")
        self.disabilitas_label.grid(row=5, column=0)
        self.disabilitas = tk.BooleanVar(self, value=True)
        self.disabilitas_ya = tk.Radiobutton(
            self, text="Ya", variable=self.disabilitas, value=True
        )
        self.disabilitas_ya.grid(row=5, column=1)
        self.disabilitas_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.disabilitas, value=False
        )
        self.disabilitas_tidak.grid(row=5, column=2)
        # Pendidikan
        self.pendidikan_label = tk.Label(self, text="Ekspor data pendidikan")
        self.pendidikan_label.grid(row=6, column=0)
        self.pendidikan = tk.BooleanVar(self, value=True)
        self.pendidikan_ya = tk.Radiobutton(
            self, text="Ya", variable=self.pendidikan, value=True
        )
        self.pendidikan_ya.grid(row=6, column=1)
        self.pendidikan_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.pendidikan, value=False
        )
        self.pendidikan_tidak.grid(row=6, column=2)
        self.start_button = tk.Button(
            self, text="Pilih template individu dan mulai ekspor", command=self.export
        )
        self.start_button.grid(row=7, column=0)

    def export(self):
        files = [
            ("Excel 2010+", "*.xlsx"),
        ]
        filepath = asksaveasfilename(filetypes=files, defaultextension=files)
        try:
            _export_individu(
                filepath=filepath,
                ranges=self.baris,
                row_penghasilan=2,
                row_start=2,
                skip_individu=not self.individu.get(),
                skip_pekerjaan=not self.pekerjaan.get(),
                skip_pengasilan=not self.pengasilan.get(),
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


class AplikasiTab(tk.Frame):
    def __init__(self, master: tk.Frame, **kw):
        super().__init__(master, bg="#CCC", width=500, height=500, **kw)
        self.pack(expand=True, fill="both", side="right")
        self.label_info = tk.Label(
            self,
            text="Fitur ini untuk meng eksport data dari aplikasi sdgs android",
        )
        self.label_info.grid(row=0, column=0)
        self.template_individu_button = tk.Button(
            self,
            text="Buat Template Individu",
            command=self.generate_template_individu,
        )
        self.template_individu_button.grid(row=1, column=0)
        self.template_keluarga_button = tk.Button(
            self,
            text="Buat Template Keluarga",
            command=self.generate_template_keluarga,
        )
        self.template_keluarga_button.grid(row=1, column=1)

        self.init_device_button = tk.Button(
            self,
            text="Inisiasi Perangkat Android",
            command=self.init_device,
        )
        self.init_device_button.grid(row=2, column=0)
        self.eksport_individu_button = tk.Button(
            self,
            text="Eksport Data Individu",
            command=ExportIndividuWindow,
        )
        self.eksport_individu_button.grid(row=3, column=0)

    @staticmethod
    def generate_template_individu():
        files = [
            ("Excel 2010+", "*.xlsx"),
        ]
        filepath = asksaveasfilename(filetypes=files, defaultextension=files)
        if not filepath:
            showwarning("Nama", "mohon tentukan nama dan tempat menyimpan file")
            return
        try:
            make_template_individu(filepath)
            showinfo("Sukses", f"Berhasil membuat template individu\n{filepath}")
        except Exception as e:
            showerror("Error", f"Gagal membuat template individu karena {repr(e)}")

    @staticmethod
    def generate_template_keluarga():
        files = [
            ("Excel 2010+", "*.xlsx"),
        ]
        filepath = asksaveasfilename(filetypes=files, defaultextension=files)
        if not filepath:
            showwarning("Nama", "mohon tentukan nama dan tempat menyimpan file")
            return
        try:
            make_template_keluarga(filepath)
            showinfo("Sukses", "Berhasil membuat template keluarga")
        except Exception as e:
            showerror("Error", f"Gagal membuat template keluarga karena {repr(e)}")

    @staticmethod
    def init_device():
        for device in adbutils.adb.iter_device():
            init = Initer(device, loglevel=logging.INFO)
            init.install()
