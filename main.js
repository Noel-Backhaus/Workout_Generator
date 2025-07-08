// Random-Funktion

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + 1 ) + min;
}
            
// Kategorien / Übungen

const arme = ["Bizeps Curls", "Hammer Curls", "Curls weit", "Liegestützen eng", "Rumpfheben", "Bizeps Curls ohne Hanteln"],
beine = ["Kniebeugen", "Sprint", "Deep walk", "Waden Jumps"],
brust = ["Liegestütze weit", "Liegestütze gerade", "Liegestütze oben", "Curls eng", "Bankdrücken", "Side-to-Side-Push-Ups"],
ruecken = ["Klimmzüge", "Rudern (im Stehen / Sitzen)", "Handtuch zerreißen", "Beugen + Strecken (mit Hanteln)", "Hanteln nach hinten heben", "Pull-overs"],
schultern = ["Flies", "Hanteln seitlich nach oben", "Liegestütze unten", "Hanteln stemmen (im Stehen)"],
bauch = ["Sit-Ups", "Cycling", "45° Hold", "Butterflies", "Kerze (Beine hoch und runter heben)", "Seitenstemmen", "Superman", "Schienbeine berühren", "Plank Crunches", "Plank Hold", "Plank Jumps", "Einrollen", "Flatter Kicks"];

const koerper = [arme, beine, brust, ruecken, schultern, bauch],
kategorien = ["Arme", "Beine", "Brust", "Ruecken", "Schultern", "Bauch"];

for (let index = 0; index < 6; index++) {
    let koerperteil = koerper[index],
    zufallszahl = getRndInteger(0, (koerperteil.length + 2)),
    id = "uebung" + (index + 1);

    document.getElementById(id).innerHTML = koerperteil[zufallszahl];
}
