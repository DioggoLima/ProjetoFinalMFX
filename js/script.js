// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos necessários
    const btnNext = document.querySelector(".next");
    const btnBack = document.querySelector(".back");
    const items = document.querySelectorAll(".item");
    const thumbItems = document.querySelectorAll(".thumb-item");

    // Variável para controlar o índice atual do slide
    let currentIndex = 0;
    const totalItems = items.length;

    // Função para atualizar a exibição dos slides
    function updateSlides(newIndex) {
        // Remove a classe 'active' de todos os slides e miniaturas
        items.forEach(item => item.classList.remove('active'));
        thumbItems.forEach(thumb => thumb.classList.remove('active'));

        // Adiciona a classe 'active' ao slide e miniatura atuais
        items[newIndex].classList.add('active');
        thumbItems[newIndex].classList.add('active');

        // Atualiza o índice atual
        currentIndex = newIndex;
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        // Calcula o próximo índice (com loop)
        let newIndex = (currentIndex + 1) % totalItems;
        updateSlides(newIndex);
    }

    // Função para voltar ao slide anterior
    function prevSlide() {
        // Calcula o índice anterior (com loop)
        let newIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlides(newIndex);
    }

    // Adiciona eventos de clique aos botões de navegação
    btnNext.addEventListener('click', nextSlide);
    btnBack.addEventListener('click', prevSlide);

    // Adiciona eventos de clique às miniaturas
    thumbItems.forEach(thumb => {
        thumb.addEventListener('click', function () {
            // Obtém o índice da miniatura clicada
            const index = Number.parseInt(this.getAttribute('data-index'));
            updateSlides(index);
        });
    });

    // Inicializa o primeiro slide como ativo
    updateSlides(0);
});