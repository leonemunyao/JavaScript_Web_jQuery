const button = document.querySelector('button');

button.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    button.textContent = 'Player 1: ' + name;
    }
