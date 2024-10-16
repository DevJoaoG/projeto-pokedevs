//Passo 01: Criar variável em JS para trabalhar a LISTAGEM de POKEDEVS

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);

//Passo 02: Identificar o EVENTO de clique no ELEMENTO da LISTAGEM

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        //Passo 03: Remover a classe aberto só do cartão que está aberto
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");

        //Passo 04: Ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão abrir
        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idDoCartaoPoledevparaAbrir = "cartao-" + idPokedevSelecionado
        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPoledevparaAbrir);
        cartaoPokedevParaAbrir.classList.add("aberto")

        
        //Passo 05: Remover a classe ativo que marca o pokedev selecionado na listagem
        const pokedevAtivoNaListagem = document.querySelector(".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo");

        //Passo 06: Adicionar a classe ativo no pokedev selecionado na listagem
        const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        pokedevSelecionadoNaListagem.classList.add("ativo");
    })
})