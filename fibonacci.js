//Suite de Fibonacci
//Créez une fonction qui complète le tableau 'fibonacci' qui retourne
//les n (avec n > 4) premiers éléments de la suite de Fibonacci.
const fibonacci = [1, 2, 3, 5];

const suiteDeFibonacci = (n) => {
	if(n<=4) {
		return fibonacci;
	}

	else {
		for(i=4;i<n;i++) {
			resultat = fibonacci[i-1] + fibonacci[i-2];
			fibonacci.push(resultat);
		}
	}

	return fibonacci;
};

console.log(suiteDeFibonacci(14));