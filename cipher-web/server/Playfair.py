import numpy as np

global ALPHABETS; 
ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def remove_duplicates(str):
    ret = ""
    for c in str:
        c = c.upper()
        if (c not in ret) and (c.isalpha()) and (c != "J"):
            ret += c
    return ret

def add_alphabets(str):
    cmplt = str
    for c in ALPHABETS:
        if (c not in str) and (c != "J"):
            cmplt += c
    return cmplt

def strOnlyAlphabets(s):
    ret = ""
    if s.isalpha():
        ret = s
    else:
        for c in s:
            if c.isalpha():
                ret += c
    return ret

def keyBox(str):
    ret = []
    for c in str:
        ret.append(c)
    ret = np.reshape(ret,(5,5))
    return ret

def makeBigramArr(p):   
    # FOR Message
    p = strOnlyAlphabets(p)
    p = p.upper()
    p = p.replace("J","I")
    allBigram = []
    
    i = 0
    while i < len(p):
        if i+1 != len(p):
            bigram = p[i:i+2]
            if bigram[0] == bigram[1]:          
                p = p[:i+1] + "X" + p[i+1:]
                bigram = bigram[0]+"X"
            allBigram.append(bigram)
        i += 2
            
    if len(p)%2 != 0:
        p += "X"
        bigram = p[len(p)-2:]
        allBigram.append(bigram)
        
    return allBigram

def bigramShifted(bigram,key,type):
    idx1 = np.where(key == bigram[0])
    r1, c1 = list(zip(*idx1))[0]
    idx2 = np.where(key == bigram[1])
    r2, c2 = list(zip(*idx2))[0]
    
    ret = ""
    shift = 0
    if type == "e":
        shift = 1
    elif type == "d":
        shift = -1
    if r1==r2: # Same Row, shift Col too right
        ret += key[r1][(c1+shift)%5]
        ret += key[r1][(c2+shift)%5]
    elif c1==c2: # Same Col, shift Row too below
        ret += key[(r1+shift)%5][c1]
        ret += key[(r2+shift)%5][c1]
    else:
        ret += key[r1][c2]
        ret += key[r2][c1]
    return ret

def playfairAlgo(p,k,type):
    # FOR Key Box
    key = remove_duplicates(k)
    key = add_alphabets(key)
    key = keyBox(key)
    # FOR Bigrams
    allBigram = makeBigramArr(p)
    
    # Algorithms
    ret = ""
    for bigram in allBigram:
        ret += bigramShifted(bigram,key,type)
    return ret
    
if __name__ == "__main__":
    kw = "nama saya adalah beni subianto saudara dari sukiatmojo zainudin xaviec"
    p = "temui ibu nanti malam ya"
    # k = remove_duplicates(kw)   
    # print(k)
    # k = add_alphabets(k)
    # print(k)
    # print(keyBox(k))
    # bg = makeBigramArr(p)
    # print(bg)
    print(p)
    c = playfairAlgo(p,kw,"e")
    print(c)
    ress = playfairAlgo(p,kw,"d").replace("X", "")
    print(ress)