console.log("Hi! Welcome to My Portfolio Site.")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }


const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");


readMoreBtn.addEventListener("click",(e)=>{
  text.classList.toggle("show-more");
  if(readMoreBtn.innerText === "Read More"){
    readMoreBtn.innerText = "Read Less";
  }else{
    readMoreBtn.innerText = "Read More";
  }





})