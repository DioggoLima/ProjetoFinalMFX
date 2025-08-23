document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA PARA O MENU HAMBÚRGUER ---
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }

    // --- CÓDIGO PARA O CALENDÁRIO ESTILO AIRBNB (LITEPICKER) ---
    // Verificamos se os elementos existem antes de criar o calendário para evitar erros em outras páginas
    if (document.getElementById('checkin') && document.getElementById('checkout')) {
        const picker = new Litepicker({
            element: document.getElementById('checkin'),
            elementEnd: document.getElementById('checkout'),
            singleMode: false,
            numberOfMonths: 2,
            format: 'DD/MM/YYYY',
            lang: 'pt-BR',
            buttonText: {
                previousMonth: `<i class="fas fa-chevron-left"></i>`, // Ícone de seta (requer FontAwesome)
                nextMonth: `<i class="fas fa-chevron-right"></i>`,    // Ícone de seta (requer FontAwesome)
                apply: 'Aplicar',
                cancel: 'Cancelar',
            },
        });
    }

    // --- DADOS DOS QUARTOS (USADO PELA LÓGICA DE RESERVA) ---
    const quartos = [
        {
            id: 1,
            titulo: "Praia do Sol, Brasil",
            descricao: "Quarto aconchegante pé na areia...",
            preco: 450,
            imagem: "img/room01.png"
        },
        {
            id: 2,
            titulo: "Praia Bonita, Brasil",
            descricao: "Quarto para sua família curtir as férias...",
            preco: 450,
            imagem: "img/room02.png"
        }
    ];

    // --- LÓGICA DA RESERVA (LIGA OS BOTÕES "RESERVE JÁ") ---
    const botoesReserva = document.querySelectorAll('.buttonReservaStyle');

    botoesReserva.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            
            // 1. Capturar os dados do formulário
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;
            const pessoas = document.getElementById('pessoas').value;

            // Validação para garantir que os campos foram preenchidos
            if (!checkin || !checkout || !pessoas) {
                alert('Por favor, preencha as datas de Check-in, Check-out e o número de hóspedes antes de reservar.');
                return; // Impede a continuação do código
            }
            
            // 2. Identificar qual quarto foi clicado
            const quartoId = evento.target.getAttribute('data-id');

            // 3. Montar o objeto da reserva
            const dadosReserva = {
                quartoId: parseInt(quartoId),
                checkin: checkin,
                checkout: checkout,
                pessoas: pessoas
            };

            // 4. Salvar no localStorage
            localStorage.setItem('reserva', JSON.stringify(dadosReserva));

            // 5. Redirecionar para a página de confirmação
            window.location.href = 'reserva.html';
        });
    });

}); 