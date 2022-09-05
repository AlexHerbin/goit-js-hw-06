const refs = {
    btnDecrementEl: document.querySelector('[data-action="decrement"]'),
    btnIncrementEl: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
}

// console.log(refs.btnDecrementEl);
// console.log(refs.btnIncrementEl);
// console.log(refs.valueEl);

refs.btnDecrementEl.addEventListener('click', onTargetBtnDecrementClick);
refs.btnIncrementEl.addEventListener('click', onTargetBtnIncrementClick);

let counterValue = 0;

function onTargetBtnDecrementClick() {
    counterValue -= 1
    refs.valueEl.textContent = counterValue
} 

function onTargetBtnIncrementClick() {
    counterValue += 1
    refs.valueEl.textContent = counterValue
} 


