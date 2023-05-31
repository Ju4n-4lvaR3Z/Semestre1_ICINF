def separar(frase):
    return(dict(frase=frase.split(" ")))
frase=input("Ingrese la frase\n>")
print(separar(frase))