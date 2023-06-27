
a= 1
b= 2

op= a+b
op= a-b
op= a*b
op= a/b
op= a%b #modulo( si se requiere los numero pares) division exacta
op= a//b #cociente entre una division
op= a**b #elevar a un numero 
op= a>b # mayor que 
op= a<b # menor que 
op= a<b and a<b # (y) si las dos son verdaderas
op= a<b or a<b # (o) si alguna es verdadera 
#not op= a<b not a<b # (no) trasnfomar a falso uo invierte el valor 


op = print ("gato">"leopardo") # compara con codigo ASCII que le da como un valor a cada letra
tiempo=5.39
gravedad=9.81

velocidad = gravedad*tiempo
#velocidad=round(velocidad,2) REDONDEAR UN NUMERO CON ROUND 

print (f" la velocidad es igual a {velocidad:.2f}")

# PARA TRANSFORMAR UN NUMERO SE USA= INT (ENTERO), FLOAT (FLOTANTE), COMPLEX(COMPLEJO)

c2 = complex(3,-2)
print(f"el numero complejo es {c2}")
print (c2.real)#3
print (c2.imag) #-2


#Operadores ternarios

edad = 19

print ("usted puede votar " if edad >=18 else "usted no puede votar")
