Algoritmo sin_titulo
	entradav=5000
	Escribir "Cuantas entradas compra"
	Leer entrar
	c=0
	Repetir
		c=c+1
		d=""
		Escribir "-----------------"
		Escribir "Ingrese la edad de la ",c,"° entrada"
		leer edad
		entrada=entradav
		si edad<12 Entonces
			entrada=entradav*0.7
			n=n+1
			d=" $"+ConvertirATexto(entradav)+" menos descuento del 30%"
		FinSi
		si edad>12 Entonces
			nor=nor+1
			si edad>65 Entonces
				entrada=entradav*0.8
				nor=nor-1
				m=m+1
				d=" $"+ConvertirATexto(entradav)+" menos descuento del 20%"
			FinSi
		FinSi
		Escribir "valor ",c,"° entrada",d," es: $",entrada
		total=total+entrada
	Hasta Que c=entrar 
	si entrar>=2 Entonces
		totald=total*0.9
		dt= " $"+ConvertirATexto(total)+" menos descunto del 10%"
	SiNo
		totald=total
	FinSi
	Escribir "-----------------"
	Escribir "Adultos: ",nor," Niños: ",n," Adultos M.: ",m
	Escribir "valor de las entradas",dt," es: $",totald
	
FinAlgoritmo
