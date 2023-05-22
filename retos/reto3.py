from os import system
system("cls")
ciudades=["Santiago","Temuco","Osorno","Punta Arenas"]
Indice=[134,99,245,50]
print(" ".ljust(70, "_"))
print("|  Ciudad".ljust(15),"|  Indice  |  Calidad  ".ljust(53),"|")
x=0
maxt=0
mint=0
while x!=len(ciudades):
    x=x+1
    IndiceO=sorted(Indice, reverse=True)
    t=Indice[Indice.index(IndiceO[x-1])]
    c="Peligrosa"if t>300 else "Muy dañina a la salud" if t>=201 else "Dañina a la salud" if t>=151 else "Dañina a la salud para gurpos sensibles" if t>=101 else "Moderada" if t>=51 else "Buena"
    maxt=c if x-1==0 else maxt
    mint=c if x==len(ciudades) else mint
    print(f"|  {ciudades[Indice.index(IndiceO[x-1])]}".ljust(15),f"|    {t} ".ljust(10),f"|  {c}".ljust(42),"|")
print(" ".ljust(70, "¯"))
print(" ".ljust(70, "_"))
print("|".ljust(7),"|  Ciudad".ljust(15),"|  Indice  |  Calidad  ".ljust(45),"|")
print(f"|  Max  |  {ciudades[Indice.index(max(Indice))]}".ljust(23),f"|    {max(Indice)} ".ljust(10),f"|  {maxt}".ljust(34),"|")
print(f"|  Min  |  {ciudades[Indice.index(min(Indice))]}".ljust(23),f"|    {min(Indice)} ".ljust(10),f"|  {mint}".ljust(34),"|")
print(" ".ljust(70, "¯"))