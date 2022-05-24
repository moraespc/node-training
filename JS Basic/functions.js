
//declaracao de funcao
function myfunc(texto){
    console.log(texto);
}

function soma(num1, num2){
    return num1 + num2;
}

myfunc(soma(4, 5));

//expressao de funcao
const soma2 = function(num1, num2){return num1 + num2;}
console.log(soma2(1, 1));

//functions e var sao puxadas para o topo do codigo (hoisting)



// ---------- ARROW FUNCTION
const apresentarArrow = nome => `meu nome e ${nome}`;
const soma3 = (num1, num2) => num1 + num2;

//OBS: nao pode ser nomeada (const + nome variavel)

// arrow + que 1 linha:
const qualMaior = (num1, num2) => {
    if(num1 > num2){
        return console.log(num1);
    }
    else{
        return console.log(num2);
    }
}

qualMaior(5, 9);

//arrow function nao sobe no hoisting (funciona como expressao)