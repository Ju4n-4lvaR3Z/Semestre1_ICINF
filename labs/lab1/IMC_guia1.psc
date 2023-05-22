Algoritmo sin_titulo
	Escribir "Calucar IMC"
	Escribir "Ingrese su peso"
	leer peso
	Escribir "Ingrese su estatura"
	leer estatura
	IMC=peso/(estatura)^2
	si IMC<18.5 Entonces
		estado="Bajo Peso"
	FinSi
	si IMC>=18.5 Entonces
		estado="Normal"
		si IMC>=25.0 Entonces
			estado="Sobrepeso"
		FinSi
	FinSi
	Escribir "Peso= ",peso,"Kg"
	Escribir "Estatura= ",estatura,"m"
	Escribir "Su estado es: ",estado
FinAlgoritmo
