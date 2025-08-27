    window.onload = async function getProdutos() {
    const response = await fetch("http://[::1]:4000/v1/quartos")

    if (!response.ok) {
        throw "Deu erro"
    }

    const data = await response.json()

    let container = document.querySelector("#get-cards")

    for (let i = 0; i < data.length; i++) {
        let produto = data[i];

        let card = `
        <div class="product-card">

            <img class="product-image" src="${produto.img}" alt="">
            <div class="product-info">
                <h2 class="product-title">${produto.nome}</h2>
                <p class="product-value">${produto.preco}</p>

            </div>
        </div>
        `;

        container.innerHTML += card;
    }
}

