import sqlite3 as db

database = "final.db"
count = []

gdp = open("gdp.txt", "w")
co2 = open("co2.txt", "w")
pop = open("pop.txt", "w")
lifeex = open("lifeex.txt", "w")
gdpToLifeex = open("gdpToLifeex.txt", "w")
co2ToLifeex = open("co2ToLifeex.txt", "w")
gdpToPop = open("gdpToPop.txt","w")




try:
    conn = db.connect(database)
    curs = conn.cursor()
    fetch = "SELECT Country From count;"
    curs.execute(fetch)
    rows = curs.fetchall()

except:
    print("ERROR")


for i in rows:
    count.append(i[0])

# gdp
for i in range(len(count)):
    
    rows = []
    fetch = "SELECT gdp FROM rela Where Country = ?;"
    curs.execute(fetch, (count[i],))
    rows = curs.fetchall()
    
    buff = count[i] + "," + rows[0][0]
    for p in rows[1:]:
        buff += "," + p[0]
    gdp.write(buff + ",")
# pop
for i in range(len(count)):

    rows = []
    fetch = "SELECT Count FROM rela Where Country = ?;"
    curs.execute(fetch, (count[i],))
    rows = curs.fetchall()
    
    buff = count[i] + "," + rows[0][0]
    for p in rows[1:]:
        buff += "," + p[0]
    pop.write(buff + ",")



# lifeex
for i in range(len(count)):

    rows = []
    fetch = "SELECT lifeex FROM rela Where Country = ?;"
    curs.execute(fetch, (count[i],))
    rows = curs.fetchall()
    
    buff = count[i] + "," + rows[0][0]
    for p in rows[1:]:
        buff += "," + p[0]
    lifeex.write(buff + ",")



# co2
for i in range(len(count)):

    rows = []
    fetch = "SELECT emission FROM rela Where Country = ?;"
    curs.execute(fetch, (count[i],))
    rows = curs.fetchall()
    
    buff = count[i] + "," + rows[0][0]
    for p in rows[1:]:
        buff += "," + p[0]
    co2.write(buff + ",")


#bip/pop zu lifeex
for i in range(len(count)):
    
    rows = []
    buff = ""
    fetch = "SELECT gdp, count FROM rela Where Country = ?;"
    curs.execute(fetch, (count[i],))
    rows = curs.fetchall()
    
    buff = count[i] + "," + str(float(rows[0][0]) / (float(rows[0][1] * 100000)))
    for p in rows[1:]:
        buff += "," + str(float(p[0]) / (float(p[1]) * 100000))
    gdpToLifeex.write(buff + ",")


#bip zu pop
for i in range(len(count)):

    rows = []
    fetch = "SELECT gdp FROM rela Where Country = ?;"
    curs.execute(fetch, (count[i],))
    rows = curs.fetchall()
    
    buff = ""
    buff = count[i] + "," + str(float(rows[0][0])/(1000000))
    for p in rows[1:]:
        buff += "," + str(float(p[0]) / (1000000))
    gdpToPop.write(buff + ",")

#co2 zu lifeex

#test1 = open("test1", "w")
for i in range(len(count)):

 #   buff2 = ""
  #  buff3 = ""
    rows = []
    buff = ""
    fetch = "SELECT emission FROM rela Where Country = ?;"
    curs.execute(fetch, (count[i],))
    rows = curs.fetchall()
    
   # buff2 = str(float(rows[0][0]) / (10**6))
    buff = count[i] + "," + str(float(rows[0][0]) / (10**6))
    for p in rows[1:]:
        buff += "," + str(float(p[0]) / (10**6) ) 
       # buff2 += "," + str(float(p[0])/ (10**6))
    co2ToLifeex.write(buff + ",")
    #test1.write(buff2 + "\n")
    #test1.write(buff3 + "\n \n")









