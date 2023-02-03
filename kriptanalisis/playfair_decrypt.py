import os
import string

def countBigramOnStr(strOnly, n):
    bi_count = {}
    for i in range(len(strOnly)):
        bi = strOnly[i]
        if (bi not in bi_count.keys()):
            count = strOnly.count(bi)
            bi_count[bi] = count
    bi_count = getOnlyNPair(bi_count, n)
    return bi_count

def divideIntoPair(strOnly):
    bi = []
    for i in range(0, len(strOnly)-1, 2):
        bi.append(strOnly[i:i+2])
    return bi

def replace(strOnly):
    for i in range(len(strOnly)-1):
        
        i += 1
    return strOnly

def getOnlyNPair(dic, n):
    mape = dict(sorted(dic.items(), key=lambda item: item[1], reverse=True))
    mape = {k: mape[k] for k in list(mape.keys())[:min(len(mape),n)]}
    return mape

def replacePair(strOnly):
    for i in range(len(strOnly)):
        if (strOnly[i] == 'BL'):
            strOnly[i] = 'th'
        elif (strOnly[i] =='LB'):
            strOnly[i] = 'ht'
        elif (strOnly[i] == 'SH'):
            strOnly[i] = 'he'
        elif (strOnly[i] == 'HS'):
            strOnly[i] = 'eh'
        elif (strOnly[i] =='KB'):
            strOnly[i] = 'er'
        elif (strOnly[i] == 'BK'):
            strOnly[i] = 're'   
        elif (strOnly[i] =='CZ'):
            strOnly[i] = 'ew'
        elif (strOnly[i] == 'ZC'):
            strOnly[i] = 'we'
        elif (strOnly[i] =='MW'):
            strOnly[i] = 'ov'
        elif (strOnly[i] == 'WM'):
            strOnly[i] = 'vo'
        elif (strOnly[i] =='BU'):
            strOnly[i] = 'nt'
        elif (strOnly[i] == 'UB'):
            strOnly[i] = 'tn'
        elif (strOnly[i] =='OP'):
            strOnly[i] = 'mo'
        elif (strOnly[i] == 'PO'):
            strOnly[i] = 'om'
        elif (strOnly[i] =='FT'):
            strOnly[i] = 'an'
        elif (strOnly[i] == 'TF'):
            strOnly[i] = 'na'
        elif (strOnly[i] =='FB'):
            strOnly[i] = 'en'
        elif (strOnly[i] == 'BF'):
            strOnly[i] = 'ne'
        elif (strOnly[i] =='MO'):
            strOnly[i] = 'sm'
        elif (strOnly[i] == 'OM'):
            strOnly[i] = 'ms'
        elif (strOnly[i] =='WU'):
            strOnly[i] = 'ow'
        elif (strOnly[i] == 'UW'):
            strOnly[i] = 'wo'
        elif (strOnly[i] =='AC'):
            strOnly[i] = 'ea'
        elif (strOnly[i] == 'CA'):
            strOnly[i] = 'ae'
        elif (strOnly[i] =='LV'):
            strOnly[i] = 'am'
        elif (strOnly[i] == 'VL'):
            strOnly[i] = 'ma'
        elif (strOnly[i] =='MA'):
            strOnly[i] = 'lt'
        elif (strOnly[i] == 'AM'):
            strOnly[i] = 'tl'
        elif (strOnly[i] =='MU'):
            strOnly[i] = 'ot'
        elif (strOnly[i] == 'UM'):
            strOnly[i] = 'to'
        elif (strOnly[i] =='HZ'):
            strOnly[i] = 'es'
        elif (strOnly[i] == 'ZH'):
            strOnly[i] = 'se'
        elif (strOnly[i] =='CS'):
            strOnly[i] = 'eo'
        elif (strOnly[i] == 'SC'):
            strOnly[i] = 'oe'
        elif (strOnly[i] =='LA'):
            strOnly[i] = 'at'
        elif (strOnly[i] == 'Al'):
            strOnly[i] = 'ta'
        
    return strOnly

def combinePair(strOnly):
    strOnly = ' '.join(strOnly)
    return strOnly

if __name__ == '__main__':
    os.system('cls' if os.name == 'nt' else 'clear')
    alphabet = list(string.ascii_uppercase)
    f1 = open('pesan3.txt', 'r')
    p = f1.read()
    f1.close()
    ans = divideIntoPair(p)
    bi_count = countBigramOnStr(ans, 20)
    combined = replacePair(ans)
    combined = combinePair(combined)
    f2 = open('phasil3.txt','w')
    f2.write(combined)
    f2.close()
    print(bi_count)
    # print(ans)