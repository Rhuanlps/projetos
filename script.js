document.addEventListener('DOMContentLoaded', function(){

    const baseImagens = {
        todas: ['imagem.jpg', 'cidade.jpg', 'animais.jpg', 'natureza.jpg'],
        natureza: ['natureza.jpg'],
        cidade: ['cidade.jpg'],
        animais: ['animais.jpg'],
    }

    function carregaImagens(categoria){
        //selecionar elementos HTML com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML = ''; //Limpar bloco, paga tudo dentro
        const imagens = baseImagens[categoria];

        imagens.forEach(img => {
            galeria.innerHTML += '<div> <img src="imagens/'+img +'" />  </div>';
        })

    }

    carregaImagens('todas');

    //Evento de clique
    document.body.addEventListener('click', function (event) {

        if (event.target.classList.contains('botao-categoria')){
            
            const categoria = event.target.dataset.categoria;

            carregaImagens(categoria);
        }

    })









})