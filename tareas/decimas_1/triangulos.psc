Algoritmo sin_titulo
	definir c1,c2,c3,sp,p,a,r Como real
	definir alert Como Caracter
	leer c1
	leer c2
	leer c3
	p=c1+c2+c3
	sp=p/2
	r=sp*(sp-c1)*(sp-c2)*(sp-c3)
	si r<0 Entonces
		r=r*(-1)
		a=raiz(r)
		alert=" imaginaria"
		a=a*(-1)
	SiNo
		a=raiz(r)
	FinSi
	ar=ConvertirATexto(a)
	area=(ConvertirANumero(Subcadena(ar,0,4)))
	si c1==c2 y c2<>c3 o c2==c3 y c1<>c3 o c3==c1 y c2<>c1 Entonces
		Escribir "Su tirangulo es isoseles con perimetro de: ",p,"m, y su area",alert," es: ",area,"m²"
	FinSi
	si c1==c2 y c2==c3 Entonces
		Escribir "Su tirangulo equilatero con perimetro de: ",p,"m, y su area",alert," es: ",area,"m²"
	FinSi
	si c1<>c2 y c2<>c3 y c3<>c1 Entonces
		Escribir "Su tirangulo es escaleno con perimetro de: ",p,"m, y su area",alert," es: ",area,"m²"
	FinSi
FinAlgoritmo