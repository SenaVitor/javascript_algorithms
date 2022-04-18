const livros = require('./lista_livros.js');
const menorValor = require('./menor_preco.js');

for(let atual = 0; atual < livros.length - 1; atual++){
    let menor_valor = menorValor(livros, atual)
    
    let livroAtual = livros[atual]
    console.log('Livro atual: ', livros[atual])
    let livroMenorPreco = livros[menor_valor]
    console.log('Menor preço: ', livros[menor_valor])
    
    livros[atual] = livroMenorPreco
    livros[menor_valor] = livroAtual 
}

console.log(livros)