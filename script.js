document.addEventListener('DOMContentLoaded', function(){

    const baseImagens = {
        todas: ['cidade.jpg', 'animais.jpg', 'natureza.jpg'],
        natureza: ['natureza.jpg'],
        cidade: ['cidade.jpg'],
        animais: ['animais.jpg'],
    }

    function carregaImagens(categoria){
        //selecionar elementos HTML com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML = ' '; //Limpar bloco, paga tudo dentro
        const imagens = baseImagens[categoria];

        imagens.forEach(img => {
            galeria.innerHTML += '<div class="imagem-item" > <img src="imagens/'+img +'" />  </div>';
        })

    }
    
    function ordenaImagem(ordem){
        
        const imagem = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"));
        
        imagens.sort((a, b) => {
            console.log(a);
        })

    }

    //Evento de clique
    document.body.addEventListener('click', function (event) {

        if (event.target.classList.contains('botao-categoria')){            
            const categoria = event.target.dataset.categoria;
            carregaImagens(categoria);
        }

        if(event.target.classList.contains('botao-ordenar')){
            const ordem = event.target.dataset.ordem;
            ordenaImagem(ordem);
        }

        carregaImagens('todas');

    })









})