#1-Declarar la primera funcion

def mi_primera():
    print("Esta es mi primera funcion")

mi_primera()
#2-Declarar un  funcion y utilizar listas
def concadenar(lista1,lista2):
    return lista1+lista2
lista1=[1,2,3]
lista2=[4,5,6]

print(concadenar(lista1,lista2))

#3-Funcion multiplicacion
def miltiplicacion(num1,num2):
    return num1*num2

print(miltiplicacion(2,10))
#4-Ejemplo 
def suma(a,b):
    return a+b
def resta(a,b):
    return a-b
a=int(input("1° numero"))
b=int(input("2° numero"))
resultado=suma(a,b)
print("la suma es de:",resultado)
resultado2=resta(a,b)
print("la resta es de:",resultado2)