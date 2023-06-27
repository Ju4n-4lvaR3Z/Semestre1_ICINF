cadena1 ="hola, simi,io,"
cadena2 ="que haces simiio"

result= cadena1.upper() #convierte todo en mayuscula
result= cadena1.lower() # convierte a minuscula
result= cadena1.capitalize() # convierte la primera letra en mayuscula
result= cadena2.find("que") # busca un valor que le pidamos y devuelve la posicion del elemento
# si no lo encuentra devuelve un -1
result= cadena1.index("5") #busca un valor que le pidamos y devuelve la posicion del elemento

# si no lo encuentra lanza error o ecepcion

cade3="holapepe"
# si es numerico el valor devolvera true sino false
result = cadena1.isnumeric()
# si es alfanumerico(tiene valores de la  A la Z OJO SIN ESPACIOS Y CARACTERES ESPECIALES) devuelve true sino false
result = cade3.isalpha()

# cuantas veces se repite un valor 
result= cadena1.count("a")

# verificamos si una cadena empieza con otra cadena dada si es asi es true sino false
reult = cadena1.startswith("Hola")
# verificamos si una cadena termina con otra cadena dada si es asi es true sino false
reult = cadena1.endswith("miio")
# remplza un pedazo de la cadena dada por otra que le demos s
# si el valor que le damos se encuentra en la variable sera remplazado por la cadena dada despues de la coma sino quedara igual.
newcadena=cadena1.replace("hola","holi benja")
#separar cadenas con la cadena que le pasemos
result=cadena1.split(",") # crea una lista en el que separa todo lo que le pasamoss separados
print(result)


#METODOS DE LISTAS

lista = ["hola","pepe",1,2,3,4]
r= len (lista)
print (r) #devuelve la cantidad de elementos que ahi en una lista

#agregar con append
lista.append("jajajaj")
#agregar con insert es agregar en una posicion especifica
lista.insert(2,"hola")
#agregar con extend agrega varios elementos
lista.extend([False,"hello"])#se agrega igual que una lista 

#eliminando un valor de una lista por su indice
lista.pop(0) #-1 para eliminar el ultimo,-2 para eliminar el penultimo y asi sucesivamente

# se elimina un elemento por su valor 
lista.remove("hola")
#clear elimina todo = lista.clear()

#ordena de mayor a menor solo con numeros o booleanos
lista.sort()
lista.sort(remove=True) #invierte todo ordena al reves

#min devuelve valor menor 
#max devuelve el valor mayor son funciones
min(lista)
max(lista)
print (lista)