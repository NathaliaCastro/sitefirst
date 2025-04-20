document.addEventListener("DOMContentLoaded", function () {
    // Seleciona elementos do DOM
    const nav = document.querySelector('nav'); // Menu de navegação
    const header = document.querySelector('header'); // Cabeçalho
    const body = document.body; // Corpo da página
    const headerHeight = header.offsetHeight; // Altura do cabeçalho

    // Função para fixar o menu ao rolar a página
    function checkScroll() {
        if (window.scrollY > headerHeight) {
            nav.classList.add('fixed-menu');
            body.classList.add('menu-fixed');
        } else {
            nav.classList.remove('fixed-menu');
            body.classList.remove('menu-fixed');
        }
    }

    // Menu Mobile
    document.getElementById('toggle').addEventListener('change', function() {
        document.querySelector('.header-menu').classList.toggle('active');
    });
  
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
    });

    // Adiciona o evento de scroll para fixar o menu
    window.addEventListener('scroll', checkScroll);

    // Fechar menu ao clicar em links
    document.querySelectorAll('.header-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.getElementById('toggle').checked = false;
                document.querySelectorAll('.has-submenu').forEach(sub => {
                    sub.classList.remove('active');
                });
            }
        });
    });
	
	// Fechar o menu ao clicar em um link (para dispositivos móveis)
    document.querySelectorAll('.header-menu a').forEach(link => {
        link.addEventListener('click', () => {
          document.querySelector('.header-menu').classList.remove('active');
        });
      });
	  
	      /*document.querySelectorAll('.header-menu a').forEach(link => {
            link.addEventListener('click', () => {
            document.getElementById('toggle').checked = false;
            });
	      });*/

    // Scroll suave para links do menu
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link
            const targetId = this.getAttribute('href'); // Obtém o ID da seção
            const targetSection = document.querySelector(targetId); // Seleciona a seção
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
            }
        });
    });
});