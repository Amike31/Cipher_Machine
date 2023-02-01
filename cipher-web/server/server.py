from flask import Flask, request
from flask_cors import CORS, cross_origin
from Playfair import playfairAlgo

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def sendSmthg(): 
    saya = "halo"+ request.json['saya']   
    return {'result' : saya}


@app.route("/playfair/encode", methods = ["POST"])
def playfairE():
    p = request.json['text']
    k = request.json['key']
    res = playfairAlgo(p,k,"e")
    return {"result" : res}

@app.route("/playfair/decode", methods = ["POST"])
def playfairD():
    p = request.json['text']
    k = request.json['key']
    res = playfairAlgo(p,k,"d").replace("X", "")
    return {"result" : res}

if __name__ == '__main__':
    app.run(debug=True)