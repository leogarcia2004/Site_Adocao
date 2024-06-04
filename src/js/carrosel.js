


const botaoVoltar = document.querySelector('.botao-voltar-imagem');
const botaoPassar = document.querySelector('.botao-passagem-imagem');
const imagensAnimais = document.querySelectorAll('.imagem-animal');
const botoesCarrosel = document.querySelectorAll('.botao-carrosel');


const imagens = ['imagem_gato1_secao2', 'imagem_gato2_secao2', 'imagem_cachorro1_secao2', 'imagem_cachorro2_secao2', 'imagem_cachorro2'];
const totalImagens = imagens.length;
let i = 0;

const atualizarImagens = () => {
    for (let j = 0; j < 4; j++) {
        const imgIndex = (i + j) % totalImagens;
        imagensAnimais[j].src = `imagens/${imagens[imgIndex]}.png`;
    }

    atualizarBotoesCarrosel();
};

const atualizarBotoesCarrosel = () => {
    botoesCarrosel.forEach((botao, index) => {
        if (index === i) {
            botao.classList.add('selecionado');
        } else {
            botao.classList.remove('selecionado');
        }
    });
};

botaoVoltar.addEventListener('click', () => {
    i = (i - 1 + totalImagens) % totalImagens;
    atualizarImagens();
});

botaoPassar.addEventListener('click', () => {
    i = (i + 1) % totalImagens;
    atualizarImagens();
});

botoesCarrosel.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        i = index;
        atualizarImagens();
    });
});

atualizarImagens();