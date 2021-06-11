interface IPersonne  {
    type: string;
    nom: string;
    age: number;
    villes: string[];
}

const personnes: IPersonne[] = [
    { type: 'user', nom: 'Max Mustermann', age: 25, villes: ['Marseille', 'Lyon', 'Paris'] },
    { type: 'admin', nom: 'John Wick', age: 45, villes: ['Paris'] },
    { type: 'user', nom: 'Kate Muller', age: 23, villes: ['Nantes', 'Lyon', 'Lille', 'Nice'] },
    { type: 'admin', nom: 'Bruce Willis', age: 64, villes: ['Paris', 'Nantes'] },
    { type: 'user', nom: 'Jack Wilson', age: 35, villes: ['Marseille', 'Lyon', 'Montpellier'] },
    { type: 'admin', nom: 'Carol Smith', age: 23, villes: ['Marseille', 'Nice', 'Montpellier'] }
];

// @ts-ignore
let getByType: Array<IPersonne> = (type: string) => { return personnes.filter(p => p.type === type)};
// @ts-ignore
// console.log(getByType("user"));
// @ts-ignore
let getByVille: Array<IPersonne> = (ville: string) => {
    return personnes.map(p => {
        let per: IPersonne = null;
        p.villes.forEach(
            v => {
                if(v == ville)  per=p;
            }
        )
        if (per !== null)
            return per;
    } )
};
// @ts-ignore
// console.log(getByVille("Marseille"));

let countVilles = () => {
    let other = [];
    personnes.forEach(p => {
       other.push(
           {nom : p.nom, nbrVille : p.villes.length}
       );
    });
    return other;
}

// @ts-ignore
// console.log(countVilles());

let getByVillesNumber = (nbr : number) => personnes.filter(p => p.villes.length === nbr);

// @ts-ignore
console.log(getByVillesNumber(3));
