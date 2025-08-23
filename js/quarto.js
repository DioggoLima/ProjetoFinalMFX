window.onload = () => {
    listaProdutos();

    const menuToggle = document.querySelector("#menu-toggle")
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}

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
    {
        id: 4,
        nome: "Quarto Búzios",
        img: "img/Designer (2).jpeg",
        preco: 200,
        descricao: "Quarto de hotel em Búzios",
    },
    {
        id: 5,
        nome: "Quarto Búzios",
        img: "img/Designer (2).jpeg",
        preco: 200,
        descricao: "Quarto de hotel em Búzios",
    },
    {
        id: 6,
        nome: "Quarto Búzios",
        img: "img/Designer (2).jpeg",
        preco: 200,
        descricao: "Quarto de hotel em Búzios",
    },
    {
        id: 7,
        nome: "Quarto Búzios",
        img: "img/Designer (2).jpeg",
        preco: 200,
        descricao: "Quarto de hotel em Búzios",
    },
    {
        id: 8,
        nome: "Quarto Tijuca",
        img: "img/Designer (3).jpeg",
        preco: 200,
        descricao: "Quarto de hotel em Tijuca",
    }
]

const listaProdutos = () => {
    const produtos = buscarProdutos()

    produtos.forEach(produto => montarProduto(produto, "container"))
}

const montarProduto = (produto, adicionar) => {
    const estrutura = `
        <div class="content">
            <img src=" ${produto.img}">
            <h2> ${produto.nome}</h2>
            <p> ${produto.descricao}</p>
            <p class="price"> R$ ${produto.preco},00 </p>
        </div>
    `;

    document.querySelector(`#${adicionar}`).innerHTML += estrutura
}