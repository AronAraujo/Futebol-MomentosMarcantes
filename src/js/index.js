const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informações")

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarbtnSelecionado();
        marcarBtnSelecionado(botao);

        removerImagemAtiva();
        mostrarImagemdeFundo(indice);

        esconderInfoAtivas();
        mostrarInfo(indice);

    });
});

function marcarBtnSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInfo(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInfoAtivas() {
    const iAtv = document.querySelector(".informações.ativa");
    iAtv.classList.remove("ativa");
}

function mostrarImagemdeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function removerImagemAtiva() {
    const imgAtiva = document.querySelector(".imagem.ativa");
    imgAtiva.classList.remove("ativa");
}

function desativarbtnSelecionado(){
    const btsl = document.querySelector(".selecionado");
    btsl.classList.remove("selecionado");
    
}

