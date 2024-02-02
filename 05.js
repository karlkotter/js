console.log("------------------------------------------------------");
console.log("Harjutus 5");
console.log("------------------------------------------------------");



//temperatsi ul
var temperatuur = 30;
//kui temp on suurem kui 25 valjastab vaga kuum ilm
if (temperatuur > 25){
    console.log("vaga kuum ilm")
} else if (temperatuur >= 15) {
    console.log("monus ilm")
} else if (temperatuur < 15) {
    console.log("jahe ilm")
}

//kasutajanime kontroll

let kasutajaNimi = "admin";
if (kasutajaNimi = "admin") { 
console.log("Tsauks adminna")
} else {
    console.log("Tsauks mitte adminna")
} 

//piletite hindd

let pilet = "Taispilet";
let vanus = 17;

if(pilet == "Taispilet"){
    if (vanus < 18) {
        console.log("pileti hind 10 doltsi")
    }
}


