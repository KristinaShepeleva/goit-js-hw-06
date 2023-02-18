
const inputRef = document.querySelector('#font-size-control');
const sizeTextRef = document.querySelector('#text');

inputRef.addEventListener('input', (event) => {
    const sizeText = `${event.currentTarget.value}px`
    //console.log(sizeText);
    sizeTextRef.style.fontSize = sizeText; 
})