# Ersteller: Noel Backhaus
# Datum: 15.02.25

from random import randint

# Kategorien / Übungen

arme = ["Bizeps Curls", "Hammer Curls", "Curls weit" "Liegestützen eng", "Rumpfheben"]
beine = ["Kniebeugen", "Sprint", "Deep walk"]
brust = ["Liegestütze weit", "Liegestütze gerade", "Liegestütze oben", "Curls eng", "Bankdrücken"]
ruecken = ["Klimmzüge", "Rudern (im Stehen / Sitzen)", "Handtuch zerreißen", "Beugen + Strecken (mit Hanteln)", "Hanteln nach hinten heben", "Pull-overs"]
schultern = ["Flies", "Hanteln seitlich nach oben", "Liegestütze unten", "Hanteln stemmen (im Stehen)"]
bauch = ["Sit-Ups", "Cycling", "45° Hold", "Butterflies", "Kerze", "Seitenstemmen", "Superman"]

koerper = [arme, beine, brust, ruecken, schultern, bauch]

for koerperteil in koerper:
    print("")
    zufallszahl = randint(0, len(koerperteil)-1)
    print(koerperteil[zufallszahl])
print("")