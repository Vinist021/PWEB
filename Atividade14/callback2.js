function exibeMensagensNaOrdem(mensagem, callack) {
    console.log(mensagem);
    callack();
}

exibeMensagensNaOrdem("Essa é a primeira mensagem exibida na ordem", function(){ 
    console.log("Essa é a segunda mensagem exibida na ordem");
});