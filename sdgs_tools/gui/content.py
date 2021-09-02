import tkinter as tk


class ContentFrame(tk.Frame):
    def __init__(self, master, **kw):
        super().__init__(master, bg="#CCC", width=500, height=500, **kw)
        self.pack(expand=True, fill="both", side="right")
