Algoritmo sin_titulo
	Definir uar,yo1,yo,op1,p5,p3,c,v1 Como Real
	definir alert Como Caracter
	op1=1
	yo=10000
	p5=yo*0.5
	p3=yo*0.3
	c=yo*0.1
	Mientras op1=1 Hacer
		v1=0
		Escribir "--------------------------------------------"
		Escribir alert
		Escribir "Unidades actuales de Yogurt Maqui en stock : ",yo
		Escribir "¿Cuantas unidades va a entregar?"
		Escribir "(Si quere salir ingrese 0)"
		leer uar
		si uar>0 Entonces
			yo1=yo-uar
			si yo1>0 Entonces
				yo=yo1
			SiNo
				v1=1
			FinSi
		FinSi
		si uar==0 Entonces
			op1=0
		FinSi
		si yo<=p5 Entonces
			alert="-¡Precaución: el stock llego al 50% del total!"
			si yo<=p3 Entonces
				alert="-¡Precaución: el stock llego al 30% del total!"
				si yo<=c Entonces
					alert="-¡Se llegó al stock critico, solo quedan 1000 unidades!"
				FinSi
			FinSi
		FinSi
		si v1=1 Entonces
			alert= alert+"-¡Entrega sobrepasa el stock!"
		FinSi
	FinMientras
FinAlgoritmo