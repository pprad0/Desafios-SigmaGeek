//Algoritmo que calcula em torno de 1000 casas de pi.
//  fonte: https://fabio.recife.br/blog/2019/10/27/Um-milhao-de-digitos-de-PI/

let i = 1n;
let x = 3n * (10n ** 1020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}

let piGRANDE = pi / (10n ** 20n);

