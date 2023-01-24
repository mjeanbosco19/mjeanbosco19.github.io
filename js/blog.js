

// Validate create blog form

function validateBlogForm() {
  let title = document.getElementById("blogTitle").value;
  let cover = document.getElementById("blogCover").value;
  let category = document.getElementById("blogCategory").value;
  let description = document.getElementsByClassName("blogDescription").value;
  let valid = true;

  if (title.length < 4 || title.length > 125) {
    document.getElementById("titleError").innerHTML = "Blog title must be between 4 and 125 characters";
    valid = false;
  } else {
    document.getElementById("titleError").innerHTML = "";
  }

  if (!cover) {
    document.getElementById("coverError").innerHTML = "Blog cover is required";
    valid = false;
  } else {
    document.getElementById("coverError").innerHTML = "";
  }

  if (!category) {
    document.getElementById("categoryError").innerHTML = "Blog category is required";
    valid = false;
  } else {
    document.getElementById("categoryError").innerHTML = "";
  }

  if (description.length < 4 || description.length > 5000) {
    document.getElementById("descriptionError").innerHTML = "Blog description must be between 4 and 5000 characters";
    valid = false;
  } else {
    document.getElementById("descriptionError").innerHTML = "";
  }


  return valid;
}


