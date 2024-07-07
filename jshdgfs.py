import tkinter as tk
from tkinter import messagebox

def check_login():
    # Replace these with your actual username and password
    correct_username = "user123"
    correct_password = "pass123"

    #Get the entered username and password
    entered_username = entry_username.get()
    entered_password = entry_password.get()

    # Check if the entered credentials are correct
    if entered_username == correct_username and entered_password == correct_password:
        messagebox.showinfo("Login Successful", "Welcome, {}".format(entered_username))
    else:
        messagebox.showerror("Login Failed", "Incorrect username or password")

# Create the main window
root = tk.Tk()
root.title("Login Form")

# Create labels, entry widgets, and buttons
label_username = tk.Label(root, text="Username:")
label_password = tk.Label(root, text="Password:")
entry_username = tk.Entry(root)
entry_password = tk.Entry(root, show="*")  # Show asterisks for password input
login_button = tk.Button(root, text="Login", command=check_login)

# Place widgets using the grid layout manager
label_username.grid(row=0, column=0, padx=10, pady=10, sticky="E")
label_password.grid(row=1, column=0, padx=10, pady=10, sticky="E")
entry_username.grid(row=0, column=1, padx=10, pady=10)
entry_password.grid(row=1, column=1, padx=10, pady=10)
login_button.grid(row=2, column=1, pady=10)

# Run the main loop
root.mainloop()
