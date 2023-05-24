while True:
    num=int(input("Ingrese un numero positivo\n>"))
    if num>0:
        break
if num%2==0:
    par="par"
else:
    par="inpar"
n=2
if n>=num:
    pri="Es primo"
elif num%n!=0:
    pri="Es primo"
else:
    pri="No es primo"
if num<50:
    c="Es menor a 50"
else:
    c="Es mayor a 50"
print(f"El numero {num} es {par}, {pri} y {c}")