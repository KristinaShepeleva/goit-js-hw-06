const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const liListRef = ingredients.map((ingredient) => {
  const liRef = document.createElement('li');
  liRef.classList.add('.item');
  liRef.textContent = ingredient;
  
  return liRef;
});

//console.log(liListRef); 

ulRef.append(...liListRef)


