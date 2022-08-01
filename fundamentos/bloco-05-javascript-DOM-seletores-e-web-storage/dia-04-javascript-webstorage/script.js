const inputText = document.querySelector('#input-background');

function corDeFundo() {
    document.body.style.backgroundColor = inputText.value;
}

inputText.addEventListener('change',corDeFundo)