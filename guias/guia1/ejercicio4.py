ncubos=int(input("Ingrese un valor positivo\n>"))
c=1
n=0
li=[]     
while c<=ncubos:
   n=n+1
   if n%2!=0:
        li.append(n)
        if len(li)==c:
            print(c,"³=",li,"=",sum(li))
            li.clear()
            c=c+1   