import tkinter as tk
from tkinter.filedialog import askopenfilename
from tkinter.messagebox import showerror, showinfo, showwarning
from typing import Optional


from sdgs_tools.utils import parse_range
from sdgs_tools.dashboard.sdgs import Sdgs
from sdgs_tools.dashboard.import_individu import import_individu
from sdgs_tools.dashboard.import_individu import MappingIndividu
from ..form import TextForm


class ImportIndividuWindow(tk.Toplevel):
    def __init__(self, master=None):
        super().__init__(master=master)
        self.geometry('230x250')
        self.sdgs: Optional[Sdgs] = None
        self.user_label: Optional[tk.Label] = None
        self.title("Import Individu")
        self.label_info = tk.Label(
            self,
            text="Import data individu",
        )
        self.label_info.grid(row=0, column=0, columnspan=3)
        # Autentikasi
        self.username_form = TextForm(self, "Username", 1)
        self.password_form = TextForm(self, "Password", 2)
        self.login_button = tk.Button(
            self,
            text="Login",
            command=self.login,
        )
        self.login_button.grid(row=3, column=2)

    def show_import(self):
        # Import?
        self.baris_form = TextForm(self, "Baris", 5)
        self.baris_info_button = tk.Button(self, text="?", command=self.info_baris)
        self.baris_info_button.grid(row=5, column=2)
        self.rt_form = TextForm(self, "Rt", 6)
        self.rw_form = TextForm(self, "Rw", 7)
        self.info_label = tk.Label(
            self,
            text="Unduh template di .....",
        )
        self.info_label.grid(row=9, column=0, columnspan=3)
        self.start_button = tk.Button(
            self,
            text="Pilih template individu dan mulai import",
            command=self.start_import,
        )
        self.start_button.grid(row=10, column=0, columnspan=3)

    def login(self):
        username: str = self.username_form.value.get()
        password: str = self.password_form.value.get()
        try:
            self.sdgs = Sdgs(username, password)
            showinfo(
                "Sukses",
                f"Berhasil login dengan menggunakan akun {self.sdgs.token.user}",
            )
            self.user_label = tk.Label(self, text=self.sdgs.token.user)
            self.user_label.grid(row=3, column=0, columnspan=2)
            self.show_import()
        except Exception as e:
            showerror("Gagal", f"Gagal login, alasan: {e}")

    def start_import(self):
        rt=self.rt_form.value.get()
        rw=self.rw_form.value.get()
        if len(rt) != 3:
            showerror("Gagal", "Rt harus 3 digit, misal 001")
            return
        if len(rw) != 3:
            showerror("Gagal", "Rw harus 3 digit, misal 001")
            return
        files = [
            ("Excel Macro", "*.xlsm"),
        ]
        filepath = askopenfilename(filetypes=files, defaultextension=files)
        if not filepath:
            showwarning("Gagal", "Mohon pilih template yang benar")
            return
        try:
            import_individu(
                sdgs=self.sdgs,
                filepath=filepath,
                rows=parse_range(self.baris_form.value.get()),
                rt=rt,
                rw=rw,
            )
        except FileNotFoundError:
            showwarning(
                "Gagal",
                "Gagal mengeksport data karena file template tidak ditemukan",
            )
        except Exception as e:
            showerror("Error", f"Terjadi error : {e}")

    @staticmethod
    def info_baris():
        showinfo(
            "Baris?",
            'Baris data dari template yang diambil datanya\nMisalnya "2-100,150-200"',
        )
