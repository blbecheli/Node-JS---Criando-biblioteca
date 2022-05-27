import chalk from 'chalk';

console.log(chalk.blue("Vamos começar!")); //chalk é um tipo de dependencia, ou seja, um código feito por terceiros que eu posso usar no meu código

const paragrafo = "Texto retornado por uma função"

function texto (string){
  return string
}

console.log(texto (paragrafo));
