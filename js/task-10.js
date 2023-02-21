
const controlsRef = document.querySelector("#controls");
const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy]");
const boxRef = document.querySelector("#boxes");

let amount = Number(inputRef.getAttribute("min"));
console.log(amount)

buttonCreateRef.addEventListener('click', (ev) => {
   createBoxes(amount)
});

inputRef.addEventListener('input', (event) => {
  amount = Number(event.currentTarget.value);  
});

buttonDestroyRef.addEventListener('click', destroyBoxes);

let createBoxs = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const firstBoxSize = 30;
    const size = firstBoxSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    createBoxs.push(box);
    console.log(createBoxs);
  }
  boxRef.append(...createBoxs);
}
 
function destroyBoxes() {
  boxRef.innerHTML = '';
  createBoxs.splice(0, createBoxs.length);
}

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
