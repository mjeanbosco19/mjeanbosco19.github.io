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


// 1. Contact Form Start Here
function openAddBlog() {
    document.getElementById("blogForm").style.display = "block";
    
  }
  function closeAddBlog() {
    document.getElementById("blogForm").style.display = "none";
  }
  
    
// Login form Validation

function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let isValid = true;

    if (!username) {
      document.getElementById("username-error").innerHTML = "Username is required";
      document.getElementById("username").classList.add("invalid");
      isValid = false;
    } else {
      document.getElementById("username-error").innerHTML = "";
      document.getElementById("username").classList.remove("invalid");
      document.getElementById("username").classList.add("valid");
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

// Get the form element
let form = document.getElementById("blogForm");

// Add an event listener for the form's submit event
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the input fields
  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;
  let coverPhoto = document.getElementById("cover-photo").value;
  let description = document.getElementById("description").value;
  
  // Check if the input fields are filled correctly
  let errors = "";
  if (title === "") {
    errors += "Title is required.\n";
  }
  if (category === "") {
    errors += "Category is required.\n";
  }
  if (coverPhoto === "") {
    errors += "Cover Photo is required.\n";
  }
  if (description === "") {
    errors += "Description is required.\n";
  }
  
  // If there are errors, display them
  if (errors !== "") {
    alert(errors);
  } else {
    // If there are no errors, submit the form
    form.submit();
  }
});
