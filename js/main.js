function closeMobileMenu() {
    document.getElementById("mobileMenu").style.display = "none";
  }

function openMobileMenu() {
    document.getElementById("mobileMenu").style.display = "block";
    
  }


  
    // Gallery Js
    filterSelection("all")
    function filterSelection(c) {
      let x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }

    function w3AddClass(element, name) {
      let i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
      }
    }

    function w3RemoveClass(element, name) {
      let i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }


// 1. Blog Form Start Here
function openAddBlog() {
    document.getElementById("blogForm").style.display = "block";
    
  }
  function closeAddBlog() {
    document.getElementById("blogForm").style.display = "none";
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

  // VALIDATE CONTACT FORM


  // let form = document.getElementById("contact-form");

  // form.addEventListener("submit", function(event) {
  //   event.preventDefault();

  //   let name = document.getElementById("name").value;
  //   let email = document.getElementById("email").value;
  //   let message = document.getElementById("message").value;

  //   let nameError = document.getElementById("name-error");
  //   let emailError = document.getElementById("email-error");
  //   let messageError = document.getElementById("message-error");

  //   let isValid = true;

  //   if (name.length < 4 || name.length > 125) {
  //     nameError.textContent = "Name must be between 4 and 125 characters.";
  //     isValid = false;
  //   } else {
  //     nameError.textContent = "";
  //   }

  //   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  //     emailError.textContent = "Please enter a valid email address.";
  //     isValid = false;
  //   } else {
  //     emailError.textContent = "";
  //   }

  //   if (message.length < 4 || message.length > 500) {
  //     messageError.textContent = "Message must be between 4 and 500 characters.";
  //     isValid = false;
  //   } else {
  //     messageError.textContent = "";
  //   }

  //   if (isValid) {
  //     form.submit();
  //   }
  // });

  let form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let messageError = document.getElementById("message-error");

    let isValid = true;

    if (name.length < 4 || name.length > 125) {
      nameError.textContent = "Name must be between 4 and 125 characters.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    if (message.length < 4 || message.length > 500) {
      messageError.textContent = "Message must be between 4 and 500 characters.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }
if (isValid) {
   return location.reload();
}
});

// STORE INQUIRY

function storeInquiry() {
    // Get form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Create inquiry object
    let inquiry = {
      name: name,
      email: email,
      message: message
    }

    // Check if inquiries exist in local storage
    if(localStorage.getItem("inquiries") === null) {
      let inquiries = [];
      inquiries.push(inquiry);
      localStorage.setItem("inquiries", JSON.stringify(inquiries));
      
    } else {
      let inquiries = JSON.parse(localStorage.getItem("inquiries"));
      inquiries.push(inquiry);
      localStorage.setItem("inquiries", JSON.stringify(inquiries));
      
    }
   
  }


// VALIDATE COMMENT FORM


  let commentForm = document.getElementById("comment-form");

  commentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("comment").value;

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let messageError = document.getElementById("message-error");

    let isValid = true;

    if (name.length < 4 || name.length > 125) {
      nameError.textContent = "Name must be between 4 and 125 characters.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    if (message.length < 4 || message.length > 500) {
      messageError.textContent = "Comment must be between 4 and 500 characters.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

});