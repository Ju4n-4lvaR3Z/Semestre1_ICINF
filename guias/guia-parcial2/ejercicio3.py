from datetime import datetime
for i in range(0,int(datetime.today().strftime('%Y'))+1):
    if i%4==0:
        bis="es bisiesto"
    else:
        bis="no es bisiesto"
    print(i,bis)