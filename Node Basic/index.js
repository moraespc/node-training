
// Importing module
import chalk from 'chalk';
import fs, { read } from 'fs';
  
// Printing the text
// console.log(chalk.red("aayush"))
// console.log(chalk.underline("aayush"))
// console.log(chalk.underline.bold("GFG"))

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'nao existe'));
}
// Lendo arquivos

// function openFile(filePath){
//     const encoding = 'utf-8';

//     fs.readFile(filePath, encoding, (trataErro(erro), texto) => {
//         console.log(chalk.green(texto));
//     })
// }


// function openFile(filePath){
//     const encoding = 'utf-8';

//     fs.promises.readFile(filePath, encoding)
//     .then((texto) => console.log(texto))
//     .catch((erro) => trataErro(erro))
// }


// async function openFile(filePath){
//     const encoding = 'utf-8';

//     try{
//         const texto = await fs.promises.readFile(filePath, encoding)
//         console.log(chalk.green(texto))
//     } catch(erro) {trataErro(erro)}
// }

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
      arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados;
  }
  
  async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(extraiLinks(texto));
    } catch(erro) {
      trataErro(erro);
    }
  }
  pegaArquivo('./files/texto1.md')

