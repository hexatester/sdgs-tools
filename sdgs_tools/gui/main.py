import tkinter as tk
from tkinter.messagebox import showinfo

from sdgs_tools import __version__
from . import ContentFrame
from . import SidebarFrame

from . import AplikasiTab


class MainApp(tk.Tk):
    def __init__(self):
        super().__init__(screenName="SDGS Tools")
        self.title("SDGS Tools")
        self.sidebar = SidebarFrame(self)
        self.content = ContentFrame(self)

        self.aplikasi_tab = AplikasiTab(self.content)
        self.sidebar.add_button("Aplikasi", self.aplikasi_tab.tkraise)

        self.sidebar.add_button("Tentang", self.about)

    def __call__(self):
        self.mainloop()

    def about(self):
        showinfo(
            "Tentang",
            f"SDGS-Tools versi{__version__} dibuat oleh Habib Rohman\n"
            "Donasi : https://saweria.co/hexatester",
        )