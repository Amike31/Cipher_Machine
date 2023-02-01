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

def makeAutoKey(p,k):
    p = strOnlyAlphabets(p)
    ret = k
    if len(k) == len(p):
        pass
    elif len(k) < len(p):
        i = 0
        while len(ret) < len(p):
            ret += p[i]
            i += 1
    else:
        ret = ret[:len(p)]
    return ret

def autoVigenereEncode(p,k):
    p = strOnlyAlphabets(p)
    k = makeAutoKey(p,k)
    pNumArr = str2numArr(p)
    kNumArr = str2numArr(k)
    cArr = []
    for i in range(len(p)):
        cArr.append((pNumArr[i] + kNumArr[i]) % 26)
    c = numArr2str(cArr)
    return c

def autoVigenereDecode(c,k):
    cNumArr = str2numArr(c)
    kNumArr = str2numArr(k)     # Dipakai key awal untuk decode sepotong demi sepotong
                                # dan key diupdate setelah setiap iterasi sesuai panjang key awal
    pArr = []
    for i in range(0, len(c), len(k)):
        if i == 0:
            pass
        else:
            kNumArr = pArr[i-len(k): i]
            
        for j in range(i, min(i+len(k), len(c))):
            pArr.append((cNumArr[j] - kNumArr[j %len(k)]) % 26)
    p = numArr2str(pArr)
    return p



if __name__ == "__main__":
    # DEBUGGING --------------------------------
    p = "this is plain text 123"
    p = strOnlyAlphabets(p)
    k = "sony"
    c = autoVigenereEncode(p,k)
    pp = autoVigenereDecode(c,k)
    print("\n\n~~~~~~~~~~~~~")
    print(f'Pesan: {p}')
    print(f'Kunci: {makeAutoKey(p,k)}')
    print(f'Hasil: {c}')
    print(f'Hasil: {pp}')