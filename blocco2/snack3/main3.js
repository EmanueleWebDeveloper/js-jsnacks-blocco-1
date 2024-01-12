// Blocco 2 - snack 2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nomi = ["luca", "marco", "roberto", "lidia", "ylenia", "carlo"];
const cognomi = ["rossi", "pluto", "marino", "ferrara", "devisu"];

let nomeCognome = [];

for (let i = 0; i < nomi.length; i++) {
    for (let j = 0; j < cognomi.length; j++) {
        nomeCognome.push(nomi[i] + " " + cognomi[j]);
    }
}

console.log(nomeCognome);