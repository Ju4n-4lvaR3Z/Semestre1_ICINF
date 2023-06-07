def listnum():
    listnum=[]
    while True:
        num=input("Ingrese un numero o '-1' para salir\n>")
        
        try:
            if num=="-1":
                break
            elif int(num)>0:
                listnum.append(int(num))
        except:
            print("!!Ingrese un numero entero¡¡")
    return listnum
def operaciones(list):
    listpar=[]
    listinpar=[]
    nm=0
    for i in range(0,len(list)):
        if list[i]%2==0:
            listpar.append(list[i])
        else:
            listinpar.append(list[i])
        nm=list[i] if list[i]>nm else nm 
    op1=sum(listpar)
    op2=sum(listinpar)
    op3=sum(list)
    op4=int(f"{sum(list)/len(list):.0f}")
    op5=nm
    op6=list
    return(op1,op2,op3,op4,op5,op6)
listo=operaciones(listnum())
print(f"{listo[5]}\nLa suma suma de pares es: {listo[0]}\nLa suma de inpares es: {listo[1]}\nLa suma total es: {listo[2]}\nEl promedio es: {listo[3]}\nEl numero mayor ingresado es: {listo[4]}",f"\nEl numero es mayor que el promedio y este es: {listo[4]}" if listo[4]>listo[3] else f"\nEl numero es menor que el promedio y este es: {listo[4]}")

