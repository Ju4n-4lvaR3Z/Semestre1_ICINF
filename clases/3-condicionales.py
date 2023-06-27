#CONDICIONALES

licensia = True
edad=19
if licensia == True:
    print ("si puede conducir") # cuando ahi un valor booleano no se puede comparar entonces esto esta mal
else:
    print ("no tiene licencia no puede conducir")

if licensia:
    print ("puede conducir")  # esta seria la forma correcta ya que licensia al ser valor true ya automaticamente la condicion del if es verdadera
else:
    print ("no puede conducir")
    
if edad >=18 :
    print("usted es mayor de edad por lo que si puede conducir") 
else :
    print("usted no es mayor de edad, no puede conducir") 

