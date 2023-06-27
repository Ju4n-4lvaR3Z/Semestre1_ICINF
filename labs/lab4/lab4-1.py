def promedio(list):
    return f"{sum(list)/len(list):.2f}"
def masalto(list):
    return max(list)
def inpuesto(list):
    return (sum(list)*0.1225)
def operaciones(list):
    for i in range(0,len(list)):
        trabajador=list[i]
        print(f"el promedio de {trabajador[0]} es {sum(trabajador[1])/len(trabajador[1]):.0f}")
    for i in range(0,len(list)):
        trabajador=list[i]
        sueldo=trabajador[1]
        m=0
        for i in range(0,len(sueldo)):
            if sueldo[i]>m:
                m=sueldo[i]
        print(f"el sueldo mas alto de {trabajador[0]} es {m}")
trabajadores=[["Juan",[700000,650000,690000]],["Maria",[691000,710000,5900000]],["Pedro",[590000,635000,705000]]]
trabajador1=trabajadores[0]
trabajador2=trabajadores[1]
trabajador3=trabajadores[2]
# A
print(f"el promedio del trabajador {trabajador1[0]} es {promedio(trabajador1[1])}")
print(f"el promedio del trabajador {trabajador2[0]} es {promedio(trabajador2[1])}")
print(f"el promedio del trabajador {trabajador3[0]} es {promedio(trabajador3[1])}")
# B
print(f"El suledo mas alto de {trabajador1[0]} es {masalto(trabajador1[1])}")
print(f"El suledo mas alto de {trabajador2[0]} es {masalto(trabajador2[1])}")
print(f"El suledo mas alto de {trabajador3[0]} es {masalto(trabajador3[1])}")
# C
print(f"El inpuesto de {trabajador1[0]} es {inpuesto(trabajador1[1])}")
print(f"El inpuesto de {trabajador2[0]} es {inpuesto(trabajador2[1])}")
print(f"El inpuesto de {trabajador3[0]} es {inpuesto(trabajador3[1])}")
# D
operaciones(trabajadores)