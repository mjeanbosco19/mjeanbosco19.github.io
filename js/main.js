function closeMobileMenu() {
    document.getElementById("mobileMenu").style.display = "none";
  }

function openMobileMenu() {
    document.getElementById("mobileMenu").style.display = "block";
    
  }


 

  // LOGIN FORM VALIDATION

    //store email and password in local storage
  localStorage.setItem("email", "bosco@email.com");
  localStorage.setItem("password", "Admin@123!");

    function validateLoginForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let isValid = true;
    
    // Check if email is in the correct format
    if (!emailRegex.test(email)) {
      emailError.innerHTML = "Please enter a valid email address";
      isValid = false;
    } else if (email.length < 6) {
      emailError.innerHTML = "Email is too short";
      isValid = false;
    }
    else if (email.length > 125) {
      emailError.innerHTML = "Email is too long";
      isValid = false;
    }
    else {
      emailError.innerHTML = "";
    }
    
    // Check if password meets certain requirements
    if (!passwordRegex.test(password)) {
      passwordError.innerHTML = "Password is invalid";
      isValid = false;
    } else if (password.length < 4) {
      passwordError.innerHTML = "Password is too small";
      isValid = false;
    }
    else if (password.length > 125) {
      passwordError.innerHTML = "Password is too long";
      isValid = false;
    }
    else {
      passwordError.innerHTML = "";
    }

      // Check if the input email and password match the stored credentials
   if (email === localStorage.getItem("email") || password === localStorage.getItem("password")) {
  loginErrorMessage.innerHTML = "Valid Login Credentials";
  // Perform further actions, such as redirecting the user to a secure page
} else {
  loginErrorMessage.innerHTML = "Invalid Login Credentials";
  isValid = false;
  // Show an error message to the user
}

    return isValid;

   
  }
  
   function showHidePassword() {
    let password = document.getElementById("password");
    let checkbox = document.getElementById("showPassword");
    if (checkbox.checked) {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  }






  