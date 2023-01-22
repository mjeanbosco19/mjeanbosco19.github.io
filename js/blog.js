// Get the form element
var form = document.getElementById("blog-form");

// Add an event listener for the form's submit event
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the input fields
  var title = document.getElementById("title").value;
  var category = document.getElementById("category").value;
  var coverPhoto = document.getElementById("cover-photo").value;
  var description = document.getElementById("description").value;
  
  // Check if the input fields are filled correctly
  var errors = "";
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
