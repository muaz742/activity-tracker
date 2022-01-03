import tkinter as tk

class GUI(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("GUI")
        self.geometry("480x640")
        self.configure(background="#2c3e50")

        # Menubar Configuration 
        self.menubar = tk.Menu(self)  
        self.file = tk.Menu(self.menubar, tearoff=0)  
        self.file.add_command(label="Login")
        self.file.add_separator()
        self.file.add_command(label="Exit", command=self.quit)
        self.menubar.add_cascade(label="File", menu=self.file)
        help = tk.Menu(self.menubar, tearoff=0)
        help.add_command(label="Help")
        help.add_command(label="FAQ")
        help.add_separator()
        help.add_command(label="About")
        self.menubar.add_cascade(label="Help", menu=help)
        self.config(menu=self.menubar)
        # End of Menubar Configuration

    def goToMain(self):
        self.destroy()
        app = Main()
        app.mainloop()

class LoginScreen(GUI):
    def __init__(self):
        super().__init__()
        self.title("Login")
        self.frame = tk.Frame(self, bg="#2c3e50")
        self.header = tk.Label(
            text="Activity Tracker", 
            fg="#ecf0f1",
            bg="#2c3e50",
            font = ("Helvetica", 26)
            )
        self.header.pack()

        self.username = tk.Label(
            text="Username",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#ecf0f1"
        )
        self.username.pack()
        self.username_entry = tk.Entry(
            font=("Helvetica", 16),
            fg="#ecf0f1",
            bg="#2c3e50"
        )
        self.username_entry.pack()

        self.password = tk.Label(
            text="Password",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#ecf0f1"
        )
        self.password.pack()
        self.password_entry = tk.Entry(
            font=("Helvetica", 16),
            fg="#ecf0f1",
            bg="#2c3e50",
            show="*"
        )
        self.password_entry.pack()
        self.loginButton = tk.Button(
            text="Login",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#000",
            command=self.login
        )
        self.loginButton.pack()
        self.registerButton = tk.Button(
            text="Register",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#000",
            command=self.register
        )
        self.registerButton.pack()
        self.frame.pack()

    def login(self):
        print("Login")

    def register(self):
        print("Register")

class Main(GUI):
    def __init__(self):
        super().__init__()
        self.title("Main")
        self.frame = tk.Frame(self, bg="#2c3e50")
        self.header = tk.Label(
            text="Select an option",
            fg="#ecf0f1",
            bg="#2c3e50",
            font = ("Helvetica", 26)
        )
        self.header.pack()
        self.frame.pack()
        self.addActivityBtn = tk.Button(
            text="Add Activity",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#000",
            command=self.goToAddActivity
        )
        self.addActivityBtn.pack()
        self.listActivityBtn = tk.Button(
            text="List Activity",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#000",
            command=self.goToListActivity
        )
        self.listActivityBtn.pack()
        self.logoutBtn = tk.Button(
            text="Logout",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#000",
            command=self.logout
        )
        self.logoutBtn.pack()

    def goToAddActivity(self):
        print("Add Activity")
        self.destroy()
        app = AddActivity()
        app.mainloop()

    def goToListActivity(self):
        print("List Activity")
        self.destroy()
        app = ListActivity()
        app.mainloop()

    def logout(self):
        print("Logout")
        self.destroy()

class AddActivity(GUI):
    def __init__(self):
        super().__init__()
        self.title("Add Activity - Activity Tracker")
        self.frame = tk.Frame(self, bg="#2c3e50")
        self.header = tk.Label(
            text="Add Activity",
            fg="#ecf0f1",
            bg="#2c3e50",
            font=("Helvetica", 26)
        )
        self.header.pack()
        self.label = tk.Label(
            text="Activity",
            fg="#ecf0f1",
            bg="#2c3e50",
            font=("Helvetica", 16)
        )
        self.label.pack()
        self.activity_entry = tk.Entry(
            font=("Helvetica", 16),
            fg="#ecf0f1",
            bg="#2c3e50"
        )
        self.activity_entry.pack()
        self.label = tk.Label(
            text="Duration",
            fg="#ecf0f1",
            bg="#2c3e50",
            font=("Helvetica", 16)
        )
        self.label.pack()
        self.duration_entry = tk.Entry(
            font=("Helvetica", 16),
            fg="#ecf0f1",
            bg="#2c3e50"
        )
        self.duration_entry.pack()
        self.label = tk.Label(
            text="Date",
            fg="#ecf0f1",
            bg="#2c3e50",
            font=("Helvetica", 16)
        )
        self.label.pack()
        self.date_entry = tk.Entry(
            font=("Helvetica", 16),
            fg="#ecf0f1",
            bg="#2c3e50"
        )
        self.date_entry.pack()
        self.label = tk.Label(
            text="Time",
            fg="#ecf0f1",
            bg="#2c3e50",
            font=("Helvetica", 16)
        )
        self.label.pack()
        self.time_entry = tk.Entry(
            font=("Helvetica", 16),
            fg="#ecf0f1",
            bg="#2c3e50"
        )
        self.time_entry.pack()
        self.label = tk.Label(
            text="Location",
            fg="#ecf0f1",
            bg="#2c3e50",
            font=("Helvetica", 16)
        )
        self.label.pack()
        self.location_entry = tk.Entry(
            font=("Helvetica", 16),
            fg="#ecf0f1",
            bg="#2c3e50"
        )
        self.location_entry.pack()
        self.addButton = tk.Button(
            text="Add",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#000",
            command=self.add
        )
        self.addButton.pack()
        self.frame.pack()

        self.backToMainBtn = tk.Button(
            text="Back to Main",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#000",
            command=self.goToMain
        )
        self.backToMainBtn.pack()

    def add(self):
        # get entries
        activity = self.activity_entry.get()
        duration = self.duration_entry.get()
        date = self.date_entry.get()
        time = self.time_entry.get()
        location = self.location_entry.get()
        
        # add to database
        print("Activity: " + activity)
        print("Duration: " + duration)
        print("Date: " + date)
        print("Time: " + time)
        print("Location: " + location)

        # clear entries
        self.activity_entry.delete(0, tk.END)
        self.duration_entry.delete(0, tk.END)
        self.date_entry.delete(0, tk.END)
        self.time_entry.delete(0, tk.END)
        self.location_entry.delete(0, tk.END)
        print("Added")

class ListActivity(GUI):
    def __init__(self):
        super().__init__()
        self.title("List Activity - Activity Tracker")
        self.frame = tk.Frame(self, bg="#2c3e50")
        self.header = tk.Label(
            text="List Activity",
            fg="#ecf0f1",
            bg="#2c3e50",
            font=("Helvetica", 26)
        )
        self.header.pack()
        self.frame.pack()
        self.list = tk.Listbox(
            font=("Helvetica", 16),
            fg="#ecf0f1",
            bg="#2c3e50"
        )
        self.list.pack()
        self.frame.pack()
        activity = self.getActivity()
        for a in activity:
            self.list.insert(tk.END, a)
        self.frame.pack()

        self.backToMainBtn = tk.Button(
            text="Back to Main",
            font=("Helvetica", 16),
            bg="#2c3e50",
            fg="#000",
            command=self.goToMain
        )
        self.backToMainBtn.pack()

    def getActivity(self):
        # Sample activity
        activity = (
            'Oyunculuk Eğitimi',
            'Çöp Toplama', 
            'Doğa Gezisi',
            'Müzik Dinletisi',
            'Kulis Ziyareti'
            )
        return activity

if __name__ == "__main__":
    app = LoginScreen()
    app.mainloop()