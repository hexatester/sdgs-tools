import tkinter as tk
from tkinter.filedialog import askopenfilename
from tkinter.messagebox import showerror, showinfo, showwarning

from sdgs_tools.aplikasi_sdgs.export import export_keluarga as _export_keluarga


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
        self.baris_label = tk.Label(self, text="Baris")
        self.baris_label.grid(row=1, column=0)
        self.baris = tk.StringVar(self, "1")
        self.baris_entry = tk.Entry(self, textvariable=self.baris)
        self.baris_entry.grid(row=1, column=1)
        self.baris_info_button = tk.Button(self, text="?", command=self.info_baris)
        self.baris_info_button.grid(row=1, column=2)
        # Lokasi
        self.lokasi_label = tk.Label(self, text="Ekspor data lokasi")
        self.lokasi_label.grid(row=2, column=0)
        self.lokasi = tk.BooleanVar(self, value=True)
        self.lokasi_ya = tk.Radiobutton(
            self, text="Ya", variable=self.lokasi, value=True
        )
        self.lokasi_ya.grid(row=2, column=1)
        self.lokasi_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.lokasi, value=False
        )
        self.lokasi_tidak.grid(row=2, column=2)
        # Pendidikan
        self.pendidikan_label = tk.Label(self, text="Ekspor data pendidikan")
        self.pendidikan_label.grid(row=3, column=0)
        self.pendidikan = tk.BooleanVar(self, value=True)
        self.pendidikan_ya = tk.Radiobutton(
            self, text="Ya", variable=self.pendidikan, value=True
        )
        self.pendidikan_ya.grid(row=3, column=1)
        self.pendidikan_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.pendidikan, value=False
        )
        self.pendidikan_tidak.grid(row=3, column=2)
        # Kesehatan
        self.kesehatan_label = tk.Label(self, text="Ekspor data kesehatan")
        self.kesehatan_label.grid(row=4, column=0)
        self.kesehatan = tk.BooleanVar(self, value=True)
        self.kesehatan_ya = tk.Radiobutton(
            self, text="Ya", variable=self.kesehatan, value=True
        )
        self.kesehatan_ya.grid(row=4, column=1)
        self.kesehatan_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.kesehatan, value=False
        )
        self.kesehatan_tidak.grid(row=4, column=2)
        # Tenaga Kesehatan
        self.tenaga_kesehatan_label = tk.Label(
            self, text="Ekspor data tenaga kesehatan"
        )
        self.tenaga_kesehatan_label.grid(row=5, column=0)
        self.tenaga_kesehatan = tk.BooleanVar(self, value=True)
        self.tenaga_kesehatan_ya = tk.Radiobutton(
            self, text="Ya", variable=self.tenaga_kesehatan, value=True
        )
        self.tenaga_kesehatan_ya.grid(row=5, column=1)
        self.tenaga_kesehatan_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.tenaga_kesehatan, value=False
        )
        self.tenaga_kesehatan_tidak.grid(row=5, column=2)
        # Sarpras
        self.sarpras_label = tk.Label(self, text="Ekspor data sarpras")
        self.sarpras_label.grid(row=6, column=0)
        self.sarpras = tk.BooleanVar(self, value=True)
        self.sarpras_ya = tk.Radiobutton(
            self, text="Ya", variable=self.sarpras, value=True
        )
        self.sarpras_ya.grid(row=6, column=1)
        self.sarpras_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.sarpras, value=False
        )
        self.sarpras_tidak.grid(row=6, column=2)
        # Lain-lain
        self.lain_lain_label = tk.Label(self, text="Ekspor data lain_lain")
        self.lain_lain_label.grid(row=7, column=0)
        self.lain_lain = tk.BooleanVar(self, value=True)
        self.lain_lain_ya = tk.Radiobutton(
            self, text="Ya", variable=self.lain_lain, value=True
        )
        self.lain_lain_ya.grid(row=7, column=1)
        self.lain_lain_tidak = tk.Radiobutton(
            self, text="Tidak", variable=self.lain_lain, value=False
        )
        self.lain_lain_tidak.grid(row=7, column=2)
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
        ]
        filepath = askopenfilename(filetypes=files, defaultextension=files)
        if not filepath:
            showwarning("Gagal", "Mohon pilih template yang benar")
            return
        try:
            _export_keluarga(
                filepath=filepath,
                ranges=self.baris.get(),
                row_pendidikan=2,
                row_kesehatan=2,
                row_tenaga_kesehatan=2,
                row_sarpras=2,
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
