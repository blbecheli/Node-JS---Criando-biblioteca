import fetch from "node-fetch"; //modulo externo do node para rodar as fetchs, que são requisições http

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => { //Promise.all é método JS que permite trabalhar com várias URL's ao mesmo tempo
                    const res = await fetch(url)
                    return `${res.status} - ${res.statusText}`;
                }))
        return arrayStatus;
    } catch(erro){
        manejaErros(erro)
    }   
}

function geraArrayDeURLs(arrayLinks) {
    //loop para cada objeto {chave: valor}
    //Object.values(Object) //método próprio do JS para acessar objetos. O value acessa os valor do objeto
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join()) //map percorre uma array e retorna um valor. Ela é um tipo callback, ou seja, seu parametro deve ser uma outra função. O join tira um elemento de dentro de uma array e transforma em string, e por causa do map, todas as strings retiradas vão ficar dentro de uma só array
}

export default async function validaURLs(arrayLinks) {
    const links = (geraArrayDeURLs(arrayLinks));
    const statusLinks = await checaStatus(links)
    //spread operator
    const resultados = arrayLinks.map((objeto, indice) => ({ //Nesta constante eu estou fazendo a junça de duas arrays (a que pega os links de um arquivo,e a que mostra os status http destes links). O map está iterando cada objeto da array links, e por meio do spread operator, está sendo acrescentado um novo par de chaves (status) e valor (array statusLinks por meio de seus índices). A função deve ser englobada por parenteses para dizer para o JS que o retorno é um objeto e não uma função
        ...objeto,
        status: statusLinks[indice] //... é o spread operator, que espalha o objeto
    }))
    return resultados
}