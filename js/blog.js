 
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





function storeBlog() {
    // input blog
const title = document.getElementById("blogTitle");
const picture = document.getElementById("blogCover");
const category =document.getElementById("blogCategory");
const text = document.getElementById("blogDescription");
const saveBtn = document.getElementById("savebtn");
const publishBtn = document.getElementById("publish");
const Time = new Date().getDate()+ '/' + (new Date().getMonth()+1)+'/' + new Date().getFullYear() +' : ' + new Date().getHours() +':'+ new Date().getMinutes()+':'+ new Date().getSeconds();

// let blog = JSON.parse(localStorage.getItem('blog')) ?? [];

let newUrl = new URL(location.href)
let image;

let published_blog = JSON.parse(localStorage.getItem('published_blog'))?? [];


picture.addEventListener("change",() =>{
    const fr =new FileReader();
    fr.readAsDataURL(picture.files[0]);
    fr.addEventListener("load",() =>{
        const url = fr.result;
        image = url
        document.querySelector('#img1').src=image
       return url; 
    })
}
) 
publishBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    published();
    clearBtn()
   
})

let clearBtn =()=>{
    title.value = '';
    category.value = '';
    text.value= '';
    picture.value = '';
}

let findedOne;
if(newUrl.hash.replace('#', '')){
    findedOne = published_blog.find((blog)=>{
        return blog.id ==newUrl.hash.replace('#', '')
       
       })
       console.log(findedOne)
       title.value = findedOne.title
       category.value = findedOne.category
       text.value = findedOne.text
}

let published = ()=>{
    if(title.value == '' || category.value == '' || text.value == ''){
        return;
    }else{
        let usedEl = newUrl.hash.replace('#', '');
        if(usedEl){
            published_blog.map((blog)=>{
                if(blog.id == usedEl){
                    findedOne.title = title.value
                    findedOne.category= category.value
                    findedOne.text =text.value 
                    findedOne.image = image
                    return findedOne;
                    
                }
                return blog;
            })
            localStorage.setItem('published_blog', JSON.stringify(published_blog))
            return;
        }
        published_blog.push({
            image,
            title:title.value,
            category:category.value,
            time: Time,
            text:text.value,
            id: Date.now()
        });
       
    
    localStorage.setItem('published_blog', JSON.stringify(published_blog))
    }
   
}
}

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


 }






