document.addEventListener('DOMContentLoaded', function(){

    const baseImagens = {
        todas: ['imagem.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
        natureza: [],
        cidade: [],
        animais: [],
    }

    document.body.addEventListener('click', function (event) {

        if (event.target.classList.contains('botao-categoria')){
            alert(123)
        }

    })









})