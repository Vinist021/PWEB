let num1 = parseFloat(prompt("Insira o primeiro número"));
let num2 = parseFloat(prompt("Insira o segundo número"));

let soma = num1 + num2;
let subtracao = num1 - num2;
let produto = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

document.getElementById("soma").innerHTML += soma;
document.getElementById("subtracao").innerHTML += subtracao;
document.getElementById("produto").innerHTML += produto;
document.getElementById("divisao").innerHTML += divisao;
document.getElementById("resto").innerHTML += resto;
