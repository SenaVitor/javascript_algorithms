const listaLivros = require('./array_ordenado');

function busca(array, de, ate, valor) {
    const meio = Math.floor((de + ate) /2 );
    const atual = array[meio];
    if(valor == atual.preco){
        return meio;
    }
    if(valor < atual.preco){
        return busca(array, de, meio - 1, valor);
    }

    if(valor > atual.preco){
        return busca(array, meio + 1, ate, valor);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 45));