const livros = require('./lista_livros.js');
const menorValor = require('./menor_preco.js');
const troca = require('./troca.js');

for(let atual = 0; atual < livros.length - 1; atual++){
    let menor_valor = menorValor(livros, atual)   
    troca(livros, menor_valor)
}

console.log(livros)