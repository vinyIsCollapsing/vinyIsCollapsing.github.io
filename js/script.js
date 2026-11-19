document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.classList.add("js");

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
    
    function fecharMenu() {
        if (!nav || !menuToggle) return;
        nav.classList.remove("aberto");
        menuToggle.setAttribute("aria-expanded", "false");
    }
    
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            const aberto = nav.classList.toggle("aberto");
            menuToggle.setAttribute("aria-expanded", aberto);
        });
    
        // Fecha ao clicar em qualquer link do menu
        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", fecharMenu);
        });
    
        // Fecha com a tecla Esc
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") fecharMenu();
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
       5. ANIMAÇÃO MÁQUINA DE ESCREVER (persistente + i18n)
       ============================================ */
       const elementoTexto = document.getElementById("texto-digitado");
       const elementoCursor = document.querySelector(".cursor");
       const CHAVE_ANIMACAO = "animacaoTextoConcluida";
       const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
   
       let animando = false;
       let timerDigitacao = null;
   
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
           } catch (e) {}
       }
   
       function mostrarTextoDireto() {
           clearTimeout(timerDigitacao);
           animando = false;
           if (elementoTexto) elementoTexto.textContent = traduzir("sobre.texto");
           if (elementoCursor) elementoCursor.style.display = "none";
       }
   
       function iniciarAnimacao() {
           if (!elementoTexto) return;
   
           if (jaViuAnimacao() || reduzMovimento) {
               mostrarTextoDireto();
               return;
           }
   
           const texto = traduzir("sobre.texto");
           let indice = 0;
           animando = true;
           elementoTexto.textContent = "";
           if (elementoCursor) elementoCursor.style.display = "inline-block";
   
           function digitar() {
               if (!animando) return;
   
               if (indice < texto.length) {
                   const caractere = texto[indice];
                   elementoTexto.textContent += caractere;
                   indice++;
                   const pausa = /[.,!?]/.test(caractere) ? 300 : 40;
                   timerDigitacao = setTimeout(digitar, pausa);
               } else {
                   animando = false;
                   marcarComoVista();
                   if (elementoCursor) elementoCursor.style.display = "none";
               }
           }
   
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
   
       // Ao trocar de idioma: se a digitação estiver em andamento, mostra o texto completo
       // no novo idioma; caso contrário, apenas atualiza o texto já exibido.
       document.addEventListener("idiomaAlterado", function () {
           if (animando) {
               mostrarTextoDireto();
           } else if (elementoTexto) {
               elementoTexto.textContent = traduzir("sobre.texto");
           }
       });
   
   });