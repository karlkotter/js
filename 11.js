console.log("------------------------------------------------------");
console.log("Harjutus 11");
console.log("------------------------------------------------------");

//nimed
const nimedConstis = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

// Funktsioon nimede korrastamiseks
function korrastaNimed(nimedConstis) {
    const korrastatudNimed = nimedConstis.map(nimi => {
        const nimeOsad = nimi.split(" ");
        const eesnimi = nimeOsad[0].charAt(0).toUpperCase() + nimeOsad[0].slice(1);
        const perenimi = nimeOsad[1].charAt(0).toUpperCase() + nimeOsad[1].slice(1);
        const email = perenimi.toLowerCase() + "@metshein.com";
        return `${eesnimi} ${perenimi} (${email})`;
    });
    return korrastatudNimed;
}

console.log("Korras nimed ja e-mailid:");
console.log(korrastaNimed(nimedConstis));


//funkar nimede otsimiseks
function otsiNime(nimi, nimedeMassiiv) {
    const leitudNimi = nimedeMassiiv.find(n => n.toLowerCase() === nimi.toLowerCase());
    if (leitudNimi) {
        console.log("Leitud nimi:", leitudNimi);
    } else {
        console.log("Nime ei leitud.");
    }
}


//sunniaeg ja vanus

const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
  ];
  
  // Funktsioon sünniaja ja vanuse leidmiseks
  function SjaV(isikukood) {
    const synniaasta = parseInt(isikukood.slice(1, 3));
    const sugu = parseInt(isikukood.slice(0, 1)) % 2 === 0 ? "naine" : "mees";
    const synnikuup2ev = (synniaasta < 22 ? "20" : "19") + isikukood.slice(1, 3) + "-" + isikukood.slice(3, 5) + "-" + isikukood.slice(5, 7);
    const t2na = new Date();
    const synniaeg = new Date(synnikuup2ev);
    const vanus = t2na.getFullYear() - synniaeg.getFullYear();
    return { synniaeg: synnikuup2ev, vanus: vanus, sugu: sugu };
  }

  inimesteAndmed.forEach(isik => {
    const synniAndmed = SjaV(isik.isikukood);
    console.log(`${isik.nimi}: sunniaeg : ${synniAndmed.synniaeg}, Vanus : ${synniAndmed.vanus} aastat, Sugu : ${synniAndmed.sugu}`);
  });
  
  //Kaugushüpe
const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
    ];
    const keskmine = (tulemused) => {
        const summa = tulemused.reduce((acc, tulemus) => acc + tulemus, 0);
        return summa / tulemused.length;
    };
    
    // Käige läbi iga õpilane ja kuvage nimi, parim tulemus ja keskmine tulemus
    opilased.forEach(opilane => {
        const parimTulemus = Math.max(...opilane.tulemused);
        const keskmineTulemus = keskmine(opilane.tulemused).toFixed(2);
    
        console.log(`${opilane.nimi}: Parim tulemus : ${parimTulemus}, Keskmine tulemus : ${keskmineTulemus}`);
    });