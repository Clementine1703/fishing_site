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
    addr = request.environ.get('HTTP_X_FORWARDED_FOR', request.remote_addr)


    if (username and password):
        response = cursor.execute(f'INSERT INTO userdata (username, password, addr) VALUES (?, ?, ?)', (username, password, addr))
        connection.commit()
        return 'Данные успешно добавлены'
    return 'Отправьте необходимые данные!'

@app.route('/getdata')
@cross_origin()
def getdata():
    token = request.headers.get('token')

    if token == 'kamil':
        response = cursor.execute('SELECT * FROM userdata')
        result = response.fetchall()
        return json.dumps(result)
    return 'Необходим токен!'
