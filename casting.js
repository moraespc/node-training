// casting de tipos
// pratica de booleanos

// conversao implicita
const numero = 456;
const numeroString = '456';

console.log(numero === numeroString); // compara o tipo
console.log(numero == numeroString); // nao compara o tipo
// aconteceu uma conversao implicita para string

console.log(numero + numeroString); //converte para string
// e depois concatena o resultado

// conversao explicita
// Number() | String()

console.log(numero + Number(numeroString));

