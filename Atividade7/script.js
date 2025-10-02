function jogar() {
    const escolhaUsuario = document.getElementById('escolha').value;
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = 'Empate!';
    }
    else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você ganhou!';
    } else {
        resultado = 'Você perdeu!';
    }

    alert(`Você escolheu: ${escolhaUsuario}\nComputador escolheu: ${escolhaComputador}\n${resultado}`);
}