import tkinter as tk


class SidebarFrame(tk.Frame):
    def __init__(self, master, **kw):
        super().__init__(
            master,
            width=200,
            height=500,
            bg="white",
            relief="sunken",
            borderwidth=2,
            **kw
        )
        self.pack(expand=False, fill="both", side="left", anchor="nw")
