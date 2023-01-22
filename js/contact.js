// Validate contact form

// const form = document.querySelector("#contact-form");
// form.addEventListener("submit", validateForm);

// function validateForm(event) {
//   event.preventDefault();
//   const name = document.querySelector("#name");
//   const email = document.querySelector("#email");
//   const message = document.querySelector("#message");
//   const nameError = document.querySelector("#name-error");
//   const emailError = document.querySelector("#email-error");
//   const messageError = document.querySelector("#message-error");

//   if (name.validity.valueMissing) {
//     nameError.textContent = "Name is required";
//   } else if (name.validity.tooShort) {
//     nameError.textContent = "Name must be at least 2 characters long";
//   } else if (name.validity.tooLong) {
//     nameError.textContent = "Name must be no more than 125 characters long";
//   } else {
//     nameError.textContent = "";
//   }

//   if (email.validity.valueMissing) {
//     emailError.textContent = "Email is required";
//   } else if (email.validity.tooShort) {
//     emailError.textContent = "Email must be at least 6 characters long";
//   } else if (email.validity.typeMismatch) {
//     emailError.textContent = "Email must be a valid address";
//   } else {
//     emailError.textContent = "";
//   }

//   if (message.validity.valueMissing) {
//     messageError.textContent = "Message is required";
//   } else if (message.validity.tooShort) {
//     messageError.textContent = "Message must be at least 4 characters long";
//   } else {
//     messageError.textContent = "";
//   }

//   if (name.validity.valid && email.validity.valid && message.validity.valid) {
//     form.submit();
//   }
// }


// Get all the input fields and the submit button
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const submitButton = document.querySelector("input[type=submit]");

// Get all the error message elements
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

// Add event listeners to the input fields and submit button
nameField.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);
messageField.addEventListener("input", validateMessage);
submitButton.addEventListener("click", validateForm);

// Validate the name field
function validateName() {
  // Check if the name field is empty
  if (nameField.value === "") {
    nameError.textContent = "Name is required";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

// Validate the email field
function validateEmail() {
  // Check if the email field is empty
  if (emailField.value === "") {
    emailError.textContent = "Email is required";
    return false;
  } 
  // Check if the email address is valid
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField.value)) {
    emailError.textContent = "Invalid email address";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Validate the message field
function validateMessage() {
  // Check if the message field is empty
  if (messageField.value === "") {
    messageError.textContent = "Message is required";
    return false;
  } else {
    messageError.textContent = "";
    return true;
  }
}

// Validate the form
function validateForm(e) {
  e.preventDefault();
  if (!validateName() || !validateEmail() || !validateMessage()) {
    return false;
  }
  // If form is valid, submit it
  else {
    document.getElementById("contact-form").submit();
  }
}


