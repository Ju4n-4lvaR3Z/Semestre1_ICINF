# CLEAR para borrar todo en cmd

#00 Hola primer coment


""" Comentario 
MULTILINEA"""

#01 identificador de variable= (nombre). Declarando variable

nombre= "pepe"
name ="pepito"



#02 Impresion de una variable
print (name) 
print("hola yo soy", nombre)
print (f"hola yo soy {nombre}")

print ("""
--- """)

#03 Declarando variable de tipo numerico (estos datos son todos sin comillas)
edad = 18

#04 Impresion 2 variables en una linea 
print ("hola mi nombre es",nombre, "y mi edad es",edad)
print ("hola mi nombre es" + " " + nombre + " " + "y mi edad es" + " "+str(edad))
print (f"hola mi nombre es {nombre} y mi edad es {edad}")

print ("""
--- """)

#05 Actualizando variable (nombre)
nombre = "reik"
print("mi nuevo nombre es ", nombre)
print (f"mi nuevo nombre es {nombre}")

#06 Variables en una sola linea. (se puede hacer pero no es recomendable)
ciudad,region,pais,year="Osorno","Los lagos","Chile",2005
print (f"hola mi cuidad es {ciudad} region es {region} pais es {pais} año es {year}")

print ("""
--- """)

#07 INPUT
name1= input ("ingrese su nombre: ")

print (f"Bienvenido {name1}")

edad= input ("Y cuantos años tiene: ")

print (f"{edad} año {name1} eso esta muy bien!")
