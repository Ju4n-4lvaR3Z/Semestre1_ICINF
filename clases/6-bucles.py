# mientras num sea menor o igual a 100 hacer...
n=0
while n <=100:
    print (n)
    n=n+2 #incrementa el (n) de dos en dos 

# OJO IMPORTANTE VER BIEN EL CODIGO ANTES DE ,
# while true:
#   print (n)
#   n+=2
# YA QUE AHI BUCLES INFINITOS QUE PUEDEN HACER QUE EL PROGRAMA SE PEGUE


# SE PUEDE COMBINAR EL WHILE CON EL ELSE PERO NO CON 

while n<=100:
    print (n)
    n=n+2
else:
    print ("f ya llego a 100 el numero, acabo el bucle.")

while n <=200:
    print (n)
    n+=2
else:
    print ("mi condicion es igual o mayor a 200")

while n <=300:
    print (n)
    n+=2
    if n==250:                            # para que funcione un if en un while el if debe de estar dentro del bucle while
        print ("llegaste a 250")          # porque si el if esta afuera del while se ejecutaran por separado
print ("mi condicion es igual o mayor a 300")


# Break
while n <=400:
    print (n)
    n+=2
    if n==350:
        print ("llegamos a 350")
        break # se detiene el while y termina todo break es solo para ciclos
print (n)
print ("Finalizado")

while True:
    parametro= input ("ingrese algo") #Se repite el input hasta que el if sea verdadero

    if parametro == "exit":
        break # al escribir exit el if termina el bucle con break
    else:
        print (parametro)

#CICLO FOR


for i in (1,2,3,4,5,6,7,8,9,10): #recorre todos los numeros / PERO ESTO NO ESTA BIEN HECHO

    print (i) # i es como un incrementador

lista=[1,2,3,4,5,6,7,8,9,10]
for i in lista: #esto si es valido ya que debemos poner nuestra lista en una variable 
    print (i)

for i in range (1,11):  #imprime una lista hasta el rango 1 hasta el 10 si quisiera que fuera desde el cero se puede poner range(11)
    print (i)


animales =["perro", "gato", "leon", "elefante","simio"]

for animal in animales :
    print (animal)

numeros= [1,43,24,41,87]

for nume in numeros: # Recorriendo la lista numero y multiplicando cada valor por 2
    reult = nume *2
    print (f"la multiplicacion de {nume} por 2 es {reult}")

# Para iterar dos(SE PUEDEN MAS DE 2) listas deben tener la misma cantidad de elementos
# ELEMENTO 1 DE LISTA 1 LUEGO ELEMENTO 1 DE LISTA 2 Y ASI SUCESIVAMENTE

for nume,animal in zip(numeros,animales):
    print (f"Recorriendo lista de numeros (lista 1) {nume}")
    print (f"Recorriendo lista de numeros (lista 2) {animal}")

for n in range (2,10): # range funciona con ponerle un numero (desde donde empieza ) y hasta antes del segundo numero
    print (n)     # el primer numero lo cuenta y el segundo no
                  # y si no le ponemos dos numeros y solo uno pues arranca desde el

# Forma incorrecta de recorrer una lista por su indice
for nume in range (len(numeros)):
    print (numeros [nume])
# La forma correcta es 
for nume in enumerate(numeros):
    indice=nume [0]
    valor=nume [1]
    print (f"el indice es: {indice} y el valor es: {valor}")

# Como iterar un diccionario

dic={
    "nombre": "Benjamin",
    "apellido": "Miranda",
    "años": 18,
    "deporte":"Futbol"
}

for key in dic:
    print (key)
