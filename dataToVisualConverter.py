import eel

eel.init('web')

gdpFile = 'gdp.txt'
popFile = "pop.txt"
lifeExpFile = "lifeex.txt"
co2File = "co2.txt"

combGdpLifeFile = "gdpToLifeex.txt"
combCo2LifeFile = "co2ToLifeex.txt"
combGdpPopFile = "gdpToPop.txt"

@eel.expose
def returnGDP ():
    gdpData = open(gdpFile, "r")
    splittedGDP = gdpData.read().split(',')
    
    array1 = splittedGDP[1:17]
    array2 = splittedGDP[18:34]
    array3 = splittedGDP[35:51]
    array4 = splittedGDP[52:68]
    array5 = splittedGDP[69:85]
    array6 = splittedGDP[86:102]
    array7 = splittedGDP[103:119]
    array8 = splittedGDP[120:136]
    array9 = splittedGDP[137:153]
    array10 = splittedGDP[154:170]
    array11 = splittedGDP[171:187]
    array12 = splittedGDP[188:204]

    arrayFinal = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12]

    return arrayFinal

@eel.expose
def returnPop():
    popData = open(popFile, "r")
    splittedPop = popData.read().split(',')
    
    array1 = splittedPop[1:17]
    array2 = splittedPop[18:34]
    array3 = splittedPop[35:51]
    array4 = splittedPop[52:68]
    array5 = splittedPop[69:85]
    array6 = splittedPop[86:102]
    array7 = splittedPop[103:119]
    array8 = splittedPop[120:136]
    array9 = splittedPop[137:153]
    array10 = splittedPop[154:170]
    array11 = splittedPop[171:187]
    array12 = splittedPop[188:204]

    arrayFinal = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12]

    return arrayFinal

@eel.expose
def returnLifeex():
    lifeExpData = open(lifeExpFile, "r")
    splittedLifeExp = lifeExpData.read().split(',')
    
    array1 = splittedLifeExp[1:17]
    array2 = splittedLifeExp[18:34]
    array3 = splittedLifeExp[35:51]
    array4 = splittedLifeExp[52:68]
    array5 = splittedLifeExp[69:85]
    array6 = splittedLifeExp[86:102]
    array7 = splittedLifeExp[103:119]
    array8 = splittedLifeExp[120:136]
    array9 = splittedLifeExp[137:153]
    array10 = splittedLifeExp[154:170]
    array11 = splittedLifeExp[171:187]
    array12 = splittedLifeExp[188:204]

    arrayFinal = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12]

    return arrayFinal

@eel.expose
def returnCo2():
    co2Data = open(co2File, "r")
    splittedCo2 = co2Data.read().split(',')
    
    array1 = splittedCo2[1:17]
    array2 = splittedCo2[18:34]
    array3 = splittedCo2[35:51]
    array4 = splittedCo2[52:68]
    array5 = splittedCo2[69:85]
    array6 = splittedCo2[86:102]
    array7 = splittedCo2[103:119]
    array8 = splittedCo2[120:136]
    array9 = splittedCo2[137:153]
    array10 = splittedCo2[154:170]
    array11 = splittedCo2[171:187]
    array12 = splittedCo2[188:204]

    arrayFinal = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12]

    return arrayFinal

@eel.expose
def returnGdpToLifeex():
    GDPToLifeexData = open(combGdpLifeFile, "r")
    splittedGDPToLifeex = GDPToLifeexData.read().split(',')
    
    array1 = splittedGDPToLifeex[1:17]
    array2 = splittedGDPToLifeex[18:34]
    array3 = splittedGDPToLifeex[35:51]
    array4 = splittedGDPToLifeex[52:68]
    array5 = splittedGDPToLifeex[69:85]
    array6 = splittedGDPToLifeex[86:102]
    array7 = splittedGDPToLifeex[103:119]
    array8 = splittedGDPToLifeex[120:136]
    array9 = splittedGDPToLifeex[137:153]
    array10 = splittedGDPToLifeex[154:170]
    array11 = splittedGDPToLifeex[171:187]
    array12 = splittedGDPToLifeex[188:204]

    arrayFinal = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12]

    return arrayFinal

@eel.expose
def returnCo2ToLifeex():
    co2ToLifeexData = open(combCo2LifeFile, "r")
    splittedCo2ToLifeex = co2ToLifeexData.read().split(',')
    
    array1 = splittedCo2ToLifeex[1:17]
    array2 = splittedCo2ToLifeex[18:34]
    array3 = splittedCo2ToLifeex[35:51]
    array4 = splittedCo2ToLifeex[52:68]
    array5 = splittedCo2ToLifeex[69:85]
    array6 = splittedCo2ToLifeex[86:102]
    array7 = splittedCo2ToLifeex[103:119]
    array8 = splittedCo2ToLifeex[120:136]
    array9 = splittedCo2ToLifeex[137:153]
    array10 = splittedCo2ToLifeex[154:170]
    array11 = splittedCo2ToLifeex[171:187]
    array12 = splittedCo2ToLifeex[188:204]

    arrayFinal = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12]

    return arrayFinal

@eel.expose
def GDPToPop():
    GDPToPopData = open(combGdpPopFile, "r")
    splittedGDPToPop = GDPToPopData.read().split(',')
    
    array1 = splittedGDPToPop[1:17]
    array2 = splittedGDPToPop[18:34]
    array3 = splittedGDPToPop[35:51]
    array4 = splittedGDPToPop[52:68]
    array5 = splittedGDPToPop[69:85]
    array6 = splittedGDPToPop[86:102]
    array7 = splittedGDPToPop[103:119]
    array8 = splittedGDPToPop[120:136]
    array9 = splittedGDPToPop[137:153]
    array10 = splittedGDPToPop[154:170]
    array11 = splittedGDPToPop[171:187]
    array12 = splittedGDPToPop[188:204]

    arrayFinal = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12]

    return arrayFinal

eel.start('index.html')
