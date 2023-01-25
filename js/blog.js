 
    // Blog Filter Js
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



// Validate create blog form

function storeBlog() {
    let title = document.getElementById("blogTitle").value;
    let cover = document.getElementById("blogCover").files[0];
    let category = document.getElementById("blogCategory").value;
    let description = document.getElementById("blogDescription").value;

    // Convert the cover photo to a Base64 encoded string
    let reader = new FileReader();
    reader.readAsDataURL(cover);
    reader.onload = function() {
        let coverEncoded = reader.result;
        // Create an object to store the form data
        let blog = {
            title: title,
            cover: coverEncoded,
            category: category,
            description: description
        };

        // Get existing blogs from local storage
        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

        // Add the new blog to the existing blogs array
        blogs.push(blog);

        // Store the updated blogs array in local storage
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }
}


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


