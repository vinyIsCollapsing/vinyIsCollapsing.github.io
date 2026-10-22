document.addEventListener("DOMContentLoaded", function(){
    const nav = document.querySelector("nav");
    const secaoProjetos = document.querySelector("#projetos");
    const cards = document.querySelectorAll(".projeto");

    console.log("Nav:", nav);
    console.log("Seção projetos:", secaoProjetos);
    console.log("Quantidade de cards:", cards.length);
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function(){
    nav.classList.toggle("aberto");
    const open = nav.classList.contains("aberto");
    menuToggle.setAttribute("aria-expanded", open);
});

const voltarTopo = document.querySelector(".voltar-topo");

window.addEventListener("scroll", function(){
    if(window.scrollX > 300){
        voltarTopo.classList.add("visivel");
    } else {
        voltarTopo.classList.remove("visivel");
    }
});

voltarTopo.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observer.unobserve(entrada.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".projeto").forEach(function(card) {
    observer.observe(card);
});

const temaToggle = document.querySelector(".tema-toggle");

// Aplica tema salvo ao carregar
if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    temaToggle.textContent = "☀️";
}

temaToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    const escuro = document.body.classList.contains("dark");
    temaToggle.textContent = escuro ? "☀️" : "🌙";
    localStorage.setItem("tema", escuro ? "dark" : "light");
});