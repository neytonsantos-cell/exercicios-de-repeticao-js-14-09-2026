// let nome = "Diogo";
// let idade = 30;

// // CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

// // INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3; // 53
// let sub = "5" - 3; // 2

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// convertendo valores
// let numero = "ab" // string

// let convertido = Number(numero) // converte o valor para number

// console.log(typeof convertido);


// OPERADORES RELACIONAIS

// VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true

// VALIDO IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false


// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hgdhasghd
//         break;
//     case 2:
// }


// // ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// FUNÇÕES NATIVAS JS

// FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// // numerosDobrados = [2, 4, 6, 8]
// console.log(numerosDobrados);

// // ou assim:
// // Arrow function com retorno implícito

// let numerosDobradosArrow = numeros.map(num => num * 2);

//FILTER
//Filtra uma lista com base em uma condição

// let numeros = [5, 10, 15, 20]

// let maioresQueDez = numeros.filter(num => num > 10)

// console.log(maioresQueDez) // [15, 20]

//REDUCE
// Reduz uma lista a um único valor com base em uma condição

// let numeros = [1, 2, 3, 4]

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0)

// console.log(soma) // 10

// O código usa o método .reduce() do JavaScript para somar todos os elementos do array numeros, armazenando o resultado final (10) na variável soma.

// Componentes do código

// let numeros = [1, 2, 3, 4]: Cria uma lista (array) com quatro números.

// reduce(...): Método de array que percorre cada item sequencialmente para transformar a lista em um único valor final.

// acumulador: Armazena o valor acumulado das somas anteriores a cada passo.

// auxiliar: Representa o elemento do array sendo processado no momento da iteração.

// , 0: O valor inicial fornecido ao acumulador antes do início do processamento.

// Passo a passo da execução

// Início: O acumulador começa em 0 (valor inicial).

// 1ª iteração: acumulador (0) + auxiliar (1) = 1

// 2ª iteração: acumulador (1) + auxiliar (2) = 3

// 3ª iteração: acumulador (3) + auxiliar (3) = 6

// 4ª iteração: acumulador (6) + auxiliar (4) = 10

// O resultado retornado pelo reduce é 10, atribuído à variável soma e impresso no terminal pelo console.log(soma).

//FIND
// Retorna o primeiro elemento que satisfaz a condição
//  let produtos = [
//      { id: 1, nome: "Camiseta", preco: 29.99 },
//      { id: 2, nome: "Calça", preco: 49.99 },
//      { id: 3, nome: "Tênis", preco: 89.99 },
//      { id: 4, nome: "Boné", preco: 19.99 }
//  ]

//  let item = produtos.find(p => p.id === 3)
//  console.log(item) // { id: 3, nome: "Tênis", preco: 89.99 }

//DIFERENÇA ENTRE FILTER E FIND
// find -> Retorna o primeiro elemento que satisfaz a condição
// filter -> Retorna todos os elementos que satisfazem a condição
// let itemFiltrado = produtos.filter(p => p.id === 3)
// console.log(itemFiltrado) // [{ id: 3, nome: "Tênis", preco: 89.99 }]

//SPLIT
// Divide uma string em um array com base em um separador

// let frase = "JS é top."

// let palavras = frase.split(" ");// Se tirar o espaço entre as aspas, ele vai separar cada letra em um índice do array
// console.log(palavras); // ["JS", "é", "top."]

//TRIM
// Remove espaços em branco no início e no final de uma string
// let nome = "   Diogo   "
// let nomeLimpo = nome.trim()
// console.log(nome) // "   Diogo   "
// console.log(nomeLimpo) // "Diogo"

//INCLUDES
// Verifica se existe um valor dentro da lista e retorna true ou false
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"]
// let frutasInclude = frutas.includes("Banana")
// console.log(frutasInclude) // true

//LOWERCASE E UPPERCASE
// toLowerCase() -> Converte uma string para letras minúsculas
// toUpperCase() -> Converte uma string para letras maiúsculas
// let nome = "NEYTON"
// let cargo = "estudante"

// console.log(nome.toLowerCase()) // "neyton"
// console.log(cargo.toUpperCase()) // "ESTUDANTE"

//FOREACH
// Percorre uma lista e executa uma função para cada elemento
// let nomes = ["Diogo", "João", "Maria", "José"]
// nomes.forEach(nome => console.log(`Nome: ${nome}`)) // Nome: Diogo, Nome: João, Nome: Maria, Nome: José

//SOME
// Verifica se algum elemento da lista satisfaz a condição e retorna true ou false
// let numeros = [1, 3, 5, 8];
// let algumPar = numeros.some(num => num % 2 === 0);
// console.log(algumPar); // true, pois 8 é par

//EVERY
// Verifica se TODOS os elementos da lista satisfazem a condição e retorna true ou false
// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); // false, pois nem todos são pares

//SORT
// Ordena os elementos de uma lista com base em uma função de comparação
// let numeros = [5, 2, 9, 1, 5, 6];
// let letras = ["c", "a", "e", "b", "d"];

// // Ordenação crescente de números
// numeros.sort((a, b) => a - b);
// console.log(numeros); // [1, 2, 5, 5, 6, 9]

// // Ordenação crescente de letras
// letras.sort();
// console.log(letras); // ["a", "b", "c", "d", "e"]