def vuelto(vp):
    while True:
        billetera=input("Ingrese con cuanto paga\n>")
        try :
            billetera=int(billetera)
            vp=int(vp)

            r=billetera%10
            if r>=5:
                billetera=billetera+(10-r)
                print(billetera)
            elif r<=4:
                billetera=billetera-(r)
                print(billetera)
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
def desglose(r):
    b20=0
    b10=0
    b5=0
    b2=0
    b1=0
    m500=0
    m100=0
    m50=0
    m10=0
    for i in range(r,9,-10):
        if r>20000:
            b20+=1
            r-=20000
        elif r>10000:
            b10+=1
            r-=10000
        elif r>5000:
            b5+=1
            r-=5000
        elif r>=2000:
            b2+=1
            r-=2000
        elif r>=1000:
            b1+=1
            r-=1000
        elif r>=500:
            m500+=1
            r-=500
        elif r>=100:
            m100+=1
            r-=100
        elif r>=50:
            m50+=1
            r-=50
        elif r>=10:
            m10+=1
            r-=10
    print("\nEl desglose es",f"\nDe $20.000: {b20}"if b20>0 else"",f"\nDe $10.000: {b10}"if b10>0 else"",f"\nDe $5.000: {b5}"if b5>0 else"",f"\nDe $2.000: {b2}"if b2>0 else"",f"\nDe $1.000: {b1}"if b1>0 else"",f"\nDe $500: {m500}"if m500>0 else"",f"\nDe $100: {m100}"if m100>0 else"",f"\nDe $50: {m50}"if m50>0 else"",f"\nDe $10: {m10}"if m10>0 else"")
producto=input("Que producto quiere comprar?\n>")
while True:
    Vproducto=input(f"Ingrese el valor de {producto}\n>")
    try:
        vp=int(Vproducto)
        break
    except:
        print("El valor ingresado no es valido")
v=vuelto(vp)
print("\nSu vuelto es $",v)
desglose(v)
