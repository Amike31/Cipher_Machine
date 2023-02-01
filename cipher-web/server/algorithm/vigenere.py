def str2numArr(str):
    s = str.upper()
    arr = []
    for c in s:
        arr.append(ord(c)-65)
    return arr

def numArr2str(numArr):
    str = ""
    for num in numArr:
        str += chr(num+65)
    return str

def strOnlyAlphabets(s):
    ret = ""
    if s.isalpha():
        ret = s
    else:
        for c in s:
            if c.isalpha():
                ret += c
    return ret 

def makeDefaultKey(p,k):
    p = strOnlyAlphabets(p)
    ret = k
    if len(k) == len(p):
        pass
    elif len(k) < len(p):
        i = 0
        while len(ret) < len(p):
            ret += k[i %len(k)]
            i += 1
    else:
        ret = ret[:len(p)]
    return ret

def vigenereEncode(p,k):
    p = strOnlyAlphabets(p)
    k = makeDefaultKey(p,k)
    pNumArr = str2numArr(p)
    kNumArr = str2numArr(k)
    cArr = []
    for i in range(len(p)):
        cArr.append((pNumArr[i] + kNumArr[i]) % 26)
    c = numArr2str(cArr)
    return c

def vigenereDecode(c,k):
    k = makeDefaultKey(c,k)
    cNumArr = str2numArr(c)
    kNumArr = str2numArr(k)
    pArr = []
    for i in range(len(c)):
        pArr.append((cNumArr[i] - kNumArr[i]) % 26)
    p = numArr2str(pArr)
    return p
    
    
    
if __name__ == "__main__":
    # DEBUGGING --------------------------------
    p = "i love u 3000 "
    k = "sony"
    c = vigenereEncode(p,k)
    pp = vigenereDecode(c,k)
    print(f'Pesan: {p}')
    print(f'Kunci: {makeDefaultKey(p,k)}')
    print(f'Hasil: {c}')
    print(f'Hasil: {pp}')