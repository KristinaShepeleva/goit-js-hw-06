
const textInput = document.querySelector("#validation-input");
const dataLengthRef = Number(textInput.getAttribute("data-length"));


textInput.addEventListener("blur", () => {

    if (textInput.value.length === dataLengthRef) {

        textInput.classList.add("valid");
        console.log(textInput.classList);
    } else {
        textInput.classList.replace("valid", "invalid");
        console.log(textInput.classList);
    } 
});