//requisito 1
const inputBackground = document.querySelector('#input-background');

function corDeFundo() {
    document.body.style.backgroundColor = inputBackground.value;
}

inputBackground.addEventListener('change',corDeFundo)

//requisito 2
const inputText = document.querySelector('#input-texto');

function corDeTexto() {
    document.body.style.color = inputText.value;
}

inputText.addEventListener('change',corDeTexto)

//requisito 3
const inputSize = document.querySelector('#input-size');

function tamanhoDeTexto() {
    document.body.style.fontSize = inputSize.value
}

inputSize.addEventListener('change', tamanhoDeTexto)