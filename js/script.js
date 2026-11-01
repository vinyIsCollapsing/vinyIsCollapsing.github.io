document.addEventListener("DOMContentLoaded", function () {

    /* ============================================
       1. TEMA CLARO / ESCURO
       ============================================ */
    const temaToggle = document.querySelector(".tema-toggle");

    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark");
        temaToggle.textContent = "☀️";
    }

    temaToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        const escuro = document.body.classList.contains("dark");
        temaToggle.textContent = escuro ? "☀️" : "🌙";
        localStorage.setItem("tema", escuro ? "dark" : "light");
    });


    /* ============================================
       2. MENU MOBILE
       ============================================ */
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("aberto");
            const aberto = nav.classList.contains("aberto");
            menuToggle.setAttribute("aria-expanded", aberto);
        });
    }


    /* ============================================
       3. BOTÃO VOLTAR AO TOPO
       ============================================ */
    const voltarTopo = document.querySelector(".voltar-topo");

    if (voltarTopo) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {   // ← scrollY, não scrollX!
                voltarTopo.classList.add("visivel");
            } else {
                voltarTopo.classList.remove("visivel");
            }
        });

        voltarTopo.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }


    /* ============================================
       4. ANIMAÇÃO DOS CARDS AO ROLAR
       ============================================ */
    const observerCards = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observerCards.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".projeto").forEach(function (card) {
        observerCards.observe(card);
    });


    /* ============================================
       5. ANIMAÇÃO MÁQUINA DE ESCREVER (persistente)
       ============================================ */
    const texto = "Bom dia, boa tarde ou boa noite. Estudante de engenharia com interesse em robótica, arte e programação. Nas horas vagas, eu trabalho como fofoqueiro profissional. Nas horas não vagas, eu trabalho como um profissional fofoqueiro.";
    const elementoTexto = document.getElementById("texto-digitado");
    const elementoCursor = document.querySelector(".cursor");
    const CHAVE_ANIMACAO = "animacaoTextoConcluida";

    const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function jaViuAnimacao() {
        try {
            return localStorage.getItem(CHAVE_ANIMACAO) === "sim";
        } catch (e) {
            return false;
        }
    }

    function marcarComoVista() {
        try {
            localStorage.setItem(CHAVE_ANIMACAO, "sim");
        } catch (e) {
            // localStorage indisponível — ignora silenciosamente
        }
    }

    function mostrarTextoDireto() {
        if (elementoTexto) elementoTexto.textContent = texto;
        if (elementoCursor) elementoCursor.style.display = "none";
    }

    function iniciarAnimacao() {
        if (!elementoTexto) return;

        // Já viu ou prefere menos movimento → mostra direto
        if (jaViuAnimacao() || reduzMovimento) {
            mostrarTextoDireto();
            return;
        }

        // Prepara para animar
        let indice = 0;
        elementoTexto.textContent = "";
        if (elementoCursor) elementoCursor.style.display = "inline-block";

        function digitar() {
            if (indice < texto.length) {
                const caractere = texto[indice];
                elementoTexto.textContent += caractere;
                indice++;
                const pausa = /[.,!?]/.test(caractere) ? 300 : 40;
                setTimeout(digitar, pausa);
            } else {
                // Terminou → marca como vista e esconde o cursor
                marcarComoVista();
                if (elementoCursor) elementoCursor.style.display = "none";
            }
        }

        // Inicia só quando a seção entra na tela
        const observerTexto = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    digitar();
                    observerTexto.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.5 });

        observerTexto.observe(elementoTexto.closest("section"));
    }

    iniciarAnimacao();

    // Replay: reseta o localStorage e rola até a seção
    const replayBtn = document.querySelector(".replay-animacao");
    if (replayBtn) {
        replayBtn.addEventListener("click", function () {
            try {
                localStorage.removeItem(CHAVE_ANIMACAO);
            } catch (e) {}

            if (elementoTexto) elementoTexto.textContent = "";
            if (elementoCursor) elementoCursor.style.display = "inline-block";

            const secaoSobre = document.getElementById("sobre");
            if (secaoSobre) {
                secaoSobre.scrollIntoView({ behavior: "smooth" });
                setTimeout(iniciarAnimacao, 600);
            } else {
                iniciarAnimacao();
            }
        });
    }

});