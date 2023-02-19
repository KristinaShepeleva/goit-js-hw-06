
const inputRef = document.querySelector('#font-size-control');
const sizeTextRef = document.querySelector('#text');


//потрібно в значення початкового фортсайза поставити початкове значення інпута, щоб не було скачків розміру текста.


const minValue = inputRef.getAttribute("min");

sizeTextRef.style.fontSize = inputRef.setAttribute("value", minValue);

inputRef.addEventListener('input', (event) => {
   
   sizeTextRef.style.fontSize = `${event.currentTarget.value}px`; 
   console.log(sizeTextRef.style.fontSize);
})