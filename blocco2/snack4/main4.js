// Blocoo 2 - snack 3
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeriDispari = []

for (let i = 0; i < numeriInteri.length; i++) {
    if (numeriInteri[i] % 2 !== 0) {
      numeriDispari.push(numeriInteri[i]);
    }
  }
  
  console.log(numeriDispari);