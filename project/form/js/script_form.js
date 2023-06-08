const form = document.getElementById("idForm");
form.addEventListener("submit", validateForm);
const inputName = document.getElementById("idName");
const inputSurname = document.getElementById("idSurname");
const inputPhone = document.getElementById("idNumber_phone");
const inputEmail = document.getElementById("idEmail");
const inputAdress = document.getElementById("idAdress");
const inputAmount_of_Bread = document.getElementById("idQuantity");
const inputButton = document.getElementById("idButton");
function validateForm(event) {
  event.preventDefault();
  if (
    inputName == "" ||
    inputSurname == "" ||
    inputPhone == "" ||
    inputEmail == "" ||
    inputAdress == "" ||
    inputAmount_of_Bread == ""
  ) {
    return false;
  } else {
    alert("Your order is accepted");
  }

  var pattern = /^[a-zA-Zа-яА-Я]+$/;
  if (pattern.test(inputName.value)) {
    console.log("Name is correct");
  } else {
    inputName.insertAdjacentHTML(
      "beforeend",
      '<div class="name-error">input error</div>'
    );
    return false;
  }

  var pattern2 = /^[a-zA-Zа-яА-Я]+$/;
  if (pattern2.test(inputSurname.value)) {
    console.log("Surname is correct");
  } else {
    inputSurname.insertAdjacentHTML(
      "beforeend",
      '<div class="surname-error">input error</div>'
    );
    return false;
  }

  var pattern3 = /^\d{10}$/;
  if (pattern3.test(inputPhone.value)) {
    console.log("Number phone is correct");
  } else {
    inputPhone.insertAdjacentHTML(
      "beforeend",
      '<div class="phone-error">input error</div>'
    );
    return false;
  }

  var pattern4 =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (pattern4.test(inputEmail.value)) {
    console.log("email is correct");
  } else {
    inputEmail.insertAdjacentHTML(
      "beforeend",
      '<div class="email-error">input error</div>'
    );
    return false;
  }
  var pattern5 = /^\d{1,5} [A-Za-z ]+, [A-Za-z ]+$/;
  if (pattern5.test(inputAdress.value)) {
    console.log("Adress is correct");
  } else {
    inputAdress.insertAdjacentHTML(
      "beforeend",
      '<div class="adress-error">input error</div>'
    );
    return false;
  }
  var pattern6 = /^\d+$/;
  if (pattern6.test(inputAmount_of_Bread.value)) {
    console.log("Amount of bread has filled");
  } else {
    inputAmount_of_Bread.insertAdjacentHTML(
      "beforeend",
      '<div class="amount-error">input error</div>'
    );
    return false;
  }
  document.forms["fmain"].reset();
}
function checkForm(){
  if (
    inputName.value &&
    inputSurname.value &&
    inputPhone.value &&
    inputEmail.value &&
    inputAdress.value &&
    inputAmount_of_Bread
  ) {
    inputButton.disabled = false; // Разблокировка кнопки
  } else {
    inputButton.disabled = true; // Блокировка кнопки
  } 
}
inputName.addEventListener('input',checkForm);
inputSurname.addEventListener('input',checkForm);
inputPhone.addEventListener('input',checkForm);
inputEmail.addEventListener('input',checkForm);
inputAdress.addEventListener('input',checkForm);