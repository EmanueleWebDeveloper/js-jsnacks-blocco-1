// Blocco 1 - snake 6
// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.


let Numero = prompt("Inserisci un numero:")
let resultHtml = document.getElementById("cubiNumeri")

for (let i = 1; i <= Numero; i++) {

    let calcoloCubo = [i] * [i] * [i]

    console.log(calcoloCubo)

    resultHtml.innerHTML += `Cubo: ${calcoloCubo}, `
}

