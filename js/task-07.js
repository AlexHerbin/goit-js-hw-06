const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

spanEl.style.fontSize = '56px';
inputEl.addEventListener('blur', onInputClick);

function onInputClick(event) {
    spanEl.style.fontSize = event.currentTarget.value + 'px'
}

