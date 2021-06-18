import {Stagiaire} from "./stagiaire";

class Formation {

    private _intitule: string;
    private _nbrJours: number;
    private _stagiaires: Stagiaire[];


    constructor(intitule: string, nbrJours: number, stagiaires: Stagiaire[]) {
        this._intitule = intitule;
        this._nbrJours = nbrJours;
        this._stagiaires = stagiaires;
    }

    calculerMoyenneFormation() : number {
        return  this._stagiaires
                    .map(stagiare => stagiare.calculerMoyenne())
                    .reduce((moy, value) => moy+value)/this._stagiaires.length;
    }

    getIndexMax(): number{
        let moyen = this._stagiaires.map(stagiare => stagiare.calculerMoyenne());
        let el= Math.max(...moyen)
        return moyen.indexOf(el);
    }

    afficherNomMax() {
        console.log(this._stagiaires[this.getIndexMax()].nom);
    }

    afficherMinMax() {
        console.log(this._stagiaires[this.getIndexMax()].trouverMin())
    }

    trouverMoyenneParNom(nom: string) {
        let stagiare = this._stagiaires.filter(stage => stage.nom === nom)
        console.log(stagiare[0].calculerMoyenne());
    }

    get intitule(): string {
        return this._intitule;
    }

    set intitule(value: string) {
        this._intitule = value;
    }

    get nbrJours(): number {
        return this._nbrJours;
    }

    set nbrJours(value: number) {
        this._nbrJours = value;
    }

    get stagiaires(): Stagiaire[] {
        return this._stagiaires;
    }

    set stagiaires(value: Stagiaire[]) {
        this._stagiaires = value;
    }
}
