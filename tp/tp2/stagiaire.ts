export class Stagiaire {

    private _nom: string;
    private _notes: number[];

    public constructor( nom: string, notes : number[]) {
        this._nom= nom;
        this._notes = notes;
    }

    calculerMoyenne(): number{
        return this._notes
                    .reduce(
                        (total, value) => total + value
                    )/this._notes.length;
    }

    trouverMax(): number {
        return  Math.max(...this._notes);
    }

    trouverMin(): number {
        return  Math.min(...this._notes);
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get notes(): number[] {
        return this._notes;
    }

    set notes(value: number[]) {
        this._notes = value;
    }
}
