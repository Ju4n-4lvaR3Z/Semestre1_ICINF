def numList():
    list=[]
    while True:
        cant=input("indique la cantidad de numeros a ingresar\n>")
        try:
            for i in range(0,int(cant)):          
                num=input(f"Ingrese un numero o 'x' para salir\n>")
                try:
                    num=int(num)
                    list.append(num)
                except:
                    if num=="X" or num=="x":
                        break
                    print("\n!!Ingrese un numero entero¡¡\n")
            break
        except:
                    print("\n!!Ingrese un numero entero¡¡\n")
    return list
def parInpar(list,p):
    listpar=[]
    listinpar=[]
    for i in range (0,len(list)):
        if list[i]%2==0:
              listpar.append(list[i])
        else:
              listinpar.append(list[i])
    if p=="par":
         return listpar
    elif p=="inpar":
         return listinpar
def mostrar(list,listpar,listinpar):
    print(f"Numeros ingresados ({len(list)}) >{list}< su suma es {sum(list)}\nNumeros pares ({len(listpar)}) >{listpar}< su suma es {sum(listpar)}\nNumeros inpares ({len(listinpar)}) >{listinpar}< su suma es {sum(listinpar)}")
     
numlist=numList()
mostrar(numlist,parInpar(numlist,"par"),parInpar(numlist,"inpar"))
    