// Blocco 1 - JSnack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


let numero = prompt("Scegli un numero ");
let somma = 0;


numero = +numero;

for (let i = 1; i <= 10; i++) {
    let input = prompt("Inserisci un numero");

    somma += +input;
}

console.log("La somma totale è: " + somma);








