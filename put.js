async function updatePost() {
    let id = document.querySelector("#put-id").value
    let name = document.querySelector("#put-title").value
    let price = document.querySelector("#put-price").value
    let description = document.querySelector("#put-description").value

    const atualizarProduto = {
        id: id,
        name: name, 
        description: description,
        price: price
    };

    if (id == "" || name == "" || description == "" || price == "") {
        alert("Preencha todos os campos")
        return;
    }

    const response = await fetch(`http://[::1]:4000/v1/quarto`, {
        method: "PUT",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(atualizarProduto)
    })

    const data = await response.json()

    alert("Atualizado com sucesso")
}