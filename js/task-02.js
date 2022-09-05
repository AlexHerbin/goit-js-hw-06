const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

// ingredients.forEach(function (ingredient) {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.classList.add('item');
//   ingredientEl.textContent = ingredient;
//   console.log(ingredientEl);
//   listEl.appendChild(ingredientEl)
// });

ingredients.map(ingredient => { 
    const ingredientEl = document.createElement('li');
    ingredientEl.classList.add('item');
    ingredientEl.textContent = ingredient;
    console.log(ingredientEl);
    listEl.appendChild(ingredientEl)
 });
