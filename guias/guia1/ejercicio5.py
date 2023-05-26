from os import system
import random
ran=list()
bus=list()
for i in range(20):
    ran.append(random.randint(40,350))
    bus.append(f"{0}//{ran[i]}")
    system("cls")
while True:
    print(ran)
    b=int(input("Ingrese el numero a buscar\n>"))
    system("cls")
    if b in ran:
        o=bus[ran.index(b)]
        o=o.split("//")
        bus.pop(ran.index(b))
        bus.insert(ran.index(b),f"{int(o[0])+1}//{b}")
        print(bus)
    else:
        print("No esta")
    