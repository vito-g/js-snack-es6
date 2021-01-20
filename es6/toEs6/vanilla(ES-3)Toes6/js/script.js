// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// L'esercizio in ES6.


const min = parseInt(prompt('Inserisci un numero minimo'));
const max = parseInt(prompt('Inserisci un numero max'));


const list = [23,54,89,4,2,90];
console.log(`Array Sorgente: [${list}]`);

function fx(array,numMin,numMax) {
  const arrayNew = [];
  // for ( let i = 0; i < array.length; i++) {
  //   if (( i >= min) && (i <= max)) {
  //   arrayNew.push(array[i]);
  // } // N.B.: In Es6 posso tradurre il Ciclo FOR con il + VERSATILE FOR/EACH:
  array.forEach((elemento,index) => {
    // console.log(elemento);
    // console.log(index);
    if (( index >= numMin) && (index <= numMax)) {
      // arrayNew.push(array[elemento]); // !!!!!ERRATO!!!!!
      arrayNew.push(elemento); // N.B.: Che posso ANCHE scrivere COME SEGUE:
      // arrayNew.push(array[index]);
    }
  });

return arrayNew;
}
// console.log(`
// Che nel Range Index Item da ${min} a ${max}, diventa:
//
// Array Filtrato: [` + fx(list, min, max) + `]`);

//N.B.: MEGLIO ancora COME SEGUE:
console.log(`
Che nel Range Index Item da ${min} a ${max}, diventa:

Array Filtrato: [${fx(list, min, max)}]`);

//N.B.: Il BACKTICK (ALT + 96), o Accento Grave, restituisce spazi e "a capo" e, correttamente utilizzato evita l'uso del concatenatore di stringhe ('+').

//N.B: INVECE così:
console.log(`
Nel modo che segue posso, invece, espandere in Console ciò che stampo:

`);
console.log('Array Sorgente: ', list);// In questo modo posso espandere in console ciò che stampo
console.log('Array Filtrato', fx(list, min, max));//In questo modo posso espandere in console ciò che stampo
