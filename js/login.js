   
// VALIDATE LOGIN FORM

function validateForm() {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      let emailError = "";
      let passwordError = "";

      if (!emailRegex.test(email) || email.length < 6 || email.length > 125) {
        emailError = "Email is invalid.";
      }
      if (!passwordRegex.test(password)) {
        passwordError = "Password must include at least one lowercase letter, one uppercase letter, one number, one symbol, and be 8 characters or longer.";
      }

      document.getElementById("email-error").innerHTML = emailError;
      document.getElementById("password-error").innerHTML = passwordError;

      if (emailError || passwordError) {
        return false;
      } else {
        return true;
      }
    }

