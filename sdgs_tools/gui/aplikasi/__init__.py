import logging
import tkinter as tk
from tkinter.filedialog import asksaveasfilename
from tkinter.messagebox import showerror, showinfo, showwarning

import adbutils
from uiautomator2.init import Initer

from sdgs_tools.aplikasi_sdgs.excel import make_template_individu
from sdgs_tools.aplikasi_sdgs.excel import make_template_keluarga

# from sdgs_tools.aplikasi_sdgs.export import export_individu as _export_individu
# from sdgs_tools.aplikasi_sdgs.export import export_keluarga as _export_keluarga

from .export_individu import ExportIndividuWindow
from .export_keluarga import ExportKeluargaWindow


class AplikasiTab(tk.Frame):
    def __init__(self, master: tk.Frame, **kw):
        super().__init__(master, bg="#CCC", width=500, height=500, **kw)
        # self.pack(expand=True, fill="both", side="right")
        self.grid(row=0, column=0, sticky="nsew")
        self.label_info = tk.Label(
            self,
            text="Fitur ini untuk meng eksport data dari aplikasi sdgs android",
        )
        self.label_info.grid(row=0, column=0, columnspan=2)
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
        self.eksport_keluarga_button = tk.Button(
            self,
            text="Eksport Data Keluarga",
            command=ExportKeluargaWindow,
        )
        self.eksport_keluarga_button.grid(row=3, column=1)

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
