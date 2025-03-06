// Função para mostrar a opção clicada
function mostrarMensagem(opcao) {
    document.getElementById("mensagem").innerText = "Você escolheu: " + opcao;
}

// Adicionando os eventos de clique nos botões
document.getElementById("wandinha").addEventListener("click", function () {
    mostrarMensagem("Wandinha");
});

document.getElementById("neymar").addEventListener("click", function () {
    mostrarMensagem("Neymar");
});
