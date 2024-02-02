console.log("------------------------------------------------------");
console.log("Harjutus 9");
console.log("------------------------------------------------------");

//erinevad funkarid

function nimi() {
    console.log("Karl Eerik Kotter");
}
nimi();

const nimi2 = () => {
    console.log("Karl Eerik Kotter");
};

nimi2();

//argumendiga funkar
function kuupaevEesti(kuupaev) {
    const kuud = [
        "jaanuar", "veebruar", "marts", "aprill",
        "mai", "juuni", "juuli", "august",
        "september", "oktoober", "november", "detsember"
    ];

    const [paev, kuu, aasta] = kuupaev.split(".");
    const kuuNimi = kuud[parseInt(kuu, 10) - 1];

    console.log(`Praegune kuupaev: ${paev}. ${kuuNimi} ${aasta}`);
}

kuupaevEesti("1.02.24");

//teadmata hulk midagi

function arvud(...numbrid) {
    const summa = numbrid.reduce((acc, current) => acc + current, 0);
    const keskmine = summa / numbrid.length;

    console.log(`Koguarv: ${summa}, Keskmine: ${keskmine}`);
}

arvud(5, 10, 15, 20);


//salajane sonum

const salajaneSonum = (sonum) => {
    const taishaalikud = /[aeiou]/gi;
    const salajaneVersioon = sonum.replace(taishaalikud, '*');
    return salajaneVersioon;
};

const algneSonum = "Isiklikult arvan, et Soome riik on Eestist kordades tohusam hihihi";
const salajaneVersioon = salajaneSonum(algneSonum);
console.log(salajaneVersioon);


//nimparid

const nimed = (nimed) => {
    const unikaalsednimed = [...new Set(nimed)];
    return unikaalsednimed;
};

const nimedeMassiiv = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
const unikaalsednimed = nimed(nimedeMassiiv);
console.log(unikaalsednimed);
