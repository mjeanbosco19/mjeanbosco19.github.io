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
  
    
// Login form Validation

function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let isValid = true;

    if (!email) {
      document.getElementById("email-error").innerHTML = "Email is required";
      document.getElementById("email").classList.add("invalid");
      isValid = false;
    } else {
      document.getElementById("email-error").innerHTML = "";
      document.getElementById("email").classList.remove("invalid");
      document.getElementById("email").classList.add("valid");
    }

    if (!password) {
      document.getElementById("password-error").innerHTML = "Password is required";
      document.getElementById("password").classList.add("invalid");
      isValid = false;
    } else {
      document.getElementById("password-error").innerHTML = "";
      document.getElementById("password").classList.remove("invalid");
      document.getElementById("password").classList.add("valid");
    }

    return isValid;
  }
function openModal() {
  let modal = document.getElementById("forgot-model");
  modal.style.display = "block";
}

function closeModal() {
  let modal = document.getElementById("forgot-model");
  modal.style.display = "none";
}

function validateEmail() {
  let email = document.getElementById("email").value;
  let isValid = true;
  if (!email) {
    document.getElementById("email-error").innerHTML = "Email"
  }
}


// Validate the Blog Form

let form = document.getElementById("blog-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;
  let coverPhoto = document.getElementById("cover-photo").value;
  let description = document.getElementById("description").value;

  let errors = "";
  if (title === "") {
    errors += "Title is required.\n";
    document.querySelector("#title + .error-message").innerHTML = "Title is required.";
    document.querySelector("#title + .error-message").style.display = "block";
  } else{
    document.querySelector("#title + .error-message").innerHTML = "";
    document.querySelector("#title + .error-message").style.display = "none";
  }

  if (cover-photo === "") {
    errors += "Cover photo is required.\n";
    document.querySelector("#cover-photo + .error-message").innerHTML = "Cover photo is required.";
    document.querySelector("#cover-photo + .error-message").style.display = "block";
  } else{
    document.querySelector("#cover-photo + .error-message").innerHTML = "";
    document.querySelector("#cover-photo + .error-message").style.display = "none";
  }
  if (category === "") {
    errors += "Category is required.\n";
    document.querySelector("#category + .error-message").innerHTML = "Category is required.";
    document.querySelector("#category + .error-message").style.display = "block";
  } else{
    document.querySelector("#category + .error-message").innerHTML = "";
    document.querySelector("#category + .error-message").style.display = "none";
  }
  if (description === "") {
    errors += "Description is required.\n";
    document.querySelector("#description + .error-message").innerHTML = "Description is required.";
    document.querySelector("#description + .error-message").style.display = "block";
  } else{
    document.querySelector("#description + .error-message").innerHTML = "";
    document.querySelector("#description + .error-message").style.display = "none";
  }

  // Check if the input fields are filled correctly
  // let errors = "";
  // if (title === "") {
  //   errors += "Title is required.\n";
  // }
  // if (category === "") {
  //   errors += "Category is required.\n";
  // }
  // if (coverPhoto === "") {
  //   errors += "Cover Photo is required.\n";
  // }
  // if (description === "") {
  //   errors += "Description is required.\n";
  // }
  
  // If there are errors, display them
  if (errors !== "") {
    alert(errors);
  } else {
    // If there are no errors, submit the form
    form.submit();
  }
});



// VALIDATE THE CONTACT FORM

document.getElementById("contact-form").addEventListener("submit", function(event){ /* your code here */});

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



const selectedFile = blogImage.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      let newId = Math.floor(Math.random() * (1000000 - 100000) + 100000);
      const data = {
        id: newId,
        title: blogTitle.value,
        blogContent: blogContent.value,
        date: getCurrentDate(),
        image: reader.result,
      };
    }


    <p>${blog.description}</p>