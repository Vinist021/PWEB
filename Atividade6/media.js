let nomeAluno = prompt("Insira o nome do aluno");
let nota1 = parseFloat(prompt("Insira a nota 1"));
let nota2 = parseFloat(prompt("Insira a nota 2"));
let nota3 = parseFloat(prompt("Insira a nota 3"));
let nota4 = parseFloat(prompt("Insira a nota 4"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

document.getElementById("media").innerHTML += media;