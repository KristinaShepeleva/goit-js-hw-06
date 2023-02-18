
const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  const  { email, password } = event.currentTarget.elements;
 
  if (email.value === "" || password.value === "") {
    alert('Всі поля мають бути заповнені');
  }

  const objUserDatd = { email: email.value, password: password.value };
  console.log(objUserDatd);
  event.currentTarget.reset();

})
