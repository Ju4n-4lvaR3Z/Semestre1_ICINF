Algoritmo sin_titulo
	definir op1 Como caracter
	definir pap_chi,com_ita,beb_500,emp_car,jam_que Como Real
	pap_chi=1500
	com_ita=2000
	beb_500=800
	emp_car=2500
	jam_que=1000
	op1=""
	Mientras op1="" Hacer
		Escribir "Menu de Food Truck"
		Escribir "Por favor digite su menu"
		leer op1
		Segun op1 Hacer
			"1":
				Escribir ""
				Escribir "Papas Chicas           valor: ",pap_chi
				Escribir "IVA                    valor: ",pap_chi*0.19
			"2":
				Escribir ""
				Escribir "Completo Italiano      valor: ",com_ita
				Escribir "IVA                    valor: ",com_ita*0.19
			"3":
				Escribir ""
				Escribir "Vaso Bebida 500ml      valor: ",beb_500
				Escribir "IVA                    valor: ",beb_500*0.19
			"4":
				Escribir ""
				Escribir "Empanada de Carne      valor: ",emp_car
				Escribir "IVA                    valor: ",emp_car*0.19
			"5":
				Escribir ""
				Escribir "Sandwich Jamon y Queso valor: ",jam_que
				Escribir "IVA                    valor: ",jam_que*0.19
			De Otro Modo:
				op1=""
				Escribir ""
				escribir "---Ingrese Una Opcion Valida---"
				Escribir ""
		Fin Segun
	Fin Mientras
FinAlgoritmo
