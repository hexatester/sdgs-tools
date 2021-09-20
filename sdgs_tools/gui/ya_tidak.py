import tkinter as tk


class YaTidakForm:
    def __init__(self, master, label: str, row: int, default: bool):
        # Label
        self.label = tk.Label(master, text=label)
        self.label.grid(row=row, column=0)
        # Var
        self.var = tk.BooleanVar(master, value=default)
        self.ya = tk.Radiobutton(
            master,
            text="Ya",
            variable=self.var,
            value=True,
        )
        self.ya.grid(row=row, column=1)
        self.tidak = tk.Radiobutton(
            master,
            text="Tidak",
            variable=self.var,
            value=False,
        )
        self.tidak.grid(row=row, column=2)

    @property
    def value(self) -> bool:
        return self.var.get()

    def get(self) -> bool:
        return self.var.get()
