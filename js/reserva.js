// js/reserva.js

document.addEventListener("DOMContentLoaded", () => {
    // É crucial ter a mesma lista de quartos aqui para que o script possa
    // encontrar as informações (título, preço, imagem) a partir do ID salvo.
    const quartos = [
        {
            id: 1,
            titulo: "Praia do Sol, Brasil",
            preco: 450,
            imagem: "img/room01.png"
        },
        {
            id: 2,
            titulo: "Praia Bonita, Brasil",
            preco: 450,
            imagem: "img/room02.png"
        }
    ];

    const detalhesContainer = document.getElementById('detalhes-reserva');
    const btnConfirmar = document.getElementById('confirmar-reserva');

    // 1. LÊ OS DADOS SALVOS NO LOCALSTORAGE
    const dadosReservaString = localStorage.getItem('reserva');

    if (dadosReservaString) {
        const dadosReserva = JSON.parse(dadosReservaString);

        // 2. ENCONTRA OS DETALHES DO QUARTO SELECIONADO NA LISTA
        const quartoSelecionado = quartos.find(quarto => quarto.id === dadosReserva.quartoId);

        if (quartoSelecionado) {
            // 3. EXIBE OS DETALHES NA PÁGINA
            detalhesContainer.innerHTML = `
                <h2>Sua estadia no ${quartoSelecionado.titulo}</h2>
                <img src="${quartoSelecionado.imagem}" alt="Foto do quarto ${quartoSelecionado.titulo}" style="max-width: 100%; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>Check-in:</strong> ${dadosReserva.checkin}</p>
                <p><strong>Check-out:</strong> ${dadosReserva.checkout}</p>
                <p><strong>Hóspedes:</strong> ${dadosReserva.pessoas}</p>
                <h3>Preço por noite: R$ ${quartoSelecionado.preco}</h3>
            `;
        } else {
            detalhesContainer.innerHTML = `<p>Erro: Quarto não encontrado.</p>`;
        }
    } else {
        detalhesContainer.innerHTML = `<p>Nenhum dado de reserva encontrado. Por favor, tente novamente a partir da página inicial.</p>`;
        if(btnConfirmar) btnConfirmar.style.display = 'none'; // Esconde o botão se não houver reserva
    }

    // 4. ADICIONA A FUNCIONALIDADE AO BOTÃO DE CONFIRMAÇÃO
    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', () => {
            // Limpa os dados para permitir uma próxima reserva
            localStorage.removeItem('reserva');
    
            alert('Reserva confirmada com sucesso! (Esta é uma simulação)');
            
            // Leva o usuário de volta para a página inicial
            window.location.href = 'index.html'; // Verifique se 'index.html' é o nome correto da sua página inicial
        });
    }
});