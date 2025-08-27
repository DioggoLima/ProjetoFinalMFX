// window.onload = () => {
//     listaProdutos();

//     const menuToggle = document.querySelector("#menu-toggle");
//     const menu = document.querySelector(".menu");

//     menuToggle.addEventListener('click', () => {
//         menu.classList.toggle('show');
//     });
// }

// const buscarProdutos = () => [
//     {
//         id: 1,
//         nome: "Quarto Ipanema",
//         img: "img/Designer.jpeg",
//         preco: 200,
//         descricao: "Quarto de hotel em Ipanema",
//     },
//     {
//         id: 2,
//         nome: "Quarto Copacabana",
//         img: "img/Designer (1).jpeg",
//         preco: 200,
//         descricao: "Quarto de hotel em Copacabana",
//     },
//     {
//         id: 3,
//         nome: "Quarto Búzios",
//         img: "img/Designer (2).jpeg",
//         preco: 200,
//         descricao: "Quarto de hotel em Búzios",
//     },
//     {
//         id: 4,
//         nome: "Quarto Búzios",
//         img: "img/Designer (2).jpeg",
//         preco: 200,
//         descricao: "Quarto de hotel em Búzios",
//     },
//     {
//         id: 5,
//         nome: "Quarto Búzios",
//         img: "img/Designer (2).jpeg",
//         preco: 200,
//         descricao: "Quarto de hotel em Búzios",
//     },
//     {
//         id: 6,
//         nome: "Quarto Búzios",
//         img: "img/Designer (2).jpeg",
//         preco: 200,
//         descricao: "Quarto de hotel em Búzios",
//     },
//     {
//         id: 7,
//         nome: "Quarto Búzios",
//         img: "img/Designer (2).jpeg",
//         preco: 200,
//         descricao: "Quarto de hotel em Búzios",
//     }
// ]

// const listaProdutos = () => {
//     const produtos = buscarProdutos();
//     produtos.forEach(produto => montarProduto(produto, "container"));
//     adicionarEventoReservaCard(); // Adiciona os eventos após renderizar os cards
// }

// const montarProduto = (produto, adicionar) => {
//     const estrutura = `
//         <div class="content">
//             <img src="${produto.img}">
//             <h2>${produto.nome}</h2>
//             <p>${produto.descricao}</p>
//             <p class="price">R$ ${produto.preco},00</p>
//             <button class="reserve-card" data-id="${produto.id}">Reserve já</button>
//         </div>
//     `;
//     document.querySelector(`#${adicionar}`).innerHTML += estrutura;
// }

// function adicionarEventoReservaCard() {
//     const buttons = document.querySelectorAll('.reserve-card');
//     buttons.forEach(btn => {
//         btn.addEventListener('click', function () {
//             const card = btn.closest('.content');
//             const nomeQuarto = card.querySelector('h2').textContent.trim();
//             const precoQuarto = card.querySelector('.price').textContent.trim();
//             const produtoId = btn.getAttribute('data-id');

//             const destino = document.getElementById('destino')?.value.trim();
//             const checkin = document.getElementById('checkin')?.value.trim();
//             const checkout = document.getElementById('checkout')?.value.trim();
//             const pessoas = document.getElementById('pessoas')?.value.trim();

//             if (!destino || !checkin || !checkout || !pessoas) {
//                 alert('Por favor, preencha todos os campos do formulário antes de reservar.');
//                 return;
//             }

//             const reserva = {
//                 id: produtoId,
//                 quarto: nomeQuarto,
//                 preco: precoQuarto,
//                 destino,
//                 checkin,
//                 checkout,
//                 pessoas
//             };

//             localStorage.setItem('reserva', JSON.stringify(reserva));
//             window.location.href = 'reserva.html';
//         });
//     });
// }


window.onload = () => {
  listaProdutos();

  const menuToggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
};

const buscarProdutos = () => [
  {
    id: 1,
    nome: "Quarto Ipanema",
    img: "img/Designer.jpeg",
    preco: 200,
    descricao: "Quarto de hotel em Ipanema",
  },
  {
    id: 2,
    nome: "Quarto Copacabana",
    img: "img/Designer (1).jpeg",
    preco: 200,
    descricao: "Quarto de hotel em Copacabana",
  },
  {
    id: 3,
    nome: "Quarto Búzios",
    img: "img/Designer (2).jpeg",
    preco: 200,
    descricao: "Quarto de hotel em Búzios",
  },
];

const listaProdutos = () => {
  const produtos = buscarProdutos();
  produtos.forEach((produto) => montarProduto(produto, "container"));
  adicionarEventoReservaCard();
};

const montarProduto = (produto, adicionar) => {
  const estrutura = `
    <div class="content">
      <img src="${produto.img}">
      <h2>${produto.nome}</h2>
      <p>${produto.descricao}</p>
      <p class="price">R$ ${produto.preco},00</p>
      <button class="reserve-card" data-id="${produto.id}">Reserve já</button>
    </div>
  `;
  document.querySelector(`#${adicionar}`).innerHTML += estrutura;
};

function adicionarEventoReservaCard() {
  const buttons = document.querySelectorAll(".reserve-card");
  buttons.forEach((btn) => {
    btn.addEventListener("click", async function () {
      const card = btn.closest(".content");
      const nomeQuarto = card.querySelector("h2").textContent.trim();
      const produtoId = btn.getAttribute("data-id");

      const email = document.getElementById("email")?.value.trim();
      const destino = document.getElementById("destino")?.value.trim();
      const checkin = document.getElementById("checkin")?.value.trim();
      const checkout = document.getElementById("checkout")?.value.trim();
      const pessoas = document.getElementById("pessoas")?.value.trim();

      if (!email || !destino || !checkin || !checkout || !pessoas) {
        alert("Por favor, preencha todos os campos antes de reservar.");
        return;
      }

      try {
        // 1. Buscar cadastro pelo email
        const cadastroResponse = await fetch(
          `http://localhost:4000/v1/cadastro?email=${encodeURIComponent(email)}`
        );

        if (!cadastroResponse.ok) {
          throw new Error("Email não cadastrado. Faça o cadastro antes de reservar.");
        }

        const cadastro = await cadastroResponse.json();

        // 2. Calcular dias da reserva
        const dias = calcularDias(checkin, checkout);

        // 3. Montar objeto de reserva
        const reservaPayload = {
          cpf: cadastro.cpf,
          name: cadastro.name,
          email: email,
          room: nomeQuarto,
          days: dias,
        };

        // 4. Enviar reserva para o backend
        const reservaResponse = await fetch("http://localhost:4000/v1/reserva", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reservaPayload),
        });

        if (!reservaResponse.ok) {
          throw new Error("Erro ao salvar reserva.");
        }

        alert("Reserva confirmada com sucesso!");
        window.location.href = "index.html";
      } catch (error) {
        alert(`Erro: ${error.message}`);
      }
    });
  });
}

function calcularDias(checkin, checkout) {
  const entrada = new Date(checkin);
  const saida = new Date(checkout);
  const diff = Math.abs(saida - entrada);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
