// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// L'esercizio in ES6.


const min = parseInt(prompt('Inserisci un numero minimo'));
const max = parseInt(prompt('Inserisci un numero max'));


const list = [23,54,89,4,2,90];
function fx(array,numMin,numMax) {
  const arrayNew = [];
  // for ( let i = 0; i < array.length; i++) {
  //   if (( i >= min) && (i <= max)) {
  //   arrayNew.push(array[i]);
  // }
  list.forEach((elemento,index) => {
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

console.log(fx(list, min, max));
