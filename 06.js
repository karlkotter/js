console.log("------------------------------------------------------");
console.log("Harjutus 6");
console.log("------------------------------------------------------");

// Postiivne või negatiivne
let number = 10;

switch (true) {
    //kontrollib kas on null
    case number === 0:
        console.log("Number on null");
        break;
    //kontrollib kas nr on pos
    case number > 0:
        console.log("Number on suurem, kui null");
        break;
    //kontrollib kas nr on neg
    case number < 0:
        console.log("Number on negatiivne");
        break;
}

//restorants
let inimesteArv = 2;

switch (true) {
    case (inimesteArv === 1 || inimesteArv === 2): // kas on 1 või 2 inimesest
        console.log("Valige laud kahele inimesele")
        break;
    case (inimesteArv === 3 || inimesteArv === 4): // 3 või 4
        console.log("Valige laud neljale inimesele")
        break;
    case (inimesteArv === 5 || inimesteArv === 6): // 5 või 6
        console.log("Valige laud kuuele inimesele")
        break;
    case (inimesteArv>6): // rohkem kui 6
        console.log("Valige suur laud")
        break;
}