import {Personne} from "./personne";

class ListePersonnes {
    private _personnes : Personne[];


    constructor(personnes: Personne[]) {
        this._personnes = personnes;
    }

    findByNom(s: string): Personne | null{
        let pers = this._personnes.filter(per => per.nom === s);
        return pers.length === 0 ? null : pers[0];
    }

    findByCodePostal(cp: string) {
        for (const person of this._personnes) {
            for (const add of person.adresses) {
                if(add.codePostal === cp) return true;
            }
        }
        return false;
    }

    countPersonneVille(ville: string) {
        let nbville=0;
        this._personnes
                .forEach( p => {
                    let v = p.adresses.filter( a=>a.ville === ville)
                    if(v.length>0) nbville++;
                });
        return nbville;
    }

    get personnes(): Personne[] {
        return this._personnes;
    }

    set personnes(value: Personne[]) {
        this._personnes = value;
    }
}
