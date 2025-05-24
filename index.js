const botaoMenuMobile = document.querySelector('.botao-menu-mobile');
        const linksNavegacao = document.querySelector('.links-navegacao');

        botaoMenuMobile.addEventListener('click', () => {
            linksNavegacao.classList.toggle('active');
            botaoMenuMobile.innerHTML = linksNavegacao.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        document.querySelectorAll('.links-navegacao a').forEach(link => {
            link.addEventListener('click', () => {
                linksNavegacao.classList.remove('active');
                botaoMenuMobile.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        const cabecalho = document.getElementById('cabecalho');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                cabecalho.classList.add('scrolled');
            } else {
                cabecalho.classList.remove('scrolled');
            }
        });

        const elementosAparecer = document.querySelectorAll('.aparecer');

        const observador = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visivel');
                }
            });
        }, {
            threshold: 0.1
        });

        elementosAparecer.forEach(element => {
            observador.observe(element);
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });