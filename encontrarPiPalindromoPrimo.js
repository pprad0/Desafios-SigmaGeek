//A missão é encontrar o primeiro número primo palíndromo de 9 dígitos na expansão decimal de pi (3,1415...) e retorná-lo;

//#1 - na expansão de pi     (+- check)
//#2 - 9 digitos                (check)
//#3 - palíndromo               (check)
//#4 - primo

let i = 1n;                                 // não é meu algoritmo, fonte: https://fabio.recife.br/blog/2019/10/27/Um-milhao-de-digitos-de-PI/
let x = 3n * (10n ** 1020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}

let piGRANDE = `${pi / (10n ** 20n)}`;

let piArray = piGRANDE.split('');


let conjuntoNoveDigitos = [];
let noveDigitosEPalindromo = [];

// console.log(piArray);

for(let numero of piArray) {
   conjuntoNoveDigitos.push(piArray[0]); 
   conjuntoNoveDigitos.push(piArray[1]); 
   conjuntoNoveDigitos.push(piArray[2]); 
   conjuntoNoveDigitos.push(piArray[3]); 
   conjuntoNoveDigitos.push(piArray[4]); 
   conjuntoNoveDigitos.push(piArray[5]); 
   conjuntoNoveDigitos.push(piArray[6]); 
   conjuntoNoveDigitos.push(piArray[7]); 
   conjuntoNoveDigitos.push(piArray[8]); 

    if(conjuntoNoveDigitos[0] === conjuntoNoveDigitos[8] && conjuntoNoveDigitos[1] === conjuntoNoveDigitos[7] && conjuntoNoveDigitos[2] === conjuntoNoveDigitos[6] && conjuntoNoveDigitos[3] === conjuntoNoveDigitos[5]) {
       noveDigitosEPalindromo.push(conjuntoNoveDigitos);
    }
    piArray.shift();
   conjuntoNoveDigitos = [];
}

// até aqui já descobri como achar um numero palindromo em pi

console.log (noveDigitosEPalindromo[0]);
console.log(piArray);

// falta conseguir expandir mais o Pi e encontrar o primeiro número palíndromo, para depois testar se este mesmo número é primo.    >;)