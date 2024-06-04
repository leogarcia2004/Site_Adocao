

const botoesApply = document.querySelectorAll('.botao-adocao');
const modalApply = document.querySelector('.modal-apply');
const botaoFecharModalApply = document.querySelector('.fechar-modal');
const formularioApply = document.querySelector('#form-apply')
const inputEmail = document.querySelector('#email')
const inputName = document.querySelector('#nome')
const inputData = document.querySelector('#data')


botoesApply.forEach(botao => {
    botao.addEventListener('click', () => { modalApply.showModal() });
});

botaoFecharModalApply.addEventListener('click', () => { modalApply.close() });

formularioApply.addEventListener('submit', (event) => {

    const emailValue = inputEmail.value
    const nameValue = inputName.value
    const dataValue = inputData.value

    event.target.querySelector('[name="email"]').value = ""
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="data"]').value = ""
    event.target.querySelector('[name="checar"]').checked = ""

    if(inputName.value == Number){
        alert('Este campo não aceita números!') 
        event.preventDefault()

        inputEmail.value = emailValue
        inputName.value = nameValue
        inputData.value = dataValue
    } 

    if(dataValue == ""){
        alert('Coloque sua data de aniverário!') 
        event.preventDefault()

        inputEmail.value = emailValue
        inputName.value = nameValue

    }
})

const botoesDonate = document.querySelectorAll('.botao-donate');
const modalDonate = document.querySelector('.modal-donate');
const botaoFecharModalDonate = document.querySelector('.fechar-modal-donate');
const formularioDonate = document.querySelector('#form-donate')
const inputEmailDonate = document.querySelector('#email-donate')
const inputPagamento = document.querySelector('#ajuda')

botoesDonate.forEach(botao => {
    botao.addEventListener('click', () => { modalDonate.showModal() });
});

botaoFecharModalDonate.addEventListener('click', () => { modalDonate.close() })


formularioDonate.addEventListener('submit', (event) => {

    const emailDonateValue = inputEmailDonate.value
    const ajudaDonateValue = inputPagamento.value
    

    event.target.querySelector('[name="email"]').value = ""
    event.target.querySelector('[name="ajuda"]').value = ""

    if(ajudaDonateValue < 0){
        alert('Digitar um número válido e positivo') 
        event.preventDefault()

        inputEmailDonate.value = emailDonateValue
    } 
})
