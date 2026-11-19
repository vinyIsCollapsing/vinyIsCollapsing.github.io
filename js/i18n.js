/* ============================================
   SISTEMA DE IDIOMAS: pt | en | fr
   ============================================ */

   const IDIOMAS_SUPORTADOS = ["pt", "en", "fr"];
   const IDIOMA_PADRAO = "pt";
   const LANG_HTML = { pt: "pt-BR", en: "en", fr: "fr" };
   
   const TRADUCOES = {
       pt: {
           "titulo": "Portfólio | VinyIsCollapsing — Robótica, 3D e Programação",
           "descricao": "Portfólio de VinyIsCollapsing, estudante de engenharia com projetos em robótica, modelagem 3D e programação.",
           "pular": "Pular para o conteúdo",
           "idioma_grupo": "Idioma",
           "menu_abrir": "Abrir menu",
           "tema_alternar": "Alternar tema",
           "topo_voltar": "Voltar ao topo",
           "subtitulo": "Desenvolvedor | Robótica, Modelagem 3D e Programação",
           "nav.sobre": "Sobre",
           "nav.projetos": "Projetos",
           "nav.contato": "Contato",
           "sobre.titulo": "Sobre mim",
           "sobre.habilidades": "Habilidades",
           "sobre.texto": "Bom dia, boa tarde ou boa noite. Estudante de engenharia com interesse em robótica, arte e programação. Nas horas vagas, faço análise informal precisa de eventos notáveis ou relacionamentos interpessoais, popularmente conhecida como fofoca. No expediente, faço engenharia.",
           "projetos.titulo": "Meus Projetos",
           "projetos.ver": "Ver no GitHub",
           "m3d.alt": "KUKA LBR4+ desenhando um círculo",
           "m3d.desc": "Modelagem cinemática e controle de um KUKA LBR4+ (7 eixos) em Octave. Inclui cinemática direta/inversa, Jacobiano e integração em tempo real com o CoppeliaSim.",
           "ep.alt": "Placas micro:bit sendo sincronizadas",
           "ep.desc": "Um pequeno enxame de placas BBC micro:bit v2 sem líder. Cada uma segue uma regra local simples, e, com o tempo, o grupo inteiro acaba trabalhando em conjunto.",
           "iso.desc": 'Protótipo de jogo isométrico 2D <br><b>Classe:</b> Protótipo <br><b>Nível:</b> 5 (13 testes, build reproduzível) <br><b>Alinhamento:</b> Neutro e Modular <br><b>Habilidades:</b> Geração Procedural, FSM de 8 Direções, Upcast de Resolução<br><b>Fraqueza:</b> Inimigos (ainda não implementados)<br><small style="color: #888; font-style: italic;">— Assinado: O Programador, responsável técnico pelo caos</small>',
           "perc.desc": "Projeto de percepção computacional em C++.",
           "poo.desc": "Projeto de Programação Orientada a Objetos e Modelagem em C++.",
           "contato.titulo": "Contato",
           "contato.texto": "Me encontre no"
       },
       en: {
           "titulo": "Portfolio | VinyIsCollapsing — Robotics, 3D and Programming",
           "descricao": "VinyIsCollapsing's portfolio, an engineering student with projects in robotics, 3D modeling and programming.",
           "pular": "Skip to content",
           "idioma_grupo": "Language",
           "menu_abrir": "Open menu",
           "tema_alternar": "Toggle theme",
           "topo_voltar": "Back to top",
           "subtitulo": "Developer | Robotics, 3D Modeling and Programming",
           "nav.sobre": "About",
           "nav.projetos": "Projects",
           "nav.contato": "Contact",
           "sobre.titulo": "About me",
           "sobre.habilidades": "Skills",
           "sobre.texto": "Good morning, good afternoon or good evening. Engineering student interested in robotics, art and programming. In my spare time, I conduct informal yet precise analysis of notable events and interpersonal relationships, popularly known as gossip. During working hours, I do engineering.",
           "projetos.titulo": "My Projects",
           "projetos.ver": "View on GitHub",
           "m3d.alt": "KUKA LBR4+ drawing a circle",
           "m3d.desc": "Kinematic modeling and control of a KUKA LBR4+ (7 axes) in Octave. Includes forward/inverse kinematics, the Jacobian and real-time integration with CoppeliaSim.",
           "ep.alt": "Synchronized micro:bit boards",
           "ep.desc": "A small leaderless swarm of BBC micro:bit v2 boards. Each one follows a simple local rule, and over time the whole group ends up working together.",
           "iso.desc": '2D isometric game prototype <br><b>Class:</b> Prototype <br><b>Level:</b> 5 (13 tests, reproducible build) <br><b>Alignment:</b> Neutral and Modular <br><b>Skills:</b> Procedural generation, 8-direction FSM, Resolution upcast<br><b>Weakness:</b> Enemies (not yet implemented)<br><small style="color: #888; font-style: italic;">— Signed: The Programmer, technical lead of the chaos</small>',
           "perc.desc": "Computer perception project in C++.",
           "poo.desc": "Object-oriented programming and modeling project in C++.",
           "contato.titulo": "Contact",
           "contato.texto": "Find me on"
       },
       fr: {
           "titulo": "Portfolio | VinyIsCollapsing — Robotique, 3D et Programmation",
           "descricao": "Portfolio de VinyIsCollapsing, étudiant en ingénierie avec des projets en robotique, modélisation 3D et programmation.",
           "pular": "Aller au contenu",
           "idioma_grupo": "Langue",
           "menu_abrir": "Ouvrir le menu",
           "tema_alternar": "Changer le thème",
           "topo_voltar": "Retour en haut",
           "subtitulo": "Développeur | Robotique, Modélisation 3D et Programmation",
           "nav.sobre": "À propos",
           "nav.projetos": "Projets",
           "nav.contato": "Contact",
           "sobre.titulo": "À propos de moi",
           "sobre.habilidades": "Compétences",
           "sobre.texto": "Bonjour, bon après-midi ou bonsoir. Étudiant en ingénierie passionné par la robotique, l'art et la programmation. Pendant mon temps libre, je mène une analyse informelle mais précise d'événements notables et de relations interpersonnelles, communément appelée commérage. Pendant mes heures de travail, je fais de l'ingénierie.",
           "projetos.titulo": "Mes projets",
           "projetos.ver": "Voir sur GitHub",
           "m3d.alt": "KUKA LBR4+ dessinant un cercle",
           "m3d.desc": "Modélisation cinématique et commande d'un KUKA LBR4+ (7 axes) sous Octave. Comprend la cinématique directe/inverse, le Jacobien et l'intégration en temps réel avec CoppeliaSim.",
           "ep.alt": "Cartes micro:bit synchronisées",
           "ep.desc": "Un petit essaim sans chef de cartes BBC micro:bit v2. Chacune suit une règle locale simple et, avec le temps, le groupe entier finit par travailler ensemble.",
           "iso.desc": 'Prototype de jeu isométrique 2D <br><b>Classe :</b> Prototype <br><b>Niveau :</b> 5 (13 tests, build reproductible) <br><b>Alignement :</b> Neutre et Modulaire <br><b>Compétences :</b> Génération procédurale, FSM à 8 directions, Upcast de résolution<br><b>Faiblesse :</b> Ennemis (pas encore implémentés)<br><small style="color: #888; font-style: italic;">— Signé : Le Programmeur, responsable technique du chaos</small>',
           "perc.desc": "Projet de perception par ordinateur en C++.",
           "poo.desc": "Projet de programmation orientée objet et modélisation en C++.",
           "contato.titulo": "Contact",
           "contato.texto": "Retrouvez-moi sur"
       }
   };
   
   let idiomaAtual = IDIOMA_PADRAO;
   
   function detectarIdioma() {
       try {
           const salvo = localStorage.getItem("idioma");
           if (IDIOMAS_SUPORTADOS.includes(salvo)) return salvo;
       } catch (e) {}
   
       const navegador = (navigator.language || IDIOMA_PADRAO).slice(0, 2).toLowerCase();
       return IDIOMAS_SUPORTADOS.includes(navegador) ? navegador : IDIOMA_PADRAO;
   }
   
   function traduzir(chave) {
       const atual = TRADUCOES[idiomaAtual] || {};
       return atual[chave] || TRADUCOES[IDIOMA_PADRAO][chave] || chave;
   }
   
   function aplicarTraducoes() {
       document.documentElement.lang = LANG_HTML[idiomaAtual];
   
       document.querySelectorAll("[data-i18n]").forEach(function (el) {
           el.textContent = traduzir(el.dataset.i18n);
       });
   
       // Conteúdo estático do próprio projeto (não vem do usuário)
       document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
           el.innerHTML = traduzir(el.dataset.i18nHtml);
       });
   
       document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
           el.alt = traduzir(el.dataset.i18nAlt);
       });
   
       document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
           el.setAttribute("aria-label", traduzir(el.dataset.i18nAria));
       });
   
       document.title = traduzir("titulo");
       const meta = document.querySelector('meta[name="description"]');
       if (meta) meta.setAttribute("content", traduzir("descricao"));
   
       document.querySelectorAll(".idioma-btn").forEach(function (btn) {
           const ativo = btn.dataset.idioma === idiomaAtual;
           btn.classList.toggle("ativo", ativo);
           btn.setAttribute("aria-pressed", ativo);
       });
   }
   
   function definirIdioma(lang) {
       if (!IDIOMAS_SUPORTADOS.includes(lang)) return;
       idiomaAtual = lang;
       try { localStorage.setItem("idioma", lang); } catch (e) {}
       aplicarTraducoes();
       document.dispatchEvent(new CustomEvent("idiomaAlterado", { detail: lang }));
   }
   
   document.addEventListener("DOMContentLoaded", function () {
       idiomaAtual = detectarIdioma();
       aplicarTraducoes();
   
       document.querySelectorAll(".idioma-btn").forEach(function (btn) {
           btn.addEventListener("click", function () {
               definirIdioma(btn.dataset.idioma);
           });
       });
   });