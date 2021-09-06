import tkinter as tk


class DashboardTab(tk.Frame):
    def __init__(self, master: tk.Frame, **kw):
        super().__init__(master, bg="#CCC", width=500, height=500, **kw)
        # self.pack(expand=True, fill="both", side="right")
        self.grid(row=0, column=0, sticky="nsew")
        self.label_info = tk.Label(
            self,
            text="Fitur ini untuk meng import data ke dashboard-sdgs (MASIH DALAM PENGERJAAN)",
        )
        self.label_info.grid(row=0, column=0, columnspan=2)
