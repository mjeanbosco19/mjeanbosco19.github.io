
  // VALIDATE CONTACT FORM

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

  