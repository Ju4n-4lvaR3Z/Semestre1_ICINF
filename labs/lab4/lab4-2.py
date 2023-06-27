# pacientes=[["pedro",1.78],["Constanza",1.56],["Amanda",1.62],["Dario",1.89],["Fernanda",1.67]]

# def estatura_min(pacientes):
#     min=0.0
#     for i in range(0,len(pacientes)):
#         paciente=pacientes[i]
#         if paciente[1]>min:
#             min=paciente[1]
#     return f"{min:.1f}"
# print(estatura_min(pacientes))
# # primera cagamos
# def new_elemento(pacientes):
#     pacientes.append("ricardo")
#     return pacientes
# n_pacientes=new_elemento(pacientes)
# def encontrar (pacientes):
#     encontrado="no"
#     for i in range(0,len(pacientes)):
#         paciente=pacientes[i]
#         if paciente[0]=="Dario":
#             encontrado=f"si {paciente}" 
#     return encontrado
# print(encontrar(pacientes))
a=["rojo","verde","celeste","violeta"]
b=["osorno","puerto montt","puerto varas","valdivia"]

def mas_carac(a):
    mas=0
    for i in range(0,len(a)):
        if len(a[i])>0:
            mas=len(a[i])
            nombre=a[i]
    return nombre
print(mas_carac(a))
def min_carac(b):
    min=100
    for i in range(0,len(b)):
        if len(b[i])<min:
            min=len(b[i])
            ciudad=b[i]
    return ciudad
print(min_carac(b))
def concad(a,b):
    c=a+b
    return c
c=concad(a,b)
print(c)
def mayus(c):
    for i in range(0,len(c)):
        c[i]=c[i].upper
def alfa(c):
    c=sorted(c)
    return c
c=alfa(c)
print(c)
