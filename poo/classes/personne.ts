export class Personne {
    //attributs
    private _nom: String;
    private _prenom: String;
    public age:number;

    public constructor(
        _nom?: string,
        _prenom?: string,
        age?: number)
    {
        this._nom = _nom;
        this._prenom = _prenom;
        this.age = age;
    }
    // getter
    get nom() {
        return this._nom;
    }
    get prenom() {
        return this._prenom
    }

    // setter
    set nom(valeur) {
        this._nom = valeur;
    }
    set prenom(valeur) {
        this._prenom = valeur;
    }
}
