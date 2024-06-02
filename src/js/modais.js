

const botoesApply = document.querySelectorAll('.botao-adocao');
const modalApply = document.querySelector('.modal-apply');
const botaoFecharModalApply = document.querySelector('.fechar-modal');

botoesApply.forEach(botao => {
    botao.addEventListener('click', () => {

       modalApply.show()
    });
});

botaoFecharModalApply.addEventListener('click', () => {

    modalApply.close()
});




const botoesDonate = document.querySelectorAll('.botao-donate');
const modalDonate = document.querySelector('.modal-donate');
const botaoFecharModalDonate = document.querySelector('.fechar-modal-donate');

botoesDonate.forEach(botao => {
    botao.addEventListener('click', () => {

       modalDonate.show()
    });
});

botaoFecharModalDonate.addEventListener('click', () => {

    botaoFecharModalDonate.close()
})


const labelsDonate = document.querySelectorAll('.label-pagamento')
const inputsCheck = document.querySelectorAll('.check-pagamento')

labelsDonate.forEach(label => {
    label.addEventListener('click', () => {

       label.classList.remove('selecionado')
       label.classList.add('selecionado')
    });
});

