let tab = [
    45,
    "bonjour",
    75, 7,
    "je",
    "suis",
    9,
    "un",
    109,
    "etudiant"
];

// console.log(tab);

let tabnumber = tab.filter(value => (typeof value) == 'number');
let tabString = tab.filter(value => (typeof value) !== 'number');

// let num = [];
// let str = [];
// tab.forEach(value => {
//     if((typeof value) == 'number') num.push(value)
//     else str.push(value);
// })
let tabRacineCarre = tabnumber.map(value => {
    if ((typeof value) == 'number') {
        // @ts-ignore
        return Math.sqrt(value);
    }
})

let moyenne = tabRacineCarre.reduce(
    (total, value) =>
        total + value/tabRacineCarre.length)

let phrase  = tabString.reduce((total, value) => total+" "+value);
