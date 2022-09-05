const span = document.querySelector('.color')
const element = document.querySelector('.widget')

element.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {
  span.textContent = document.body.style.backgroundColor;
  return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}