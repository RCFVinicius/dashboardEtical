from flask import Flask, request, render_template#, json
from flask_mail import Mail, Message
import json
import csv
import datetime

import sys
sys.path.insert(0,'/home/rcfvinicius')
import senhas as chave

header_key = chave.header_

app = Flask(__name__)
###
from flask_cors import CORS
CORS(app)
cors = CORS(app, resources={
    r"/dashboard*":{
        "origins":"*"
        },
    r"/maquinas*":{
        "origins":"*"
        },
    r"/maquina*":{
        "origins":"*"
        },
    r"/solicitarmaquina*":{
        "origins":"*"
        }
    })

@app.route('/dashboard', methods=['GET','POST'])
def dashboard():
    #header = request.get_json()
    #global v
    #v = header['chave']
    return 'x'

@app.route('/maquinas', methods=['GET','POST'])
def maquinas():
    #mq = 'mq'+v
    ##{mq:{'status':JSONglobal.paginaindex.v,'timer':JSONglobal.paginaindex.v.timer}}
    return {'mq1':{'mq':1,'status':'p', 'timer':'10:35'},
            'mq2':{'mq':2,'status':'p', 'timer':'9:35'},
            'mq3':{'mq':3,'status':'a', 'timer':'8:35'},
            'mq4':{'mq':4,'status':'a', 'timer':'10:35'},
            'mq5':{'mq':5,'status':'p', 'timer':'10:35'},
            'mq6':{'mq':6,'status':'f', 'timer':'10:35'},
            'mq7':{'mq':7,'status':'a', 'timer':'01:35'},
            'mq8':{'mq':8,'status':'f', 'timer':'10:35'},
}

@app.route('/solicitarmaquina', methods=['GET','POST'])
def solicitarmaquina():
    mq = request.get_json()
    global v
    v = mq['maquina']
    return 'x'

@app.route('/maquina', methods=['GET','POST'])
def maquina():
    #maquina = v
    #{'statusIndividual':{'status':JSONglobal.paginamaquina.maquina.statusIndividual.status,'detalhamento':JSONglobal.statusIndividual.detalhamento, 'horario':JSONglobal.statusIndividual.horario}}
    return {'statusIndividual':{'status':'nao funcionando','detalhamento':'teste detalhamento', 'horario':'20:35'},
            'logs':'texto de logs',
            'calcLargura':{'arr':[10,20,30,40]}
}