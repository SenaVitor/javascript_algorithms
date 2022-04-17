const livros = require('./lista_livros');

let menor = 0;

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[menor].preco){
        menor = atual;
    }
}

console.log(`O livro mais barato é ${livros[menor].nome} e custa ${livros[menor].preco}`);