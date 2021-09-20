import logging
import tkinter as tk
from tkinter.filedialog import asksaveasfilename
from tkinter.messagebox import showerror, showinfo, showwarning

import adbutils
from uiautomator2.init import Initer

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
        self.init_device_button = tk.Button(
            self,
            text="Inisiasi Perangkat Android",
            command=self.init_device,
        )
        self.init_device_button.grid(row=1, column=0, columnspan=2)
        self.eksport_individu_button = tk.Button(
            self,
            text="Eksport Data Individu",
            command=ExportIndividuWindow,
        )
        self.eksport_individu_button.grid(row=2, column=0)
        self.eksport_keluarga_button = tk.Button(
            self,
            text="Eksport Data Keluarga",
            command=ExportKeluargaWindow,
        )
        self.eksport_keluarga_button.grid(row=2, column=1)

    @staticmethod
    def init_device():
        perangkat = 0
        for device in adbutils.adb.iter_device():
            init = Initer(device, loglevel=logging.INFO)
            init.install()
        else:
            showwarning("Gagal", "Tidak ada perangkat untuk diinisiasi")
            return
        showinfo("Berhasil", f"Berhasil menginisiasi {perangkat} perangkat")
