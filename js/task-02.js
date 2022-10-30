const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liArr = [];

ingredients.forEach((category) => {
  const li = document.createElement('li');
  li.textContent = category;
  li.classList.add('item');
  liArr.push(li);
})

// for(const category of ingredients) {
//   const li = document.createElement('li');
//   li.textContent = category;
//   li.classList.add('item');
//   liArr.push(li);
// }
// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.textContent = ingredients[i];
//   li.classList.add('item');
//   liArr.push(li);
// }

const ul = document.querySelector('#ingredients');
ul.append(...liArr);
console.log(ul);