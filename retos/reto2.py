from os import system
system("cls")
alumno1={}
print("Hola docente, bienvenido, ahora ingrese los datos del alumno\n")
nombre=input("Ingrese el nombre del alumno\n>")
asignatura=input("Ingrese el nombre de la asisgnatura\n>")
nota1=float(input("Ingrese la 1° nota en formato '4.0'\n>"))
nota2=float(input("Ingrese la 2° nota en formato '4.0'\n>"))
alumno1["Nombre"]=nombre
alumno1["Asignatura"]=asignatura
alumno1["Nota1"]=nota1
alumno1["Nota2"]=nota2
print(f"\nDiccionario: {alumno1}")
print(f"""
La informacion del alumno ha sido ingresada

Nombre:      {alumno1['Nombre']}
Asignatura:  {alumno1['Asignatura']}
Nota 1:      {alumno1['Nota1']}
Nota 2:      {alumno1['Nota2']}
Promedio:    {"{:.1f}".format((nota1*0.3)+(nota2*0.7))}
{type(alumno1)}
""")