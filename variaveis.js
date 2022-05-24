
//var
//funciona em qualquer parte do codigo

var altura = 3;
var comprimento = 6;

area = altura * comprimento;
console.log(area);

//declaracoes apos utilizar (problemas, mas possivel)
var area;

//let
let altura2 = 3;
let comprimento2 = 4;
let forma = "retangulo";
let area2;


if(forma === "retangulo"){
    area2 = altura2 * comprimento2;
}
else{
    area2 = (altura2 * comprimento2) / 2;
}

console.log(area2);

//const
//variaveis que nao podem ser modificadas durante o codigo