from flask import Flask, request
from flask_cors import CORS
from algorithm.playfair import playfairEncode, playfairDecode
from algorithm.vigenere import vigenereEncode, vigenereDecode
from algorithm.extendVigenere import extendVigenereEncode, extendVigenereDecode
from algorithm.autoVigenere import autoVigenereEncode, autoVigenereDecode
from algorithm.affine import affineEncode, affineDecode
from algorithm.hill import hillEncode, hillDecode

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def sendSmthg(): 
    saya = "halo"+ request.json['saya']   
    return {'result' : saya}

@app.route("/vigenere/encode", methods = ["POST"])
def vigenereE():
    p = request.json['text'].replace('\n', '')
    k = request.json['key'].replace('\n', '')
    res = vigenereEncode(p, k)
    return {"result" : res}

@app.route("/vigenere/decode", methods = ["POST"])
def vigenereD():
    p = request.json['text'].replace('\n', '')
    k = request.json['key'].replace('\n', '')
    res = vigenereDecode(p, k)
    return {"result" : res}

@app.route("/extendVigenere/encode", methods = ["POST"])
def extendVigenereE():
    p = request.json['text']
    k = request.json['key'].replace('\n', '')
    res = extendVigenereEncode(p, k)
    return {"result" : res}

@app.route("/extendVigenere/decode", methods = ["POST"])
def extendVigenereD():
    p = request.json['text']
    k = request.json['key'].replace('\n', '')
    res = extendVigenereDecode(p, k)
    return {"result" : res}

@app.route("/autoVigenere/encode", methods = ["POST"])
def autoVigenereE():
    p = request.json['text'].replace('\n', '')
    k = request.json['key'].replace('\n', '')
    res = autoVigenereEncode(p, k)
    return {"result" : res}

@app.route("/autoVigenere/decode", methods = ["POST"])
def autoVigenereD():
    p = request.json['text'].replace('\n', '')
    k = request.json['key'].replace('\n', '')
    res = autoVigenereDecode(p, k)
    return {"result" : res}

@app.route("/playfair/encode", methods = ["POST"])
def playfairE():
    p = request.json['text'].replace('\n', '')
    k = request.json['key'].replace('\n', '')
    res = playfairEncode(p, k)
    return {"result" : res}

@app.route("/playfair/decode", methods = ["POST"])
def playfairD():
    p = request.json['text'].replace('\n', '')
    k = request.json['key'].replace('\n', '')
    res = playfairDecode(p, k)
    return {"result" : res}

@app.route("/affine/encode", methods = ["POST"])
def affineE():
    p = request.json['text'].replace('\n', '')
    f = request.json['key']
    k = f['formula1'] , f['formula2']
    res = affineEncode(p, k)
    return {"result" : res}

@app.route("/affine/decode", methods = ["POST"])
def affineD():
    p = request.json['text'].replace('\n', '')
    f = request.json['key']
    k = f['formula1'] , f['formula2']
    res = affineDecode(p, k)
    return {"result" : res}

@app.route("/hill/encode", methods = ["POST"])
def hillE():
    p = request.json['text'].replace('\n', '')
    m = request.json['key']
    a,b,c = m['el1'], m['el2'], m['el3']
    d,e,f = m['el4'], m['el5'], m['el6']
    g,h,i = m['el7'], m['el8'], m['el9']
    k = [[a,b,c],[d,e,f],[g,h,i]]
    res = hillEncode(p, k, 26)
    return {"result" : res}

@app.route("/hill/decode", methods = ["POST"])
def hillD():
    p = request.json['text'].replace('\n', '')
    m = request.json['key']
    a,b,c = m['el1'], m['el2'], m['el3']
    d,e,f = m['el4'], m['el5'], m['el6']
    g,h,i = m['el7'], m['el8'], m['el9']
    k = [[a,b,c],[d,e,f],[g,h,i]]
    res = hillDecode(p, k, 26)
    return {"result" : res}

@app.route("/http://localhost:5000/upload", methods = ["POST"])
def upload():
    file = request.files['file']
    file.save(file.filename)
    return {"result" : "success"}

if __name__ == '__main__':
    app.run(debug=True)