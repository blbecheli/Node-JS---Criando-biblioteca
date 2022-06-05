import chalk from "chalk";
import validaURLs from "./http-validacao.js";
import pegaArquivo from "./index.js";

const caminho = process.argv; //função que captura o que é escrito na linha de comando do terminal

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    if (caminho[3] === "validar") {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado));
    } else {
        console.log(chalk.yellow('lista de links'), resultado);
    }
}


processaTexto(caminho);