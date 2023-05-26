txt="La Universidad de los Lagos es una institucion estatal fundada en 1993. Esta universidad regional entrega una contribucion significativa al desarrollo sostenible del territorio. Como Universidad sus pilares fundamentales se basan en la inclusion, pluralismo, conciencia ambiental y participacion democratica."
txt=txt.lower()
txt=list(txt.split(" "))
count=list()
c=0
for i in range (len(txt)):
    if txt[i]=="universidad":
        count.append(txt[i])
        c=c+1
count=tuple(count)
print(txt,"\n\n",type(count),"\n",count,"\n total de:",len(count))
