import tkinter as tk
from tkinter.messagebox import showinfo

from sdgs_tools import __version__
from . import ContentFrame
from . import SidebarFrame

from . import AplikasiTab
from . import DashboardTab


class MainApp(tk.Tk):
    def __init__(self):
        super().__init__(screenName="SDGS Tools")
        self.title(f"SDGS Tools v{__version__}")
        self.sidebar = SidebarFrame(self)
        self.content = ContentFrame(self)

        self.aplikasi_tab = AplikasiTab(self.content)
        self.dashboard_tab = DashboardTab(self.content)
        self.sidebar.add_button("Aplikasi SDGS", self.aplikasi_tab.tkraise)
        self.sidebar.add_button("Dashboard SDGS", self.dashboard_tab.tkraise)

        self.sidebar.add_button("Tentang", self.about)

    def __call__(self):
        self.mainloop()

    def about(self):
        showinfo(
            "Tentang",
            f"SDGS-Tools versi{__version__} dibuat oleh Habib Rohman\n"
            "Donasi : https://saweria.co/hexatester\n"
            "Error? chat : https://t.me/hexatester\n"
            "Aplikasi ini sama sekali tidak berafiliasi dengan, diizinkan, dipelihara, disponsori atau didukung oleh Kemendesa atau afiliasi atau anak organisasinya.\n"
            "Ini adalah perangkat lunak yang independen dan tidak resmi. Gunakan dengan risiko Anda sendiri.",
        )
