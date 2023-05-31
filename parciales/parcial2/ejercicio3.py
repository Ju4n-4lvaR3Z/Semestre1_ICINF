set1={100, 250, 300, 1000}
set2={150, 250, 500, 1000}
#A
print("El valor 100:\n","Esta en Set 1\n" if 100 in set1 else "No esta en Set 1\n","Esta en Set 2\n"if 100 in set2 else "No esta en Set 2\n")
#B
print("El valor 500 o 700:\n","Esta 500 en Set 1"if 500 in set1 else "No esta 500 en Set 1",", Esta 700 en Set 1.\n" if 700 in set1 else ", No esta 700 en Set 1.\n","Esta 500 en Set 2"if 500 in set2 else "No esta 500 en Set 2",", Esta 700 e    n Set 2.\n" if 700 in set2 else ", No esta 700 en Set 2.\n")
#C
print("los valores de los set elevados 3:")
for i in range(0,len(set1)):
    a=list(set1)
    print(f" (Set 1) {a[i]} elevado en 3 es: {a[i]**3}")
for i in range(0,len(set2)):
    a=list(set2)
    print(f" (Set 2) {a[i]} elevado en 3 es: {a[i]**3}")
#D
set3=set(list(set1)+ list(set2))
print("\n",set3)