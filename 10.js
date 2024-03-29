const toode = {
    nimetus: 'Piim',
    hind: 3.60,
    kogus: 2,
    koguhind: function () {
        return this.hind * this.kogus;
    },
    muudaKogust: function (uusKogus) {
        this.kogus = uusKogus;
    },
    kuvaInfo: function () {
        console.log(`${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`);
    }
};

const ostukorv = {
    tooted: [
        { nimi: 'Piim', hind: 3.60, kogus: 2 },
        { nimi: 'Leib', hind: 2.00, kogus: 1 },
        { nimi: 'Munad', hind: 1.50, kogus: 6 },
        { nimi: 'Juust', hind: 4.20, kogus: 1 },
        { nimi: 'Tomatid', hind: 2.30, kogus: 3 }
    ],
    kuvaSisu: function () {
        const ostukorviElement = document.getElementById('ostukorv');
        ostukorviElement.innerHTML = "";
        for (const toode of this.tooted) {
            const listItem = document.createElement('li');
            listItem.textContent = `${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`;
            ostukorviElement.appendChild(listItem);
        }
    },
    lisaToode: function (nimi, hind, kogus) {
        this.tooted.push({ nimi, hind, kogus });
    },
    koguSumma: function () {
        let summa = 0;
        for (const toode of this.tooted) {
            summa += toode.hind * toode.kogus;
        }
        return summa.toFixed(2);
    }
};

console.log("Ostukorvi sisu:");
ostukorv.kuvaSisu();

ostukorv.lisaToode('Kohv', 5.80, 2);
console.log("Ostukorvi sisu pärast kohvi lisamist:");
ostukorv.kuvaSisu();

const koguSummaTekst = document.getElementById('summaTekst');
koguSummaTekst.textContent = ostukorv.koguSumma() + " EUR";