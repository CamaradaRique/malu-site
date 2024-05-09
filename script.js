alterarBackground(1)
alterarBanner(1)



const slider =
    document.querySelector('.conteudo');
const setaEsquerda =
    document.querySelector('.seta-esquerda');
const setaDireita =
    document.querySelector('.seta-direita');
const heading =
    document.querySelector('.titulo-slide');
const description =
    document.querySelector('.descricao-slide');

const images = [
    "bg1.png", "bg2.png", "bg3.png"
];

const headings = [
    "SOLUÇÕES JURIDICAS INTELIGENTES PERSONALIZADAS E HUMANIZADAS", 
    "9 ANOS DE EXPERIÊNCIA TRABALHISTA E PREVIDÊNCIÁRIA E CONTAMOS COM OUTAS 4 ÁREAS DE ATUAÇÃO", 
    "ATENDEMOS EM TODO O BRASIL, ATRAVÉS DE TECNOLOGIAS DIGITAIS!"
];

const descriptions = [
    "Atendemos nossos clientes de forma pessoal, obedecendo o Estatuto da OAB e o Contrato",
    "Atendemos presencial em três em Belém-PA e Ananindeua-PA",
    "Com o processo 100% digital, aderimos às ferramentas digitais de fácil manuseio e facilitamos o fechamento de contratos em qualquer lugar do Brasil"
];

function alterarBackground(id) {
    // Seleciona o elemento .conteudo
    var conteudo = document.querySelector('.conteudo');

    // Acessa o estilo do pseudo-elemento ::before
    var estiloBefore = window.getComputedStyle(conteudo, '::before');

    // Define a nova URL para o background-image do pseudo-elemento ::before
    conteudo.style.setProperty('--background-img-before', `url(img/bg${id}.png`);

    
}

function alterarBanner(id) {
    // Seleciona a imagem pelo ID
    var img = document.querySelector(".img-slide");

    // Define o novo caminho da imagem
    var novoCaminho = `img/banner${id}.png`;

    // Altera o atributo src da imagem para o novo caminho
    img.src = novoCaminho;
}



let id = 0;


function slide(id) {
    alterarBackground(id+1)
    alterarBanner(id+1)
    

    slider.classList.add('image-fade');

    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);

    heading.innerText =headings[id];

    description.innerText = descriptions[id];
}

setaEsquerda.addEventListener('click', () => {

    id--;

    if(id < 0) {

        id = images.length - 1;
    }

    slide(id);
})

setaDireita.addEventListener('click', () => {
    id++;

    if(id > images.length - 1) {
        id = 0;
    }

    slide(id);
})

