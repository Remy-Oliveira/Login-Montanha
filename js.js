const entrar = document.querySelector(".entrar");
const cadastrar = document.querySelector(".cadastrar");


function ativar() {
    entrar.classList.add("ativar");
    cadastrar.classList.add("ativar");
}

function desativar() {
    entrar.classList.remove("ativar");
    cadastrar.classList.remove("ativar");
}