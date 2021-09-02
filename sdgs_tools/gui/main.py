import tkinter as tk

from . import ContentFrame
from . import SidebarFrame


class MainApp(tk.Tk):
    def __init__(self):
        super().__init__(screenName="SDGS Tools")
        self.sidebar = SidebarFrame(self)
        self.content = ContentFrame(self)

    def __call__(self):
        self.mainloop()
