import tkinter as tk
from typing import Callable, Dict


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
        self.title = tk.Label(self, text="SDGS Tools")
        self.title.pack()
        self.buttons: Dict[str, tk.Button] = dict()

    def add_button(self, text: str, command: Callable[[], None]):
        button = tk.Button(self, text=text, command=command)
        self.buttons[text] = button
        button.pack()
