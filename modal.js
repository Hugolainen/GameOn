function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".closeModal-btn");

const formFirst = document.getElementById('first');
const formLast = document.getElementById('last');
const formEmail = document.getElementById('email');
const formBirthdate = document.getElementById('birthdate');
const formQuantity = document.getElementById('quantity');
const formLocation = document.querySelectorAll('location');
const formCheckbox1 = document.getElementById('checkbox1');
const formCheckbox2 = document.getElementById('checkbox2');

const formSubmitBtn = document.getElementById('btn-submit');
const first_errMessage = document.getElementById('first_errorMessage');
const last_errMessage = document.getElementById('last_errorMessage');
const email_errMessage = document.getElementById('email_errorMessage');
const birthdate_errMessage = document.getElementById('birthdate_errorMessage');
const quantity_errMessage = document.getElementById('quantity_errorMessage');
const location_errMessage = document.getElementById('location_errorMessage');
const checkbox1_errMessage = document.getElementById('checkbox1_errorMessage');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close model event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";

  // Reset error messages
  first_errMessage.style.display = "none";  
  last_errMessage.style.display = "none";  
  email_errMessage.style.display = "none";  
  birthdate_errMessage.style.display = "none";  
  quantity_errMessage.style.display = "none";  
  location_errMessage.style.display = "none";  
  checkbox1_errMessage.style.display = "none";   
}

// Specific function is confirm the patern of an email address
function confirmEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// To validate inputs and update their linked error message
function validateFirst(){
  if(formFirst.value.length<2)
  {
    first_errMessage.textContent = "Please enter 2+ characters for name field";
    first_errMessage.style.display = "block";    
  }
  else{
    first_errMessage.style.display = "none";    
  }
}

function validateLast(){
  if(formLast.value.length<2)
  {
    last_errMessage.textContent = "Please enter 2+ characters for name field";
    last_errMessage.style.display = "block";    
  }
  else{
    last_errMessage.style.display = "none";    
  }
}

function validateEmail(){
  if(!confirmEmail(formEmail.value))
  {
    email_errMessage.textContent = "You must enter a valid email";
    email_errMessage.style.display = "block";    
  }
  else{
    email_errMessage.style.display = "none";    
  }
}

function validateBirthdate(){
  if(!formBirthdate.value)
  {
    birthdate_errMessage.textContent = "You must enter your date of birth";
    birthdate_errMessage.style.display = "block";    
  }
  else{
    birthdate_errMessage.style.display = "none";    
  }
}

function validateQuantity(){
  if(formQuantity.value < 0 || formQuantity.value === "")
  {
    quantity_errMessage.textContent = "You must enter a valide value";
    quantity_errMessage.style.display = "block";    
  }
  else{
    quantity_errMessage.style.display = "none";    
  }
}

function validateLocation(){
  let oneIsChecked = false;
  for(let i=0; i<formLocation.length;i++)
  {
    if(formLocation[i].checked)
    {
      oneIsChecked = true;
      break;
    }
  }

  if(!oneIsChecked)
  {
    location_errMessage.textContent = "You must choose one option";
    location_errMessage.style.display = "block";    
  }
  else{
    location_errMessage.style.display = "none";    
  }
}

function validateCheckbox1(){
  if(!formCheckbox1.checked)
  {
    checkbox1_errMessage.textContent = "You must check to agree to terms and conditions";
    checkbox1_errMessage.style.display = "block";    
  }
  else{
    checkbox1_errMessage.style.display = "none";    
  }
}

formSubmitBtn.addEventListener('click', ($event) => {
  $event.preventDefault();
  validateFirst();
  validateLast();
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateLocation();
  validateCheckbox1();
});