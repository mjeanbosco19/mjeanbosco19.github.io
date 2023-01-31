
   

  // Convert cover photo input element
  const blogForm = document.getElementById("blogForm");
const blogCover = document.getElementById("blogCover");
const saveButton = document.getElementById("saveButton");
const blogTitle = document.getElementById("blogTitle");
  const blogCategory = document.getElementById("blogCategory");
  const blogDescription = document.getElementById("froala");
  const date = new Date().toLocaleString();
 const blogsIndex = JSON.parse(localStorage.getItem("blogs"));
  const nextIndex = blogsIndex.length;
console.log(nextIndex);
saveButton.addEventListener("click", function(event){
    event.preventDefault();

const selectedFile = blogCover.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      let blogData = {
    index: nextIndex,
    title: blogTitle.value,
    cover: reader.result,
    category: blogCategory.value,
    description: blogDescription.value,
    author: "Jean Bosco Mugiraneza",
    date: date,
    link: `http://127.0.0.1:5501/blog.html/${blogs.length}`
  }

  let blogs;
   if (JSON.parse(localStorage.getItem("blogs")) === null) {
blogs = [];
   } else {
blogs = JSON.parse(localStorage.getItem("blogs"));
   }
  

  blogs.push(blogData);

  localStorage.setItem("blogs", JSON.stringify(blogs));

  }
});




// Blogs In the Dashboards

  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  if (blogs.length) {
    let blogContainer = document.getElementById("blogs");
    blogs.forEach(function(blog, index) {
      let blogCard = document.createElement("div");
      blogCard.innerHTML = `
      <div class = "blog-item">
      <img src="${blog.cover}" class="blog-image" alt="Blog cover">
        <h2>Blog #${index + 1}</h2>
        <h3 class="blog-title">${blog.title}</h3>
        <p>Category: ${blog.category}</p>
              <span class="blog-icons">                     
        <p>Comments: <span id="comments-${index}">0</span></p>
        <p>Likes: <span id="likes-${index}">0</span></p>
        </span>
        
  <span class="blog-icons">
                                        <button type="submit" id="publish"class="blog-icon" onclick="viewBlog(${index})">
                                        <img class="blog-icon" src="/icons/view.svg" alt=""></button>
                                        <button type="submit" id="publish"class="blog-icon" onclick="editBlog(${index})">
                                        <img class="blog-icon" src="/icons/edit.png" alt=""></button>
                                    <button type="button" class="blog-icon" onclick="removeBlog(${index})"><img class="blog-icon" src="/icons/delete.svg" alt="">
                                        </button>
                                    </span>
         
</div>
      `;
      blogContainer.appendChild(blogCard);
    });
  } else {
    blogContainer.innerHTML = "No blogs found.";
  }
  function publishBlog(index) {
    // Add code here to publish the blog with the specified index
  }
  function removeBlog(index) {
    let blogs = JSON.parse(localStorage.getItem("blogs"));
    blogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    location.reload();
  }
