console.log("Hi! Welcome to My Portfolio Site.")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
}




  
const readMoreBtn = document.querySelectorAll(".read-more-btn");
const text = document.querySelectorAll(".text");

for (let i = 0; i < readMoreBtn.length; i++) {
  readMoreBtn[i].addEventListener("click", (e)=>{
    text[i].classList.toggle("show-more");
    if(readMoreBtn[i].innerText != "View Less"){
      readMoreBtn[i].innerText = "View Less";
    }else{
      readMoreBtn[i].innerText = "View Again";
    }

  });


}


//readMoreBtn.addEventListener("click",(e)=>{
//  text.classList.toggle("show-more");
//  if(readMoreBtn.innerText === "Read More"){
//    readMoreBtn.innerText = "Read Less";
//  }else{
//    readMoreBtn.innerText = "Read More";
//  }
//})





