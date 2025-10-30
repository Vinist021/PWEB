const janela = document.getElementById("janela");

janela.innerHTML = "abra a janela";


janela.addEventListener("mouseover", () => {
    janela.innerHTML = "A janela foi aberta!";
});

janela.addEventListener("click", () => {
    janela.innerHTML = "A janela foi quebrada!";
});

janela.addEventListener("mouseout", () => {
    janela.innerHTML = "Abra a janela";
});