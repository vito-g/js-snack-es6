// jsnack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  {'nome' : 'Juve' , 'score' : 0, 'falliSubiti' : 0 },
  {'nome' : 'Napoli' , 'score' : 0, 'falliSubiti' : 0 },
  {'nome' : 'Inter' , 'score' : 0, 'falliSubiti' : 0 }
];

function random(a, b) {
  var randomNumber = Math.floor((Math.random() * b) + a);
  return randomNumber;
}

for (let i = 0; i < squadre.length; i++) {
  squadre[i].score = random(0,100);
  squadre[i].falliSubiti = random(0,20);

}

console.log('Array 1 ', squadre);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreReview = [];

for (let i = 0; i < squadre.length; i++) {
  // squadreReview.push({nome : squadre[i].nome, falliSubiti : squadre[i].falliSubiti });
  //La Destrutturazione in Es6 diventa:
  const {nome, falliSubiti} = squadre[i];
  squadreReview.push({nome, falliSubiti});
}


console.log('Array 2 ', squadreReview);
