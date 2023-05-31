d5=[]
ip=[]
for i in range(2,30,3):
    print(i)
    if i%5==0:
        d5.append(i)
    if i%2!=0:
        ip.append(i)
print("\nLos numeros divisibles por 5 son:",d5,"\nsu suma es:",sum(d5),"\n\nLos numeron inpares son:",ip,"\nsu suma es:",sum(ip))