import numpy as np
import numpy.linalg as npl

def str2numArr(str):
    s = str.upper()
    arr = []
    for c in s:
        arr.append(ord(c)-65)
    return arr

def numArr2str(numArr):
    str = ""
    for num in numArr:
        num = int(num)
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

def adjoint(A):
    dim = A.shape[0]
    if dim == 1:
        return np.array([[1]])
    else:
        adj = np.empty((dim, dim))
        for i in range(dim):
            for j in range(dim):
                submatrix = np.delete(np.delete(A, i, 0), j, 1)
                adj[j][i] = (-1) ** (i+j) * np.linalg.det(submatrix)
        return adj
    
def adjMat(mat):
    dim = len(mat)
    adj = []
    if dim == 2:
        adj = np.array([[ mat[1][1],-mat[0][1]],
               [-mat[1][0], mat[0][0]]])
    elif dim == 3:
        a, b, c = mat[0][0], mat[0][1], mat[0][2]
        d, e, f = mat[1][0], mat[1][1], mat[1][2]
        g, h, i = mat[2][0], mat[2][1], mat[2][2]
        adj = [[ (e*i-h*f),-(d*i-f*g), (d*h-e*g)],
               [-(b*i-h*c), (a*i-c*g),-(a*h-b*g)],
               [ (b*f-e*c),-(a*f-c*d), (a*e-b*d)]]
        adj = np.transpose(adj)
    return adj

def matInvbyMod(mat, n):
    det = npl.det(mat)
    detRound = round(det) % n
    matInv, exc = mat, ""
    if detRound == 0:
        exc += "Matriks bersifat singular\n"
    else:
        inv = modInv(detRound,n)
        if inv == 0:
            exc += "Tidak ada balikan modulo\n"
        else:
            # adj = adjMat(mat)
            adj = adjoint(mat)
            dim = len(adj)
            intAdj = np.array([[None for i in range(dim)] for j in range(dim)])
            for i in range(dim):
                for j in range(dim):
                    intAdj[i][j] = round(adj[i][j])
            matInv = (inv*intAdj) % n
    return matInv, exc
    
def hillEncode(p, matKey, n):
    matKey = np.array(matKey)
    p = strOnlyAlphabets(p)
    dim = len(matKey)
    pNumArr = str2numArr(p)
    cArr = []
    
    while len(pNumArr)%dim != 0:
        pNumArr.append(23)
        
    for i in range(0,len(pNumArr),dim):
        end = min(i+dim, len(pNumArr))
        key = matKey
        temp = np.matmul(key,pNumArr[i: end]) % n
        cArr = np.append(cArr,temp)
    
    c = numArr2str(cArr)
    det = npl.det(matKey)
    detRound = round(det) % n
    if det == 0:
        c = "Tidak terdapat balikan modulo.!\n\n" + c
    return c

def hillDecode(c, matKey, n):
    matKey = np.array(matKey)
    dim = len(matKey)
    cNumArr = str2numArr(c)
    invKey, exc = matInvbyMod(matKey, n)
    if exc != '':
        p = exc
    else:
        pArr = []

        for i in range(0,len(cNumArr),dim):
            end = min(i+dim, len(cNumArr))
            key = invKey
            temp = np.matmul(key,cNumArr[i:end]) % n
            pArr = np.append(pArr,temp)
        p = numArr2str(pArr)
        while p[len(p)-1] == "X":
            p = p[:len(p)-1]
    return p
    
if __name__ == "__main__":

    # d = np.array([[3, 10],
    #              [15, 9]])
    # e = np.array([[17,17, 5],
    #               [21,18,21],
    #               [ 2, 2,19]])
    # matInv, exc = matInvbyMod(e,26)
    # i = np.matmul(e,matInv)%26
    # print(i)
    # print(matInv)
    
    a = [[17,17, 15],
                [21,18,21],
                [ 2, 2,19]]
    a = [[1,2,3],[4,5,6],[7,8,9]]
    p = "HELLO WORLD"
    c = hillEncode(p,a,26)
    d = hillDecode(c,a,26)
    print("Pesan:",p)
    print("encrp:",c)
    print("decrp:",d)