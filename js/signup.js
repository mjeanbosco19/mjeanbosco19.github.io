// Get form elements
const form = document.getElementById("signup-form");
const names = document.getElementById("names");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const countryCode = document.getElementById("country-code");

// Error messages
const namesError = document.getElementById("names-error");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const addressError = document.getElementById("address-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

// Regex for email validation
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Event listener for form submit
form.addEventListener("submit", (e) => {
  let isValid = true;

  // Names validation
  if (names.value.length < 4 || names.value.length > 125) {
    namesError.textContent = "Names must be between 4 and 125 characters";
    names.classList.add("error");
    isValid = false;
  } else {
    namesError.textContent = "";
    names.classList.remove("error");
  }

  // Email validation
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Invalid email format";
    email.classList.add("error");
    isValid = false;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
  }

  // Phone number validation
  if (phone.value === "") {
    phoneError.textContent = "Phone number is required";
    phone.classList.add("error");
    isValid = false;
  } else {
    phoneError.textContent = "";
    phone.classList.remove("error");
  }

  // Address validation
  if (address.value.length < 4 || address.value.length > 125) {
    addressError.textContent = "Address must be between 4 and 125 characters";
    address.classList.add("error");
    isValid = false;
  } else {
    addressError.textContent = "";
    address.classList.remove("error");
  }

      // Check if password meets certain requirements
    if (!password) {
    passwordValid = false;
    passwordError.innerHTML = "Password is required";
    }
    else if (password.length < 6) {
      passwordError.innerHTML = "Password is too small";
      isValid = false;
    }
    else if (password.length > 125) {
      passwordError.innerHTML = "Password is too long";
      isValid = false;
    }
    else if (!passwordRegex.test(password)) {
      passwordError.innerHTML = "Password is invalid";
      isValid = false;
    }
    else {
      passwordError.innerHTML = "";
    }

})