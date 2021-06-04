// let tab = [2, 45, 6, 5, 1, 78, 79, 34, 35, 23, 56, 90];

// for (var i=0; i<tab.length; i++) {
//     console.log(tab[i]);
// }

// for( let elementTab of tab) {
//     console.log(elementTab);
// }


// function fnCallback(valeur: number, index: number){ // fonction nommee
//     console.log(index+" => "+valeur);
// }

// let fnCallback = function (valeur: number, index: number){ // fonction Anonyme
//     console.log(index+" => "+valeur);
// }
// tab.forEach((valeur: number, index: number) => { // fonction Flechee
//     console.log(index+" => "+valeur);
// });
// tab.forEach((valeur: number, index: number) => console.log(index+" => "+valeur));
//
// tab.forEach((valeur: number) => console.log(" => "+valeur));

// Map => [2*2, 45*2, 2*6, 5*2, 1, 78, 79, 34, 35, 23, 56, 90];
// let doubleTab = tab.map(valeur => 2*valeur);
// console.log(tab)
// console.log(doubleTab)

// Filter => filtre sur un tableau : [78, 79, 56, 90]: Corps doit etre un boolean
// let filterTab = tab.filter(value => value > 50);
// console.log(filterTab)

// Reduce => reduire le tableau en une valeur simple
// [2, 45, 6, 5, 1, 78, 79, 34, 35, 23, 56, 90]; => 2 +45 = 47 + 6 = 51 + 5=56
// let sommeTab = tab.reduce((total, valeur) => total + valeur)
// 2 + 45 = 47, 47 + 6 = 51, 51 + 5 = 56, etc.
// console.log(sommeTab)

// Moyenne
// let moyenneTab = tab.reduce((total, valeur)=> total + valeur/tab.length);
// [2,4 , 6] => (2+4+6)/3  ou 2/3 + 4/3 + 6/3
// (2+4+6)/3
// sommeTab/tab.length

let tab = [2, 18, 6, 5, 10, 8, 9, 13, 15, 12, 17, 20];
// Affihcer la liste des notes, filter les notes < 10, ajoute +3
tab.forEach(value => console.log(value))
// let sousMoyenne = tab.filter(value => value < 10)
// console.log(sousMoyenne)
let bonus = tab
    .filter(value => value < 10)
    .map(value => value + 3)
    .forEach(value => console.log(value));

