function somme(a: number, b:number):number {
    return a+b; // fonction nommee
}

let add = function (a,  b) {
    return a+b; // function anonyme
}

let plus = (a, b) => {
	return a+b; // fonction flechee
}

let plus2 = (a,b) => a+b;


let result = somme(34, 45);
let result2 = add(45, 89);
let result3 = plus(405, 189);

console.log(result)
console.log(result2)
console.log(result3)


let calcul = (...prams) => {
	let som = 0;
	for(let a of prams) {
		som+=a;
	}
	return som;
}

console.log(calcul(1, 2, 3, 4, 5, 10))





