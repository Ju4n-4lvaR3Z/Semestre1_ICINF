from statistics import median
error=""
out=""
mi=0
notas=[]
while True:
    nota=input(f"\n{error}\nIngrese minimo 10 notas ({mi}/10){out}\n>",)
    try:
        if mi>=9:
            out=", ingrese X para salir."
            if nota=="x" or nota=="X":
                break
        nota=float(nota)
        error=""
        if nota<=7.0 and nota>=1.0:
            notas.append(nota)
            mi=mi+1 
        else:
            error=">Ingrese una nota valida<"
    except:
        error=">Ingrese un valor aceptable<"
bajo=[]
igual=[]
alto=[]
for i in range(0,len(notas)):
    if notas[i]>median(notas):
        alto.append(notas[i])
    elif notas[i]<median(notas):
        bajo.append(notas[i])
    elif notas[i]==median(notas):
        igual.append(notas[i])
print(f"Las notas más altas que la media son: {len(alto)}.\nLas notas más bajas que la media son: {len(bajo)}.")