

const botoesApply = document.querySelectorAll('.botao-adocao');
const modalApply = document.querySelector('.modal-apply');
const botaoFecharModalApply = document.querySelector('.fechar-modal');

botoesApply.forEach(botao => {

    botao.addEventListener('click', () => {
        
        console.log('oi')
        modalApply.classList.remove('invisivel')

    });

});

botaoFecharModalApply.addEventListener('click', () => {

    botaoFecharModalApply.classList.add('invisivel') 

})