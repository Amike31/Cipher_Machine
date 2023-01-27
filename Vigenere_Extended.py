def str2numArr(str):
    arr = []
    for c in str:
        arr.append(ord(c))
    return arr

def numArr2str(numArr):
    str = ""
    for num in numArr:
        str += chr(num)
    return str

def extendKeyNumArr(p,k):
    ret = str2numArr(k)
    if len(k) == len(p):
        pass
    elif len(k) < len(p):
        i = 0
        while len(ret) < len(p):
            ret +=(str2numArr(k[i %len(k)][0]))
            i += 1
    else:
        ret = ret[:len(p)]
    return ret

def extendVigenereEncode(p,k):
    kNumArr = extendKeyNumArr(p,k)
    pNumArr = str2numArr(p)
    print(f"ini sebelum encryp {len(pNumArr)}\n", pNumArr)
    cArr = []
    
    for i in range(len(p)):
        cArr.append((pNumArr[i] + kNumArr[i]) % 256)
    print(f"ini hasil encryp {len(cArr)}\n", cArr)
    c = numArr2str(cArr)
    return c

def extendVigenereDecode(c,k):
    kNumArr = extendKeyNumArr(c,k)
    cNumArr = str2numArr(c)
    print(f"Ini sebelum decrypt {len(cNumArr)}\n",cNumArr)
    pArr = []
    for i in range(len(c)):
        pArr.append((cNumArr[i] - kNumArr[i]) % 256)
    print(f"ini setelah di decrypt {len(pArr)}\n", pArr)
    p = numArr2str(pArr)
    return p

if __name__ == "__main__":
    # DEBUGGING --------------------------------
    p = "this is plain text 123;l[pl[.k,.,=-]]"
    k = "s"
    c = extendVigenereEncode(p,k)
    pp = extendVigenereDecode(c,k)
    print(f'Pesan: {p}')
    print(f'Kunci: {numArr2str(extendKeyNumArr(p,k))}')
    print(f'Hasil: {c}')
    print(f'Hasil: {pp}')