Algoritmo sin_titulo
	definir op1,ex Como caracter
	definir v,gb,r Como Real
	op1=""
	Mientras op1="" Hacer
		Escribir "Ingrese el servidor de amazon web deseado"
		Escribir "1=Norteamérica 2=Centroamérica 3=Sudamérica"
		Escribir "       4=Europa 5=Asia/Oceanía"
		leer op1
		Segun op1 Hacer
			"1":
				Escribir "Norteamérica"
				op1="Norteamérica"
				v=0.02
			"2":
				Escribir "Centroamérica"
				op1="Centroamérica"
				v=0.03
			"3":
				Escribir "Sudamérica"
				op1="Sudamérica"
				v=0.05
			"4":
				Escribir "Europa"
				op1="Europa"
				v=0.07
			"5":
				Escribir "Asia/Oceanía"
				op1="Asia/Oceanía"
				v=0.09
			De Otro Modo:
				Escribir "Opcion no encontrada. intente de nuevo"
				op1=""
				Escribir ""
		Fin Segun
	Fin Mientras
	gb=0
	Mientras gb=0 Hacer
		Escribir "Ingrese cuantos GigaByte quiere almacenar"
		leer gb
		si gb>0 Entonces
			r=gb*v
			si gb>=10000 Entonces
				ex= ConvertirATexto(r)+"USD mas el 20% al exeder 10.000Gb "
				r=r+(r*0.2)
			FinSi
		SiNo
			Escribir "valor invalido, intente de nuevo"
			gb=0
		FinSi
	FinMientras
	Escribir "Usted a escogido el servidor ",op1," para almacenar ",gb,"Gb"
	Escribir "Da un total de ",ex," da ",r,"USD a pagar"
FinAlgoritmo
