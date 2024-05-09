function alterarBanner() {
    // Seleciona a imagem pelo ID
    var img = document.querySelector(".img-slide");

    // Define o novo caminho da imagem
    var novoCaminho = `img/banner${1}.jpg`;

    // Altera o atributo src da imagem para o novo caminho
    img.src = novoCaminho;
}

alterarBanner()