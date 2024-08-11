function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById('ele1');
ele.addEventListener('click', function () {
    pintar(this, 'yellow');
});

function changeColorToBlack(event) {
    if (event.target.classList.contains('color-box') && event.target.closest('.container-dos')) {
        event.target.style.backgroundColor = 'black';
    }
}

document.querySelectorAll('.container-dos .color-box').forEach(div => {
    div.addEventListener('click', changeColorToBlack);
});

function updateBottomColors(newColor) {
    document.querySelectorAll('.container-dos .color-box').forEach(div => {
        div.style.backgroundColor = newColor;
    });
}

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.className = 'color-box';
    newDiv.style.backgroundColor = color;
    document.querySelector('.container-cuatro').appendChild(newDiv);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'q':
            createNewDiv('purple');
            break;
        case 'w':
            createNewDiv('gray');
            break;
        case 'e':
            createNewDiv('brown');
            break;
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        pintar(document.getElementById('key'), 'pink');
    } else if (event.key === 's' || event.key === 'S') {
        pintar(document.getElementById('key'), 'orange');
    } else if (event.key === 'd' || event.key === 'D') {
        pintar(document.getElementById('key'), 'lightblue');
    }
});
