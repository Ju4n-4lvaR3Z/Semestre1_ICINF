#01 datos de tipo numerico
edad=16 #entero
estatura=1.62 #real
peso=70.5
complejo= 1+4j#complejo

#02 transformacion de real a entero
print ("--------------Transformaciones----------------")
print (f"Transformando valor real a entero {int(estatura)}")# solo toma la parte antes del punto

#transformando de entero a real
print (f"transformando valor entero a real{float(edad)}")

#03 operacion aritmetica
imc= peso/(estatura**2)
print(f"mi IMC es de: {imc}")
print ("mi IMC es de {:.2f}".format(imc))#sirve para colocar solo 2 decimales o cuantos tu prefieras con el comando.

#04 datos de tipo de cadena de caracteres 
asignatura="programacion"
carrera ="Ingenieria civil en informatica"
print ("-------Tipos datos caracteristicas-----------")
print (f"la asignatura de {asignatura} corresponde a la carrera de {carrera}.")

#05 contar cantidad de caracteres
print ("-----------Contar caracteres--------------")
print (f"la cantidad de caracteres de la palabra {asignatura} es de {len(asignatura)}")
print (f"la cantidad de caracteres de la palabra {carrera} es de {len (carrera)} ")#cuenta los espacios igual
#06 Valores booleanos 
ampolleta =False
interruptor =True
print("-------------valores boooleanos--------------")
print (ampolleta,interruptor)
print (f"la variable ampolleta es de tipo: {type(interruptor)}") #type indica el tipo de dato que estamos usando 

#podemos transformar cualquier valor a booleano 
print (bool(0))
print (bool(""))
print (bool(None))
print (bool(True))
print (bool(1))

#07 datos tipo list 
print ("------------DATOS TIPOS LIST---------------")

#INICIALIZAMOS LISTAS DE 2 MANERAS 
new_list=list() #se separa cada dato con comas
otra_list=[]
print(f"esta es una lista vacia {new_list}")
print(f"esta es otra lista vacia: {otra_list}")
print (type(new_list))

#declarando listas diferentes
estudiantes=["leon","luanko","ysy","duki"]
numeros=[1,1,2,3,4,5]
lenguaje=["python"]

# lista de datos compuestos

data=["osorno",{'UV':'nivel bajo','Temp *C':15},(-40.5725,-73.1353)]
listamixta=["jeison",200,True]

print(F"lista de caracteres: {estudiantes}")
print(f"lista de numeros: {numeros}")
print(f"lista de lenguaje: {lenguaje}")
print(f"lista mixta: {listamixta}")
print(f"esto igual es una lista: {data}")
print(len(listamixta)) # el len aqui cuenta la cantidad de elementos
print (numeros.count(1)) # cuantas veces se repite un elemento

print (estudiantes[0]) # muestra el 1 elemento de una lista
print (estudiantes[1]) # muestra el 2 elemento de una lista

print ("posicion 2 es: ",estudiantes[-1]) # muestra el 2 elemento de una lista

#TUPLA no se puden cambiar # .index dice la posicion del elemneto.
newtupla= tuple()
grupo1= ("Daniel","Cristian","Felipe",200,100,"Daniel")
print(type(grupo1))

print (grupo1[0])

# SETS (conjuntos)- estructura fija
#formas de inicializar con sets 
# DATO= los sets o conjuntos sirven para no mostrar dos veces algo.
conjunto_vacio= set()
conjunto_vacio1={} #diccionario o set
print(type(conjunto_vacio1))
conjunto_colores= set({"azul", "rojo ", "verde",})
conjunto_animales= {"gato","perro", "loro"}

print(type(conjunto_colores))
print(type(conjunto_animales))
print(" el primer set tiene los dinsintos colores que son: ",conjunto_colores)
print(" el primer set tiene los dinsintos animales que son: ",conjunto_animales)
#print (conjunto_colores[0]) esto no se puede hacer PORQUE LOS SETS NO TIENEN ORDEN !!!
conjunto_colores.add("celeste")
print(conjunto_colores)

# LISTAS=[]
# TUPLAS = ()
# SETS = {}


diccionario= dict ()

datos= {
    "nombre": "Victor",
    "Institucion":" Ulagos",
    "Edad": 29,
    "asignatura": {"estructura de datos", "programacion "}
}

print ("diccionario: ",datos)
print(datos["nombre"])