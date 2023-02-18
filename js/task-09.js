function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const valueColorRef = document.querySelector(".color");


buttonRef.addEventListener('click', () => {

  const randomColor = getRandomHexColor();

  bodyRef.style.backgroundColor = randomColor;
  valueColorRef.textContent = randomColor;

});