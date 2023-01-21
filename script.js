const btn = document.querySelector("button")
const post = document.querySelector(".post")
const widget = document.querySelector(".star-widget")
const editBtn = document.querySelector(".edit")

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  widget.style.display = 'none';
  post.style.display = 'block';
})

editBtn.addEventListener('click',(e)=>{
  widget.style.display = 'block';
  post.style.display = 'none';
})