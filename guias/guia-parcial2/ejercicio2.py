def nombres():
    listnombre=[]
    while True:
        nombre=input("Ingrese un nombre o '0' para salir\n>")
        if nombre=="0":
            break
        else:
            listnombre.append(nombre)
    return listnombre

def cantnombre(list):
    cantlist=[]
    for i in range(0,len(list)):
        cantlist.append(len(list[i]))
    return cantlist

def mostrar(nombres,liscant):
    print("los nombres ingresados son")
    for i in range(0,len(nombres)):
        print("Nombre: ",nombres[i].ljust(15)," caracteres: ",liscant[i])
    print("".ljust(30),"Total: ",sum(liscant))
    
listnombres=nombres()
mostrar(listnombres,cantnombre(listnombres))