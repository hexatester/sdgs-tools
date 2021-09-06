import tkinter as tk


class TextForm:
    def __init__(
        self,
        master,
        text: str,
        row: int,
        value: str = None,
        name: str = None,
        start_col: int = 0,
    ):
        super().__init__()
        self.value = tk.StringVar(master, value, name)
        self.label = tk.Label(master, text=text)
        self.label.grid(row=row, column=start_col)
        self.entry = tk.Entry(master, textvariable=self.value)
        self.entry.grid(row=row, column=start_col + 1)

    def __str__(self):
        return self.value.get()
