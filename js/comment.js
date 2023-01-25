
// VALIDATE COMMENT FORM

const commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;
 
    // Validation code here
    
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let commentError = document.getElementById("comment-error");

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

    if (comment.length < 4 || comment.length > 500) {
      commentError.textContent = "Comment must be between 4 and 500 characters.";
      isValid = false;
    } else {
      commentError.textContent = "";
    }

   
    

    if (isValid) {
        saveComment(name,email,comment);
   return location.reload();
}
  
});


const saveComment = function(name, email, comment) {
  const formData = { name: name, email: email, comment: comment };
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(formData);
  localStorage.setItem("comments", JSON.stringify(comments));
}






// const form = document.getElementById("comment-form");

//   form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let comment = document.getElementById("comment").value;

//     let nameError = document.getElementById("name-error");
//     let emailError = document.getElementById("email-error");
//     let commentError = document.getElementById("comment-error");

//     let isValid = true;

//     if (name.length < 4 || name.length > 125) {
//       nameError.textContent = "Name must be between 4 and 125 characters.";
//       isValid = false;
//     } else {
//       nameError.textContent = "";
//     }

//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//       emailError.textContent = "Please enter a valid email address.";
//       isValid = false;
//     } else {
//       emailError.textContent = "";
//     }

//     if (comment.length < 4 || comment.length > 500) {
//       commentError.textContent = "comment must be between 4 and 500 characters.";
//       isValid = false;
//     } else {
//       commentError.textContent = "";
//     }
// if (isValid) {
//    return location.reload();
// }
// });
