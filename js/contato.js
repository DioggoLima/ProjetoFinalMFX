function enviarWhats(event) {
    event.preventDefault();
    
    const nome = document.querySelector("#nome").value;
    const mensagem = document.querySelector("#mensagem").value;
    const telefone = '5511998457992';

    const texto = `Olá, Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    console.log(url);

    window.open(url, '_blank')

    document.querySelector("#nome").value = "";
    document.querySelector("#mensagem").value = "";
}

window.onload = () => {
    const menuToggle = document.querySelector("#menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}