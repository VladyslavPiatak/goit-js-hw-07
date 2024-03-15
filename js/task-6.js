function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesElement = document.querySelector('#boxes');
const inputElement = document.querySelector('input');

function createBoxes(amount) {
  boxesElement.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const boxElement = document.createElement('div');
    boxElement.style.width = `${30 + i * 10}px`;
    boxElement.style.height = `${30 + i * 10}px`;
    boxElement.style.backgroundColor = getRandomHexColor();
    boxesElement.appendChild(boxElement);
  }
}

function destroyBoxes() {
  boxesElement.innerHTML = '';
}

createButton.addEventListener('click', function () {
  const amount = parseInt(inputElement.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = '';
  }
});

destroyButton.addEventListener('click', destroyBoxes);