// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// L'esercizio sarà da svolgere prima in ES5 poi in ES6.


var list = [23,54,89,4,2,90];
function fx(array,numMin,numMax) {
  return console.log(array.slice(numMin,numMax));
}

fx(list, 1, 4);
