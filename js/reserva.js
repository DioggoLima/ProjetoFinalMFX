// js/reserva.js

document.addEventListener("DOMContentLoaded", () => {
    const detalhesContainer = document.getElementById('detalhes-reserva');
    const btnConfirmar = document.getElementById('confirmar-reserva');

    // 1. Recupera os dados da reserva
    const dadosReservaString = localStorage.getItem('reserva');

    if (dadosReservaString) {
        const dadosReserva = JSON.parse(dadosReservaString);

        // 2. Usa a mesma função buscarProdutos() do quarto.js
        const quartos = buscarProdutos(); // Certifique-se de que buscarProdutos está disponível

        // 3. Encontra o quarto pelo ID
        const quartoSelecionado = quartos.find(q => q.id == dadosReserva.id);

        if (quartoSelecionado) {
            // 4. Exibe os detalhes da reserva
            detalhesContainer.innerHTML = `
                <h2>Reserva confirmada para o ${quartoSelecionado.nome}</h2>
                <img src="${quartoSelecionado.img}" alt="${quartoSelecionado.nome}" style="max-width: 30%; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>Destino:</strong> ${dadosReserva.destino}</p>
                <p><strong>Check-in:</strong> ${dadosReserva.checkin}</p>
                <p><strong>Check-out:</strong> ${dadosReserva.checkout}</p>
                <p><strong>Hóspedes:</strong> ${dadosReserva.pessoas}</p>
                <h3>Preço por noite: ${quartoSelecionado.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
            `;
        } else {
            detalhesContainer.innerHTML = `<p>Erro: Quarto não encontrado.</p>`;
        }
    } else {
        detalhesContainer.innerHTML = `<p>Nenhum dado de reserva encontrado. Volte à página inicial para fazer uma nova reserva.</p>`;
        if (btnConfirmar) btnConfirmar.style.display = 'none';
    }

    // 5. Botão de confirmação
    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', () => {
            localStorage.removeItem('reserva');
            alert('Reserva confirmada com sucesso!');
            window.location.href = 'index.html';
        });
    }
});
