Algoritmo sin_titulo
	definir op1,ex Como caracter
	definir v,gb,r Como Real
	op1=""
	Mientras op1="" Hacer
		Escribir "Ingrese el servidor de amazon web deseado"
		Escribir "1=Norteam�rica 2=Centroam�rica 3=Sudam�rica"
		Escribir "       4=Europa 5=Asia/Ocean�a"
		leer op1
		Segun op1 Hacer
			"1":
				Escribir "Norteam�rica"
				op1="Norteam�rica"
				v=0.02
			"2":
				Escribir "Centroam�rica"
				op1="Centroam�rica"
				v=0.03
			"3":
				Escribir "Sudam�rica"
				op1="Sudam�rica"
				v=0.05
			"4":
				Escribir "Europa"
				op1="Europa"
				v=0.07
			"5":
				Escribir "Asia/Ocean�a"
				op1="Asia/Ocean�a"
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
