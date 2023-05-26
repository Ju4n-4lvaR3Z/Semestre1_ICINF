from os import system
import time
for h in range (24):
    for m in range(60):
        for s in range(60):
            system("cls")
            print(h,":",m,":",s)
            time.sleep(1)