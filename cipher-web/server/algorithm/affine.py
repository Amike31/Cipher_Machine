def str2numArr(str):
    arr = []
    for c in str:
        if (c.isalpha()):
            c = c.upper()
            arr.append(ord(c)-65)
        else:
            arr.append(-ord(c))
    return arr

def numArr2str(numArr):
    str = ""
    for num in numArr:
        if num >= 0:
            str += chr(num+65)
        else:
            str += chr(-num)
    return str

def euclidian(a, b):
    ## Done by recursion, representing: gcd = a*R + b*S .. 
    # Base 1
    if a == 0:
        return (b, 0, 1)
    # Recursive
    else:
        last_Gcd, last_R, last_S = euclidian(b%a,a)
        gcd, R, S = last_Gcd, last_S - (b//a) * last_R, last_R
        return (gcd, R, S)

def modInv(a, m):
    ## use euclidian form where 1 = a*R + m*S
    # if inv is 0 that means not inversed
    inv = 0
    gcd, R, _ = euclidian(a, m)
    if gcd == 1:
        inv = R % m
    return inv

def affineEncode(p, k):
    # c = m.p + b (mod n), which is n is 26
    # k = (m, b) which is m is the multiply and b is the shift
    n = 26
    m, b = k
    c = ""
    if (modInv(m,n) == 0):
        c = "WARNING.!! TIDAK TERDAPAT BALIKAN MODULO..!\n\n"
    
    pNumArr = str2numArr(p)
    cArr = []
    for i in range(len(p)):
        if pNumArr[i] >= 0:
            cArr.append((m*pNumArr[i] + b) % 26)
        else:
            cArr.append(pNumArr[i])
    c += numArr2str(cArr)
    return c

def affineDecode(c, k):
    # c = m.p + b (mod n), which is n is 26
    # k = (m, b) which is m is the multiply and b is the shift
    n = 26
    m, b = k
    inv = modInv(m,n)
    p = ""
    if (inv == 0):
        p = "WARNING.!! TIDAK TERDAPAT BALIKAN MODULO..!\n"
    else:
        cNumArr = str2numArr(c)
        print(cNumArr)
        # print("pArr :", pNumArr)
        pArr = []
        for i in range(len(c)):
            if cNumArr[i] >= 0:
                pArr.append((inv*(cNumArr[i] - b)) % 26)
            else:
                pArr.append(cNumArr[i])
        p += numArr2str(pArr)
    return p

if __name__ == "__main__":
    # DEBUGGING --------------------------------
    p = "i love u 3000"
    k = 2 , 1
    c = affineEncode(p,k)
    pp = affineDecode(c,k)
    print(f'Pesan: {p}')
    print(f'Hasil: {c}')
    print(f'Hasil: {pp}')
    
    