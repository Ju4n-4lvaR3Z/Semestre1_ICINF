def vuelto(vp):
    while True:
        billetera=input("Ingrese con cuanto paga\n>")
        try :
            billetera=int(billetera)
            vp=int(vp)
            r=vp%10
            if r>=5:
                vp=vp+(10-r)
            elif r<=4:
                vp=vp-(r)
            if billetera>=vp:
                r=billetera-vp
                break
            else:
                e=int("s")
        except:
            print("Ingrese un valor aceptable")
    return r
producto=input("Que producto quiere comprar?\n>")
Vproducto=input(f"Ingrese el valor de {producto}\n>")
print("Su vuelto es $",vuelto(Vproducto))
