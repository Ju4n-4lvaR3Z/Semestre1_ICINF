from os import system
system("cls")
a=[10,9,12,15,18]
b=[21,8,15,3,12]
print(f"listas:\n {a}\n {b}\n")
A=a+b
print(f"A)\n {A}")
A.insert(1,30)
print(f"B)\n {A}")
A=sorted(A)
print(f"C)\n {A}")
l=[4,5,6]
A=A+l
print(f"D)\n {A}")
x=0
suma=0
while x!=len(A):
    x=x+1
    suma=suma+A[x-1]
print(f"E)\n {suma}")
data=sorted(A)
n=len(A)
i = n // 2
me=(data[i - 1] + data[i]) / 2
print(f"F)\n {me}--{suma/x}")



