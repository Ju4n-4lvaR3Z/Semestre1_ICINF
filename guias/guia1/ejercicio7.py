def factorial(num):
    if num>=1:
        num=num * factorial(num-1)
    elif num==0:
        num=1
    return num

num=int(input("Ingrese el numero : "))
print(factorial(num))