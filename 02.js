/*
Karl Eerik Kotter
31.10
harjutus 2
*/

console.log("------------------------------------------------------")
console.log("Harjutus 2")
console.log("------------------------------------------------------")

//Kellaaeg
let tunnid = 3;
let minutid = 23;
let sekundid = 18;
console.log(tunnid +":"+ minutid +":"+ sekundid +"PM");

//Tsitaat lause sees
let tsitaat = "If you live a life of make-believe, your life isn't worth anything until you do something that does challenge your reality.";
console.log(tsitaat +"- Morgan Freeman");

//Mallide kasutamine
let eesnimi = "Karl";
let perenimi = "Kotter";


let eesnimiMark = eesnimi[0];
let perenimiMark = perenimi[0];
tahed = eesnimiMark +"."+ perenimiMark;

console.log(eesnimi, perenimi +" nimetähed on "+ tahed +".");

//Perenime pikkus
let pereJaEes = "Karl, Kotter";
let koma = pereJaEes.indexOf(",");
let perenimi2 = pereJaEes.substring(koma + 2);
let suuredTähed = perenimi2.toUpperCase();
console.log(suuredTähed);
let perenimePikkus = perenimi2.length;
console.log(perenimePikkus);

//emaili muutmine
let epost = "karrolk@netlog.com";
let muudetudEpost = epost.replace(/@netlog\.com$/, "@gmail.com");
console.log(muudetudEpost);


//andmerida analüüs
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmed = andmerida.split(',');

let ipAadress = andmed[5];
let email = andmed[3];
let kasutajanimi = email.split('@')[0];

console.log(ipAadress);
console.log(kasutajanimi);
