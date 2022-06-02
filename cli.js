import chalk from "chalk";
import pegaArquivo from "./index.js";

const caminho = process.argv; //função que captura o que é escrito na linha de comando do terminal

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    console.log(chalk.yellow('lista de links'), resultado);
}


processaTexto(caminho)