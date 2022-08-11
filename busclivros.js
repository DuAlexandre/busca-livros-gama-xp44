const livros = require('./database');
const readline = require('readline-sync');
console.log('Buscar Livros por: Nome / Autor / Paginas / Categoria / Todos');
const entradaInicial = readline.question('Sua busca: ')

if (entradaInicial.toLocaleLowerCase() === 'nome') {
    let nomeLivro = readline.question('Digite o nome do livro ou palavra chave: ');
    let pesquisaNome = livros.filter(livro => livro.nome.includes(nomeLivro.toLocaleLowerCase()));
    if (pesquisaNome.length !== 0) {
        console.table(pesquisaNome);
    }
    else {
        console.log('Nenhum livro com este nome foi encontrado!');
    }
}
if (entradaInicial.toLocaleLowerCase() === 'autor') {
    let nomeAutor = readline.question('Digite o nome do autor ou palavra chave: ');
    let pesquisaAutor = livros.filter(livro => livro.autor.includes(nomeAutor.toLocaleLowerCase()));
    if (pesquisaAutor.length !== 0) {
        console.table(pesquisaAutor);
    }
    else {
        console.log('Nenhum livro deste autor foi encontrado!');
    }
}
if (entradaInicial.toLocaleLowerCase() === 'paginas') {
    let numeroPaginas = readline.question('Digite a quantidade maxima de paginas: ');
    let pesquisaPaginas = livros.filter(livro => livro.paginas < parseInt(numeroPaginas));
    if (pesquisaPaginas.length !== 0) {
        console.table(pesquisaPaginas);
    }
    else {
        console.log('Nenhum livro com menos paginas foi encontrado!');
    }
}
if (entradaInicial.toLocaleLowerCase() === 'categoria') {
    let escolhaCategoria = readline.question('Desenvolvimento / Design / Softskills ');
    let pesquisaCategoria = livros.filter(livro => livro.categoria === escolhaCategoria);
    if (pesquisaCategoria.length !== 0) {
        console.table(pesquisaCategoria);
    }
    else {
        console.log('Não encontramos esta categoria');
    }
}
if (entradaInicial.toLocaleLowerCase() === 'todos') {
    console.table(livros);
}