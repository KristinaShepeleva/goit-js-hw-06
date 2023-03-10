
const textInput = document.querySelector("#validation-input");
const dataLengthRef = Number(textInput.getAttribute("data-length"));


textInput.addEventListener("blur", (event) => {
    const currenrValue = event.currentTarget.value.length;
    console.log(currenrValue);
    
    if (currenrValue === dataLengthRef) {
        textInput.classList.add("valid"); 
        textInput.classList.remove("invalid");
    };

    if (currenrValue !== dataLengthRef) {
        textInput.classList.add("invalid"); 
        textInput.classList.remove("valid");
    };
});
