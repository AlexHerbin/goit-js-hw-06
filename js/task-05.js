const refs = {
    input: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'), 
}

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
    refs.nameEl.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        refs.nameEl.textContent = 'Anonymous'
    }
}  



