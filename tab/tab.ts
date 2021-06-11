let tab = [
    "orange",
    "banana",
    "mangos",
    "soupou",
    "pomme"
];

// tab.forEach(function (value) { console.log(value); })
tab.forEach( (value) => { console.log(value); })

let tab0 = tab.map(  valeur => valeur+ " bonjour" )

// console.log(tab0)

// let tab9 = tab.filter(function (valeur) {
//     // if(valeur.length > 5) return true;
//     // else  return false;
//     return valeur.length > 5;
// })
let tab9 = tab.filter( valeur => valeur.length > 5)

let phrase = tab.reduce( (total, valeur) => total + " "+ valeur)
