Algoritmo mayor_de_3
	definir n1,n2,n3,nm Como Entero
	leer n1
	leer n2
	leer n3
	si n1<n2 Entonces
		si n2<n3 Entonces
			Escribir n3," es mayor"
			nm=n3
			n3=0
		SiNo
			Escribir n2," es mayor"
			nm=n2
			n2=0
		FinSi
	SiNo
		si n1<n3 Entonces
			Escribir n3," es mayor"
			nm=n3
			n3=0
		SiNo
			Escribir n1," es mayor"
			nm=n1
			n1=0
		FinSi
	FinSi
	si nm==n2 o nm==n3 o nm==n1 Entonces
		Escribir "Los numeros son iguales"
	FinSi
FinAlgoritmo
