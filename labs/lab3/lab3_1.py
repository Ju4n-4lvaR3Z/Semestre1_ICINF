from os import system
system("cls")
Reg1=[8,"BioBío",23890,1556805]
Reg2=[10,"Los Lagos",48583,828709]
censo=dict(reg1=Reg1,reg2=Reg2)
print(f"A)\n {censo}")
censo.update(Desidad=[f"{(Reg1[3]/Reg1[2]):.1f}",f"{(Reg2[3]/Reg2[2]):.1f}"])
print(f"B)\n {censo}")
censo.update(Capital=["concepcion","Puerto Montt"])
print(f"C)\n {censo}")
censo.update(Cumuna=["Lota","Lebu","Angeles","Castro","Puerto Varas","Purranque"])
print(f"D)\n {censo}")
censo.update(Provincias=tuple({"BioBío","Arauco","Concepción","Osorno","Llanquihue","Chiloé","Palena"}))
print(f"E)\n {censo}\n")
print(f"F)\n {censo}")



