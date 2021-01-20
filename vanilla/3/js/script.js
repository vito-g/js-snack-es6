// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// L'esercizio sarà da svolgere prima in ES5 poi in ES6.
// --------------------------------------------------
//SEnza CICLO FOR:

// var list = [23,54,89,4,2,90];
// function fx(array,numMin,numMax) {
//   return console.log(array.slice(numMin,numMax));//crea un nuovo array a partire da quello selezionato e costituito dagli elementi dell'array selezionato con indici a partire da numMin sino a numMax(non incluso)
// }
//
// fx(list, 1, 4);

// ---------------------------------------------------
// COL CICLO for
// var min = 1;
// var max = 3;
var min = parseInt(prompt('Inserisci un numero minimo'));
var max = parseInt(prompt('Inserisci un numero max'));


var list = [23,54,89,4,2,90];
console.log('Array Sorgente: ', list)
function fx(array,numMin,numMax) {
  var arrayNew = [];
  for ( var i = 0; i < array.length; i++) {
    if (( i >= min) && (i <= max)) {
    arrayNew.push(array[i]);
  }
}
return arrayNew;
}
console.log('Range Index Item Scelto: ', min + '-' + max);
console.log('Array Filtrato: ', fx(list, min, max));
