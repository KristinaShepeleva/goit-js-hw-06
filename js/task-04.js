
const buttonDecRef = document.querySelector('button[data-action="decrement"]');
const buttonIncRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');


//Варіант 1

let counterValue = 0;

buttonDecRef.addEventListener('click', () => {
   counterValue -= 1;
    valueRef.textContent = counterValue;
});
  
buttonIncRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});



//Варіант 2

//const counterValue = {
//    value: 0,
//    decrement() {
//    this.value -= 1;
//},
//    increment() {
//    this.value += 1;
//    },
//};

//buttonDecRef.addEventListener('click', () => {
//    counterValue.decrement();
//    valueRef.textContent = counterValue.value;
//});

//buttonIncRef.addEventListener('click', () => {
//    counterValue.increment();
//    valueRef.textContent = counterValue.value;
//});



