const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', helloNameInput);

function helloNameInput () {
    let name = this.value.trim();
    if (name === '') {
        name = 'Anonymous';
    }
    nameOutput.textContent = name;
}