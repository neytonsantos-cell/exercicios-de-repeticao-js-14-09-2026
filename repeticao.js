//! Exercícios de Repetição

//? Nível Básico

//* 1. Contagem de 1 a 10:
//*     - Use um "for" para exibir os números de 1 a 10 no console.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//* 2. **Tabuada de um número:**
    //*     - Peça um número ao usuário.
    //*     - Exiba a tabuada desse número de 1 a 10 usando um `for`.
// const numero = parseInt(prompt("Digite um número:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// * 3. Soma dos primeiros N números naturais:
//*     - Peça um número `N` ao usuário.
//*     - Use um `while` ou `for` para somar os números de `1` até `N`.
//*     - Exemplo:
//*         - Se um usuário inserir o número 4, o código deverá fazer a soma do 1, 2, 3 e 4 totalizando **10**.
//*         - Se um usuário inserir o número 6, o código deverá fazer a soma do 1, 2, 3, 4 , 5 e 6 totalizando **21**.
// const n = parseInt(prompt("Digite um número:"));
// let soma = 0;

// for (let i = 1; i <= n; i++) {
//     soma += i;
// }

// console.log(`A soma dos primeiros ${n} números naturais é: ${soma}`);

//? Nível Intermediário

// * 1. Exibir os números pares de 1 a 50:
// *    - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.
// for (let i = 2; i <= 50; i += 2) {
//     console.log(i);
// }

//* 2. Jogo de adivinhação:
// *    - Gere um número aleatório de 1 a 100.
//  *   - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//   *  - Informe se o número inserido é maior ou menor que o correto.
// let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
// while (palpite !== numeroAleatorio) {
//     if (palpite < numeroAleatorio) {
//         palpite = parseInt(prompt("O número é maior. Tente novamente:"));
//     } else {
//         palpite = parseInt(prompt("O número é menor. Tente novamente:"));
//     }
// }
// console.log("Parabéns! Você acertou o número. O número correto era: " + numeroAleatorio);

//* 3. Contagem regressiva:
//*     - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.
// const numero = parseInt(prompt("Digite um número:"));
// let i = numero;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

//* 4. Validção de senha
    //* - Crie uma senha fixa (ex: "1234")
    //* - Peça ao usuário até ele acertar
    //* - Use `while`
// const senhaFixa = "1234";
// let senhaUsuario = prompt("Digite a senha:");
// while (senhaUsuario !== senhaFixa) {
//     senhaUsuario = prompt("Senha incorreta. Tente novamente:");
// }
// console.log("Senha correta! Bem-vindo.");

//* 5. Soma até parar
//*     - Peça números ao usuário
//*     - Continue somando até ele digitar 0
//*     - Mostre o total no final
// let total = 0;
// let numero = parseInt(prompt("Digite um número (0 para parar):"));
// while (numero !== 0) {
//     total += numero;
//     numero = parseInt(prompt("Digite um número (0 para parar):"));
// }
// console.log(`O total é: ${total}`);

//* 6. Média de valores
//*     - Peça 3 números ao usuário
//*     - Calcule e mostre a média usando repetição
// let soma = 0;
// for (let i = 1; i <= 3; i++) {
//     let numero = parseFloat(prompt(`Digite o ${i}º número:`));
//     soma += numero;
// }
// let media = soma / 3;
// console.log(`A média dos números é: ${media}`);

//? Nível Avançado

//* 1. Soma dos dígitos de um número:
//*     - Peça ao usuário um número inteiro positivo.
//*     - Use um `while` para somar seus dígitos.
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let soma = 0;
while (numero > 0) {
    soma += numero % 10;
    numero = Math.floor(numero / 10);
}
console.log(`A soma dos dígitos é: ${soma}`);