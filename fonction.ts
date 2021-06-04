function fibonacci(n: number): number{
	// if(n == 0) return n;
	// if(n == 1) return n;

	// if(n < 2 ) return n;
	// return fibonacci(n-1)+ fibonacci(n-2);

	return (n < 2) ? n :  fibonacci(n-1)+ fibonacci(n-2);
}

function factorielle(n: number): number {
	return (n < 2) ? 1 : n*factorielle(n-1);
}

function estPremier(n: number): boolean {
	for (var i = 2; i < n/2; ++i) {
		if(n % i === 0) return false;
	}
	return true;
}

console.log(" FIBO",fibonacci(10));
console.log(" FACTO",factorielle(10));