import tkinter as tk
from tkinter.messagebox import showerror, showinfo

from sdgs_tools.aplikasi_sdgs.excel import make_template_individu
from sdgs_tools.aplikasi_sdgs.excel import make_template_keluarga
from sdgs_tools.aplikasi_sdgs.export import export_individu as _export_individu
from sdgs_tools.aplikasi_sdgs.export import export_keluarga as _export_keluarga


class AplikasiTab(tk.Frame):
    def __init__(self, master, **kw):
        super().__init__(master, bg="#CCC", width=500, height=500, **kw)
        self.pack(expand=True, fill="both", side="right")
        self.label_info = tk.Label(
            self,
            text="Fitur ini untuk meng eksport data dari aplikasi sdgs android",
        )
        self.label_info.grid(row=0, column=0)
        self.template_individu_label = tk.Label(
            self, text="Nama file template individu"
        )
        self.template_individu_label.grid(row=1, column=0)
        self.template_individu_nama = tk.StringVar(self, "Data INDIVIDU SDGS.xlsx")
        self.template_individu_entry = tk.Entry(
            self,
            textvariable=self.template_individu_nama,
        )
        self.template_individu_entry.grid(row=1, column=1)
        self.template_individu_button = tk.Button(
            self,
            text="Buat Template Individu",
            command=self.generate_template_individu,
        )
        self.template_individu_button.grid(row=1, column=2)

    def generate_template_individu(self):
        filepath = self.template_individu_nama.get()
        try:
            make_template_individu(filepath)
            showinfo("Sukses", f"Berhasil membuat template individu\n{filepath}")
        except Exception as e:
            showerror("Error", f"Gagal membuat template individu karena {repr(e)}")
