import sqlite3
from flask import request
from app import app
from flask_cors import cross_origin
import json

connection = sqlite3.connect('data.db', check_same_thread=False)
cursor = connection.cursor()

@app.route('/postdata', methods=['POST'])
@cross_origin()
def postdata():
    username = request.form.get('username')
    password = request.form.get('password')


    if (username and password):
        response = cursor.execute(f'INSERT INTO userdata (username, password) VALUES (?, ?)', (username, password))
        connection.commit()
        return 'Данные успешно добавлены'
    return 'Отправьте необходимые данные!'

@app.route('/getdata')
@cross_origin()
def getdata():
    token = request.headers.get('token')

    if token == 'kamil':
        response = cursor.execute('SELECT * FROM userdata')
        return response.fetchall()
    return 'Необходим токен!'
