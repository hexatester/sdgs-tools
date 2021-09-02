import tkinter as tk
from tkinter.filedialog import askopenfilename
from tkinter.messagebox import showerror, showinfo, showwarning

from sdgs_tools.aplikasi_sdgs.export import export_individu as _export_individu


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
        self.baris_label = tk.Label(self, text="Baris")
        self.baris_label.grid(row=1, column=0)
        self.baris = tk.StringVar(self, "1")
        self.baris_entry = tk.Entry(self, textvariable=self.baris)
        self.baris_entry.grid(row=1, column=1)
        self.baris_info_button = tk.Button(self, text="?", command=self.info_baris)
        self.baris_info_button.grid(row=1, column=2)
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
        self.info_label = tk.Label(
            self,
            text="Buat template dan isi dengan rt rw, no kk, "
            "dan nik dari data yang ingin diekspor dari aplikasi!",
        )
        self.info_label.grid(row=7, column=0, columnspan=3)
        self.start_button = tk.Button(
            self,
            text="Pilih template individu dan mulai ekspor",
            command=self.export,
        )
        self.start_button.grid(row=8, column=0)

    def export(self):
        files = [
            ("Excel 2010+", "*.xlsx"),
        ]
        filepath = askopenfilename(filetypes=files, defaultextension=files)
        if not filepath:
            showwarning("Gagal", "Mohon dipilih template yang benar")
            return
        try:
            _export_individu(
                filepath=filepath,
                ranges=self.baris,
                row_penghasilan=2,
                row_start=2,
                skip_individu=not getattr(self, "individu", True),
                skip_pekerjaan=not getattr(self, "pekerjaan", True),
                skip_pengasilan=not getattr(self, "pengasilan", True),
                skip_kesehatan=not getattr(self, "kesehatan", True),
                skip_disabilitas=not getattr(self, "disabilitas", True),
                skip_pendidikan=not getattr(self, "pendidikan", True),
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
