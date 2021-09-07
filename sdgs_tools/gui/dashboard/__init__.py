import requests
import tkinter as tk
import webbrowser
from tkinter.filedialog import asksaveasfile
from tkinter.messagebox import showinfo, showwarning

from .import_individu import ImportIndividuWindow
from .import_keluarga import ImportKeluargaWindow


class DashboardTab(tk.Frame):
    TEMPLATE_INDIVIDU = "https://hexatester.github.io/sdgs-tools/Template%20Individu%20Dashboard%20SDGS%20Kemendesa.xlsm"
    TEMPLATE_KELUARGA = "https://hexatester.github.io/sdgs-tools/Template%20Keluarga%20Dashboard%20SDGS%20Kemendesa.xlsm"

    def __init__(self, master: tk.Frame, **kw):
        super().__init__(master, bg="#CCC", width=500, height=500, **kw)
        # self.pack(expand=True, fill="both", side="right")
        self.grid(row=0, column=0, sticky="nsew")
        self.label_info = tk.Label(
            self,
            text="Fitur ini untuk meng import data ke dashboard-sdgs (MASIH DALAM PENGERJAAN)",
        )
        self.label_info.grid(row=0, column=0, columnspan=2)
        # Individu
        self.template_individu_button = tk.Button(
            self,
            text="Buat Template Individu",
            command=self.download_template_individu,
        )
        self.template_individu_button.grid(row=1, column=0)
        self.import_individu_button = tk.Button(
            self,
            text="Import Individu",
            command=ImportIndividuWindow,
        )
        self.import_individu_button.grid(row=1, column=1)
        # Keluarga
        self.template_keluarga_button = tk.Button(
            self,
            text="Buat Template Keluarga",
            command=self.download_template_keluarga,
        )
        self.template_keluarga_button.grid(row=2, column=0)
        self.import_keluarga_button = tk.Button(
            self,
            text="Import Keluarga",
            command=ImportKeluargaWindow,
        )
        self.import_keluarga_button.grid(row=2, column=1)

    def download_template_individu(self):
        files = [
            ("Excel 2010+", "*.xlsx"),
        ]
        filepath = asksaveasfile(filetypes=files, defaultextension=files)
        if not filepath or not filepath.name:
            showwarning(
                "Gagal",
                "Mohon tentukan nama dan lokasi file yang akan disimpan",
            )
        res = requests.get(self.TEMPLATE_INDIVIDU)
        with open(filepath.name, "wb") as f:
            f.write(res.content)
        showinfo("Sukses", f"Berhasil menyimpan template di {filepath.name}")

    def download_template_keluarga(self):
        files = [
            ("Excel 2010+", "*.xlsx"),
        ]
        filepath = asksaveasfile(filetypes=files, defaultextension=files)
        if not filepath or not filepath.name:
            showwarning(
                "Gagal",
                "Mohon tentukan nama dan lokasi file yang akan disimpan",
            )
        res = requests.get(self.TEMPLATE_KELUARGA)
        with open(filepath.name, "wb") as f:
            f.write(res.content)
        showinfo("Sukses", f"Berhasil menyimpan template di {filepath.name}")
