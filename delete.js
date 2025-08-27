async function deletePost() {
    let id = document.querySelector("#delete-id").value

    if (id == "") {
        alert("Preencha todos os campos")
        return;
    }

    const response = await fetch(`http://[::1]:4000/v1/quarto/delete/${id}`, {
        method: "DELETE"
    })

    if(response.ok) {
        alert("Deletado com sucesso")
    } else {
        alert("Não deletado")
    }
}