// ========================================
// ABRIR A MENSAGEM
// ========================================

const botaoAbrir = document.getElementById("abrirMensagem");
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");

botaoAbrir.addEventListener("click", () => {

    // Esconde a tela inicial
    inicio.style.display = "none";

    // Mostra a carta
    carta.style.display = "block";

    // Volta para o começo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});