import string
import os

def make2String():
    f = open('pesan.txt', 'r+')
    r = f.read().replace('\n', '')
    f.close()
    f = open('pesan.txt', 'w')
    f.write(r)
    f.close()  

def countCharOnStr(str, n):
    char_count = {}
    for c in str:
        if c.isalpha() and (c not in char_count.keys()):
            count = str.count(c)
            char_count[c] = count
    char_count = getOnlyNPair(char_count, n)
    return char_count

def countBigramOnStr(strOnly, n):
    bi_count = {}
    for i in range(len(strOnly)-1):
        bi = strOnly[i:i+2]
        if (bi not in bi_count.keys()):
            count = strOnly.count(bi)
            bi_count[bi] = count
    bi_count = getOnlyNPair(bi_count, n)
    return bi_count

def countTrigramOnStr(strOnly, n):
    tri_count = {}
    for i in range(len(strOnly)-2):
        tri = strOnly[i:i+3]
        if (tri not in tri_count.keys()):
            count = strOnly.count(tri)
            tri_count[tri] = count
    tri_count = getOnlyNPair(tri_count, n)
    return tri_count

def getOnlyNPair(dic, n):
    mape = dict(sorted(dic.items(), key=lambda item: item[1], reverse=True))
    mape = {k: mape[k] for k in list(mape.keys())[:min(len(mape),n)]}
    return mape

def change_chars(str, change_map):
    return ''.join([change_map.get(c, c) for c in str])

def semiDecrypt(strOnly, n):
    if n > 15:
        n = 15
    strOnly = strOnly.upper().replace(' ', '')
    monogram    = ['E', 'T', 'A', 'O', 'I', 'N', 'S', 'H', 'R', 'D', 'L', 'C', 'U', 'M', 'W', 'F', 'G', 'Y', 'P', 'B', 'V', 'K', 'J', 'X', 'Q']
    bigram      = ['TH', 'HE', 'IN', 'ER', 'AN', 'RE', 'ES', 'ON', 'ST', 'NT', 'EN', 'AT', 'ED', 'ND', 'TO']
    trigram     = ['THE', 'AND', 'ING', 'ENT', 'ION', 'HER', 'FOR', 'THA', 'NTH', 'INT', 'ERE', 'TIO', 'TER', 'EST', 'ERS']

    textMonogram = list(countCharOnStr(strOnly, n))
    textBigram = list(countBigramOnStr(strOnly, n))
    textTrigram = list(countTrigramOnStr(strOnly, n))
    
    map1 = {textMonogram[i]:monogram[i] for i in range(len(textMonogram))}
    map2 = {textBigram[i]:bigram[i] for i in range(len(textBigram))}
    map3 = {textTrigram[i]:trigram[i] for i in range(len(textTrigram))}
    return map1, map2, map3

def p2ctext(p,maps):
    return p.format(**maps)

if __name__ == '__main__':
    os.system('cls' if os.name == 'nt' else 'clear')
    alphabet = list(string.ascii_uppercase)
    f1 = open('pesan.txt', 'r')
    p = f1.read()
    f1.close()
    map1, map2, map3 = semiDecrypt(p,10)
    c2p = {'C':'t','Z':'h','W':'e','F':'a','K':'r','N':'i','X':'o','J':'n','L':'s','H':'u','P':'g','Y':'d','R':'y','U':'v','E':'m','A':'c','B':'f','V':'l','S':'k','Q':'w','O':'b' ,'G':'p','I':'x','T':'q','M':'j','D':'z','_':'_'}
    print(list(c2p))
    for c in alphabet:
        if c not in list(c2p):
            p = p.replace(c, '_')

    for c in list(c2p):
        p = p.replace(c, c2p[c])

    f2 = open('phasil.txt','w')
    f2.write(p)
    f2.close()
    
    # p2c = {v:k for k,v in c2p.items()}
    # cc = 'ARIONSUDVMCFLKWBPXJZ'
    # cc = list(cc)
    # parr = ['that','there','their','other','nation','thisisnot','through','duringthisyear','various','meaning','domestic','foreign','original','kingdom','word','being','empire','prefix','subject','zantine']
    # carr = []
    # for e in parr:
    #     carr.append(''.join([p2c.get(c, c) for c in e]))
    
    # for i in range(len(parr)):
    #     print(carr[i]+"  "+parr[i]+"  "+cc[i])