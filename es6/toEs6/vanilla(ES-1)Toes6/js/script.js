// jsnack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore


// var bikes = [
//     {'nome': 'Atala', 'kg': 1},
//     {'nome': 'Bianchi', 'kg': 1.5},
//     {'nome': 'Giant', 'kg': 0.5}
// ];
//
//
//
// for ( va i = 0; i < bikes.length; i++) {
//   // for ( var key in bikes[i]) {
//     if ( bikes[i].kg > bikes[i + 1].kg ) {
//       var lightBike = bikes[i + 1];
//       console.log(lightBike);
//     } else {
//       var lightBike = bikes[i];
//       console.log(lightBike);
//     }
const bikes = [
    {'nome': 'Atala', 'kg': 1},
    {'nome': 'Bianchi', 'kg': 1.5},
    {'nome': 'Giant', 'kg': 0.5}
];

let lightBike = bikes[0];

for ( let i = 1; i < bikes.length; i++) {
  if ( bikes[i].kg < lightBike.kg ) {
    lightBike = bikes[i];
  }
}
console.log(lightBike.nome);

let {nome, kg} = lightBike;


let elOutput = document.getElementById('output');
elOutput.innerHTML = `
<ul>
  <li>Nome: ${nome}</li>
  <li>Kg: ${kg}</li>
</ul>`;
