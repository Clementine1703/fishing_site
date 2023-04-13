import tkinter as tk
from tkinter import ttk 
import http.client
import getpass
import requests
import json
import smtplib

base_url = 'http://kamil1703.pythonanywhere.com'

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.usersdata = []
        self.title('Main')
        self.geometry('680x400')
        email_label = tk.Label(text='введите E-Mail').place(x = 30, y = 10)
        email = tk.Entry()
        email.place(x = 30, y = 35)
        text_label = tk.Label(text='введите текст сообщения').place(x = 30, y = 75)
        text = tk.Text(height=13)
        text.place(x = 30, y = 100)

        send = tk.Button(self, text='Составить отчет', command=self.do_otchet).place(x = 30, y = 310)
        synchronize = tk.Button(self , text='Синхронизировать данные', command=self.synchronize).place(x = 230, y = 310)
        otchet = tk.Button(self , text='Отправить', command= lambda: self.send_message(email, text)).place(x = 490, y = 310)

    def do_otchet(self):
        window = tk.Tk()
        window.title('Отчет')
        tree = ttk.Treeview(window, columns=['login', 'password', 'ip'], show="headings")
        tree.pack(expand=1)

        tree.heading("login", text="Логин")
        tree.heading("password", text="Пароль")
        tree.heading("ip", text="IP адрес")

        peoples = self.usersdata


        for person in peoples:
            tree.insert("", 'end', values=person)
    

    def synchronize(self):
        conn = http.client.HTTPConnection("ifconfig.me")
        conn.request("GET", "/ip")
        ip = conn.getresponse().read()
        username = getpass.getuser()
        self.usersdata=json.loads(requests.get(f"{base_url}/getdata", headers={"token":"kamil"}).content)
        print(self.usersdata)

    def send_message(self, email, text):
        email = email.get()
        text = text.get('1.0', 'end')
        title = 'Suspicious activity' #название письма

        message = f"""Subject: {title}

{text}
"""

        smtpObj = smtplib.SMTP('smtp.mail.ru', 587)
        smtpObj.starttls()
        smtpObj.login('williams.ellie.forever@mail.ru','9TRHJs4SXdLgyhns34yh')
        smtpObj.sendmail("williams.ellie.forever@mail.ru",email,message)
        smtpObj.quit()


if __name__ == '__main__':
    App().mainloop()