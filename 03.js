//KARLA  ERIAKE KOTTER
//=(:!!)
//HARJUTUS#

console.log("------------------------------------------------------");
console.log("Harjutus 3");
console.log("------------------------------------------------------");
//soidu arh ja kaugus

let kaugus = 120;
let kiirus = 30;
console.log("km: " + kaugus + ", kiirus: " + kiirus);
let soiduAeg = kaugus / kiirus;
console.log("Soidu aeg: " + soiduAeg + " tundi");


// Postituste kuvamine
//Andmebaasis on 137 postitust ning soovime neid kuvada veebilehel. Iga lehekülg kuvab maksimaalselt 10 postitust. 
//Sinu ülesanne on arvutada, mitu lehekülge on vaja postituste kuvamiseks ning mitu postitust on viimasel lehel.

let Andmebaas = 137;
let leheMax = 10;
let lehed = Andmebaas / leheMax;
let lehed2 = parseInt(lehed);
let viimaneLeht = Andmebaas % leheMax;
console.log("Lehti on: " + lehed2 + ". Viimasel lehel :" + viimaneLeht);


/*
Serveri töökulu
Sinu ülesanne on arvutada, kui palju maksab serveri töös hoidmine ühe tunni jooksul, kasutades järgmisi andmeid:
Serveri võimsus: 400 vatti (W)
Elektri hind: 9.69 senti/kWh
Sinu ülesanne on arvutada serveri töökulu ühe tunni jooksul eurodes. Selleks peate järgima järgmisi samme:
Arvuta serveri voolutarbimine kilovatt-tundides (kWh) kasutades järgmist valem:
Voolutarbimine (kWh) = Võimsus (W) / 1000
Arvuta töökulu, korrutades serveri voolutarbimise elektri hinnaga:
Töökulu (eurodes) = Voolutarbimine (kWh) * Elektri hind (eurod/kWh)
Oma vastuses anna teada, kui palju maksab serveri töös hoidmine ühe tunni jooksul eurodes.
*/


let serveriVoimsus = 400;
let elektriHind = 9.69;

let vooluTarbimine = serveriVoimsus / 1000;
let tooKulu = (vooluTarbimine * elektriHind) / 100;

console.log("masin k2ristab tunni jooksul " + tooKulu + " eurokest.")
