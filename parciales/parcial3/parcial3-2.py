from os import system

def IngresoNotas(name):
    list=[]
    print(f"\nNotas de {name}")
    for i in range(0,3):
        while True:
            try:
                nota=float(input(f"\nNota {i+1}° Lab= "))
                if nota>0.9 and nota<7.1:
                    list.append(nota)
                    break
                else:
                    print("\nerror coloque una nota valida ej:(4.5)")
            except:
                print("\nerror coloque una nota valida ej:(4.5)")
    return list

def prom(list):
    sumt=0.
    for i in range(0,len(list)):
        sumt=sumt+list[i]
    prom=sumt/len(list)
    return prom

def notabaja(list):
    notab=7
    for i in range(0,len(list)):
        if list[i]<notab:
            notab=list[i]
    return notab

def notaalta(list):
    notab=0
    for i in range(0,len(list)):
        if list[i]>notab:
            notab=list[i]
    return notab

def promfinal(list,list1):
    sumt1=0.
    for i in range(0,len(list)):
        sumt1=sumt1+list[i]
    prom1=sumt1/len(list)    
    sumt2=0.
    for i in range(0,len(list)):
        sumt2=sumt2+list[i]
    prom2=sumt2/len(list)
    prom=(prom1+prom2)/2
    return prom


system("cls")
asignatura1=input("Ingrese el 1° nombre de su asignatura\n\n > ")
asignatura2=input("\nIngrese el 2° nombre de su asignatura\n\n > ")
notas_asignatura1=IngresoNotas(asignatura1)
notas_asignatura2=IngresoNotas(asignatura2)
# A
print(f"\nEl promedio de cada signatura\n\n {(asignatura1)} es:\n   {prom(notas_asignatura1):.1f}\n {asignatura2} es:\n   {prom(notas_asignatura2):.1f}")
# B
print(f"\nLa nota baja de cada signatura\n\n {(asignatura1)} es: \n   {notabaja(notas_asignatura1):.1f}\n {asignatura2} es: \n   {notabaja(notas_asignatura2):.1f}")
# C
print(f"\nLa nota alta de cada signatura\n\n {(asignatura1)} es: \n   {notaalta(notas_asignatura1):.1f}\n {asignatura2} es: \n   {notaalta(notas_asignatura2):.1f}")
# D
print(f"\nEl promedio final es\n\n {promfinal(notas_asignatura1,notas_asignatura2):.1f}")