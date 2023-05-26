from os import system
pagos=dict()
def pago(list):
    r=[]
    pt=0
    Td=12000
    Tn=16000
    Dd=2000
    Dn=3000
    sem=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
    for i in range(len(list)):
        p=0
        dia=list[i]
        dia=dia.split()
        if dia[1]=="D":
            p=12000
            if dia[0] not in sem:
                p=p+2000
        else:
            p=16000
            if dia[0] not in sem:
                p=p+3000
        pt=pt+p
        r=r+[dia[0]+" "+dia[1]+" "+str(p)]
    r=r+[pt]
    return r

empleado1=["Lunes N","Martes N","Miercoles N","Jueves D","Viernes D"]
empleado2=["Martes N","Miercoles N","Jueves N","Domingo D"]
empleado3=["Miercoles D","Jueves D","Viernes D","Sabado N","Domingo N"]

system("cls")
pagos.update(Empleado1=pago(empleado1))
pagos.update(Empleado2=pago(empleado2))
pagos.update(Empleado3=pago(empleado3))
print(pagos)
print(type(pagos))
        