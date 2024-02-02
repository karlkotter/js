console.log("------------------------------------------------------");
console.log("Harjutus 8");
console.log("------------------------------------------------------");


//Mundid 
const mundid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

const sorteeritudmunt = [];
let swag = 0;
let xd = 0;

while (mundid.length > 0) {
  const mundid2 = mundid.pop();

  if (mundid2 >= 1) {
    sorteeritudmunt.push(mundid2);
    swag += mundid;
    xd++;
  } else {
    const mundidecial = mundid.filter((c) => c + swag <= 1);
    if (mundidecial.length > 0) {
      const sum = mundidecial.reduce((acc, c) => acc + c, 0);
      if (sum + kokku <= 1) {
        sorteeritudmunt.push(...mundidecial);
        kokku += sum;
        xd += mundidecial.length;
        mundid.splice(mundid.indexOf(mundidecial[0]), mundidecial.length);
      }
    }
  }
}

console.log("Sorteeritud mundid:", sorteeritudmunt);
console.log(`Kokku sai ${xd} münti ja nende sumpar on ${xd.toFixed(2)}`);