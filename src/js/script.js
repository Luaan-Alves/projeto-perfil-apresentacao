/* 
Objetivo 1 - quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML
    
    Passo 1 - pegar p botão mostrar mais no JS para pder verificra quando o usuario clicar em cima dele
    
    Passo 2 - identificar o clique do botão 

    Passo 3 - adicionar a classe ativo nos projetos escondidos 

Objetivo 2 - esconder o botão de mostrar mais

    Passo 1 -pegar o botão e esconder ele 
*/

//Objetivo 1 - quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML

//Passo 1 - pegar p botão mostrar mais no JS para pder verificra quando o usuario clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        console.log(projetosInativos);
        projetosInativos.classList.add('ativo');
    });
}
