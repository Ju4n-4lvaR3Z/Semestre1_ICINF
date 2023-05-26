from os import system
system("cls")
n1=500
n2=456
S=list()
while n1<801:
    S1=[n1,n2]
    S=S+S1
    n1=n1+10
    n2=n2-2
S.pop(len(S)-1)
print(S)
print(type(S))
print(sum(S))