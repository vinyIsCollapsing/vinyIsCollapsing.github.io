// Exemplo simples: mensagem no console
console.log("Bem-vindo ao meu portfólio!");

// Exemplo: mudar a cor do header ao rolar a página
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#0366d6";
    } else {
        header.style.backgroundColor = "#24292e";
    }
});