const personnes = [
    { type: 'user', nom: 'Max Mustermann', age: 25, villes: ['Marseille', 'Lyon', 'Paris'] },
    { type: 'admin', nom: 'John Wick', age: 45, villes: ['Paris'] },
    { type: 'user', nom: 'Kate Muller', age: 23, villes: ['Nantes', 'Lyon', 'Lille', 'Nice'] },
    { type: 'admin', nom: 'Bruce Willis', age: 64, villes: ['Paris', 'Nantes'] },
    { type: 'user', nom: 'Jack Wilson', age: 35, villes: ['Marseille', 'Lyon', 'Montpellier'] },
    { type: 'admin', nom: 'Carol Smith', age: 23, villes: ['Marseille', 'Nice', 'Montpellier'] }
];

let getByType = (type: string) => {
    return personnes.filter(p => p.type === type);
}

console.log(getByType("admin"))
