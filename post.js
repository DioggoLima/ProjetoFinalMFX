async function createPost() {
    let nome = document.querySelector("#post-title").value
    let preco = document.querySelector("#post-price").value
    let imagem = document.querySelector("#post-url").value

    const novoProduto = {
        nome: nome, 
        preco: preco,
        img: imagem
    };

    if (nome == "" || preco == "" || imagem == "") {
        alert("Preencha todos os campos")
        return;
    }

    const response = await fetch("http://[::1]:4000/v1/quarto", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(novoProduto)
    })

    const data = await response.json()

    alert("Criado com sucesso")
}