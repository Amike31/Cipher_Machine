import string
import os
import math
import monoalphabetic as monal

def findRepeatedSequences(message):
    seqSpacings = {} 
    for seqLen in range(5, 11):
        for seqStart in range(len(message) - seqLen + 1):
            seq = message[seqStart:seqStart + seqLen]

            for i in range(seqStart + seqLen, len(message) - seqLen + 1):
                if message[i:i + seqLen] == seq:
                    if seq not in seqSpacings:
                        seqSpacings[seq] = [] 
                    seqSpacings[seq].append(i - seqStart)
    return seqSpacings

def getUsefulFactors(num):
    if num < 2:
        return [] 

    factors = []

    for i in range(2, int(math.sqrt(num)) + 1): 
        if num % i == 0:
            factors.append(i)
            factors.append(int(num / i))
    return list(set(factors))

def getItemAtIndexOne(x):
    return x[1]

def getMostCommonFactors(seqFactors):
    factorCounts = {}

    for seq in seqFactors:
        factorList = seqFactors[seq]
        for factor in factorList:
            if factor not in factorCounts:
                factorCounts[factor] = 0
            factorCounts[factor] += 1

    factorsByCount = []
    for factor in factorCounts:
        factorsByCount.append( (factor, factorCounts[factor]) )

    factorsByCount.sort(key=getItemAtIndexOne, reverse=True)
    return factorsByCount


def kasiskiExamination(ciphertext):
    repeatedSeqSpacings = findRepeatedSequences(ciphertext)
    print(repeatedSeqSpacings)
    
    seqFactors = {}
    for seq in repeatedSeqSpacings:
        seqFactors[seq] = []
        for spacing in repeatedSeqSpacings[seq]:
            factors = getUsefulFactors(spacing)
            for factor in factors:
                if (factor not in seqFactors[seq]):
                    seqFactors[seq].append(factor)
            # seqFactors[seq].extend(getUsefulFactors(spacing))

    factorsByCount = getMostCommonFactors(seqFactors)

    allLikelyKeyLengths = []
    for twoIntTuple in factorsByCount:
        if (twoIntTuple[1] == len(repeatedSeqSpacings)):
            allLikelyKeyLengths.append(twoIntTuple[0])
    allLikelyKeyLengths.sort(reverse=True)
    return allLikelyKeyLengths

def groupingMessage(ciphertext, key):
    text = ['' for _ in range(key)]
    for i in range(key):
        for j in range(i, len(ciphertext), key):
            text[i] += ciphertext[j]
        print(text[i])
    return text

if __name__ == '__main__':
    os.system('cls' if os.name == 'nt' else 'clear')
    alphabet = list(string.ascii_uppercase)
    f1 = open('pesan2.txt', 'r')
    p = f1.read()
    f1.close()
    key = kasiskiExamination(p)
    print(key[0])
    gm = groupingMessage(p, key[0])
    for i in range(key[0]):
        freq = monal.countCharOnStr(gm[i], key[0])
        print(freq)