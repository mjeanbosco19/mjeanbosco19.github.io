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
  
 
    