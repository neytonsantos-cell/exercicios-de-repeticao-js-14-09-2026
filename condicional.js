//! Exercícios de Condicionais

//? Nível Básico

//* 1. Verificar maioridade:
//*     1. Peça ao usuário uma idade.
//*     2. Use um `if-else` para verificar se ele é maior ou menor de idade.
// const idade = parseInt(prompt("Digite sua idade:"));
// if (idade >= 18) {
//     console.log("Você é maior de idade.");
// } else {
//     console.log("Você é menor de idade.");
// }

//* 2. Verificar se um número é positivo ou negativo:
//*     - Peça ao usuário para inserir um número.
//*     - Use um `if-else` para verificar se o número é positivo, negativo.
//*     - OBS: *Por hora* considere o 0 como sendo um número negativo.
// const numero = parseFloat(prompt("Digite um número:"));
// if (numero > 0) {
//     console.log("O número é positivo.");
// } else {
//     console.log("O número é negativo.");
// }

//* 3. Aprovação em uma prova:
//*     - O usuário insere a nota de um aluno (0 a 100).
//*     - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".
// let nota = parseFloat(prompt("Digite a nota do aluno (0 a 100):"));
// if (nota >= 60) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

//*4. Verificar se um número é positivo, negativo ou zero:
//*     - Peça ao usuário para inserir um número.
//*     - Use um `if-else` para verificar se o número é positivo, negativo ou zero.
// let numero = parseFloat(prompt("Digite um número:"));
// if (numero > 0) {
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é zero.");
// }

//* 5. Classificação de idade:
//*    - Peça ao usuário para inserir sua idade.
//*    - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).
// let idade = parseInt(prompt("Digite sua idade:"));
// if (idade >= 0 && idade <= 12) {
//     console.log("Criança");
// } else if (idade >= 13 && idade <= 17) {
//     console.log("Adolescente");
// } else if (idade >= 18) {
//     console.log("Adulto");
// }

//* 6. Verificar se um número é par ou ímpar:
//*    - Peça ao usuário para inserir um número.
//*    - Use o operador `%` para verificar se o número é divisível por 2.
// let numero = parseInt(prompt("Digite um número:"));
// if (numero % 2 === 0) {
//     console.log("O número é par.");
// } else {
//     console.log("O número é ímpar.");
// }

//? Nível Intermediário

//* 1. Calculadora simples:
//*    - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
//*    - Use um `if-else` para calcular o resultado e exibi-lo.
// let num = [0,0];
// let oper = 0;
// for (let i = 0; i <= 2; i++) {
//     if (i < 2) {
//         num[i] = parseFloat(prompt(`Digite o ${i + 1}º número:`));
//     } else {
//         oper = prompt("Digite a operação (+, -, *, /):");
//     }
// }
// if (oper === '+') {
//     console.log(`Resultado: ${num[0] + num[1]}`);
// } else if (oper === '-') {
//     console.log(`Resultado: ${num[0] - num[1]}`);
// }   else if (oper === '*') {
//     console.log(`Resultado: ${num[0] * num[1]}`);
// } else if (oper === '/') {
//     if (num[1] !== 0) {
//         console.log(`Resultado: ${num[0] / num[1]}`);
//     } else {
//         console.log("Erro: Divisão por zero não é permitida.");
//     }
// }

//* 2. **Maior entre três números:**
    //*    - O usuário insere três números.
    //*    - Use `if-else` para determinar e exibir o maior.
// let numeros = [];
// for (let i = 0; i < 3; i++) {
//     numeros[i] = parseFloat(prompt(`Digite o ${i + 1}º número:`));
// }
// if (numeros[0] >= numeros[1] && numeros[0] >= numeros[2]) {
//     console.log(`O maior número é: ${numeros[0]}`);
// } else if (numeros[1] >= numeros[0] && numeros[1] >= numeros[2]) {
//     console.log(`O maior número é: ${numeros[1]}`);
// } else {
//     console.log(`O maior número é: ${numeros[2]}`);
// }

//* 3. Desconto em compras:
//*    - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
//*    - Caso contrário, exiba o valor normal.
// let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
// if (valorCompra > 100) {
//     let valorComDesconto = valorCompra - (valorCompra * 0.1); // Aplica 10% de desconto
//     console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
// } else {
//     console.log(`Valor normal: R$ ${valorCompra.toFixed(2)}`);
// }

//* 4. Sistema de login simples:
//*    - O usuário insere um nome de usuário e senha.
//*    - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".
// let loginUsuario = [prompt("Digite o nome de usuário:"), prompt("Digite a senha:")];
// if (loginUsuario[0] === "admin" && loginUsuario[1] === "1234") {
//     console.log("Login bem-sucedido");
// } else {
//     console.log("Acesso negado");
// }

//? Nível Avançado

//* 1. Frete de pedido
//*    - Variável `valorCompra`
//*    - = 100 → frete grátis
//*    - = 50 → frete 10 reais
//*    - Senão → frete 20 reais
// let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
// if (valorCompra === 100) {
//     console.log("Frete grátis");
// } else if (valorCompra === 50) {
//     console.log("Frete: R$ 10,00");
// } else {
//     console.log("Frete: R$ 20,00");
// }

//* 2. Acesso por idade e convite
//*     - Variáveis `idade` e `temConvite`
//*     - Se idade >= 18 OU tem convite → pode entrar
//*     - Senão → barrado
// let idade = parseInt(prompt("Digite sua idade:"));
// let temConvite = prompt("Você tem convite? (sim/não)").toLowerCase() === "sim";
// if (idade >= 18 || temConvite) {
//     console.log("Pode entrar");
// } else {
//     console.log("Barrado");
// }

//* 3. Conversão de notas para conceitos:
//*     - O usuário insere uma nota (0-100).
//*     - Converta para conceitos:
//*         - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).
// let nota = parseFloat(prompt("Digite a nota (0-100):"));
// if (nota >= 90 && nota <= 100) {
//     console.log("Conceito: A");
// } else if (nota >= 80 && nota < 90) {
//     console.log("Conceito: B");
// } else if (nota >= 70 && nota < 80) {
//     console.log("Conceito: C");
// } else if (nota >= 60 && nota < 70) {
//     console.log("Conceito: D");
// } else {
//     console.log("Conceito: F");
// }

//* 4. Cálculo de IMC:
//*     - Peça peso e altura.
//*     - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.
// let peso = parseFloat(prompt("Digite seu peso (kg):"));
// let altura = parseFloat(prompt("Digite sua altura (m):"));
// let imc = peso / (altura * altura);
// if (imc < 18.5) {
//     console.log("IMC: " + imc.toFixed(2) + " - Abaixo do peso");
// } else if (imc >= 18.5 && imc < 25) {
//     console.log("IMC: " + imc.toFixed(2) + " - Peso normal");
// } else if (imc >= 25 && imc < 30) {
//     console.log("IMC: " + imc.toFixed(2) + " - Sobrepeso");
// } else {
//     console.log("IMC: " + imc.toFixed(2) + " - Obesidade");
// }

//* 5. Verificação de estoque
//*     - Variável `estoque`
//*     - 10 → “Produto disponível”
//*     - entre 1 e 10 → “Últimas unidades”
//*     - 0 → “Esgotado”
// let estoque = parseInt(prompt("Digite a quantidade em estoque:"));
// if (estoque >= 10) {
//     console.log("Produto disponível");
// } else if (estoque > 0 && estoque < 10) {
//     console.log("Últimas unidades");
// } else if (estoque === 0) {
//     console.log("Esgotado");
// }