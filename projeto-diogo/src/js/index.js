/* 
  O que precisamos fazer? - quando clicar no botão do tema na lista temos que 
marcar o botão como selecionado e mostrar a tela correspondente

    OBJETIVO 1 - quando clicar no botão do tema na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do tema mostrar as informações da tema
        passo 1 - pegar os temas no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no tema que o usuário selecionou
        passo 3 - verificar se já exista um tema selecionado, se sim, devemos remover 
a seleção dele 
*/

//OBJETIVO 1 - quando clicar no botao do tema na lista, marcar o botao como selecionado
//OBJ 1 - Passo 1 - pegar os botoes no JS para poder verificar quando o usuario clicar em cima deles

const botoes = document.querySelectorAll(".botao");

//OBJETIVO 2 - quando clicar no botão do tema mostrar as informações do tema
//passo 1 - pegar os temas no JS pra poder mostrar ou esconder ele

const personagem = document.querySelectorAll(".tela");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //OBJ 1 - passo 3 - verificar se já exista um tema selecionado, se sim, devemos remover a seleção dele
        
        desselecionarBotao();

        //OBJ 1 - passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou

        botao.classList.add("selecionado");

        //passo 3 - verificar se já exista um tema selecionado, se sim, devemos remover a seleção dele

        desselecionarTema();

        //passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou

        personagem[indice].classList.add("selecionado");

    });
});

function desselecionarTema() {
    const personagemSelecionado = document.querySelector(".tela.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
