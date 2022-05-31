import chalk from 'chalk'; //modulo externo importado para colorir as informações do console
import fs from 'fs'; //modulo interno do node usado para capturar arquivos

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho')); //throw lança uma exceção definida pelo usuário e a execução da função atual vai parar, ou seja, no caso, quando o if (ou catch) abaixo chamar esta função, ela será lançada e o código irá parar. new Error mostra uma nova mensagem de erro (dentro dos parenteses erro.code é o código do erro e depois a mensagem que eu quero que apareça)
}

//código assincrono - Utilizando o sync e await (mais modernos)
async function pegaArquivo(caminhoDoArquivo){ //async indica para o JS que é uma função assincrona
  const encoding = 'utf-8'
  try { //sintaxe try e catch - O try indica se a função for verdadeira e o catch caso dê erro
    const texto = await fs.promises.readFile(caminhoDoArquivo,encoding) //indica ao JS que é para aguardar o valor desta constante
  console.log(chalk.green (texto));
  }catch(erro){
    trataErro(erro);
  } finally { //Opcional, mas se usado sempre é executado, independente do try e do catch
    console.log(chalk.yellow('operação concluída'));
  }  
}

// //código assincrono - Utilizando o the e o catch
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8'
//   fs.promises //métodos abaixo são encadeados. Após a promise (que aguarda algo) o readFile vai ler um arquivo. O then caso consiga e o catch caso não consiga
//   .readFile(caminhoDoArquivo,encoding) //promises na frente do readFile indica para o js para ele "aguardar a resposta" antes de continuar a execução
//   .then((texto)=> console.log(chalk.green (texto)))//then (então) indica que após a promise ser cumprida algo deve ser feito
//   .catch((erro)=>trataErro(erro)) //catch(capturar) captura uma função que neste caso será caso o readfile dê erro
// }


//função sincrona
// function pegaArquivo(caminhoDoArquivo){
//   const encoding = 'utf-8' //demonstra para o fs qual é o formato do arquivo
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => { //chama-se o módulo fs e a função readFile, passando três parametros: 1) o local do arquivo, o formato do dado, e a função de retorno, que precisa de dois parametros (o primeiro caso dê erro - caso não queira usar basta por _ e o segundo caso dê certo.) No caso do primeiro parametro, que no caso foi chamado de erro, irá guardar as informações caso a fs.readFile não consiga cumprir a sua função.
//     if (erro){ //No caso eu preciso tratar o erro indicado no fs.readFile. Caso aconteça o erro, o if vai indicar o que precisa ser feito
//       trataErro(erro)
//     }
//     console.log(chalk.green(texto));
//   })
// }

pegaArquivo('./arquivos/texto1.md')