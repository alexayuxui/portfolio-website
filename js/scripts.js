console.log("Hi! Welcome to My Portfolio Site.")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}



  
// const readMoreBtn = document.querySelectorAll(".read-more-btn");
// const text = document.querySelectorAll(".text");

// for (let i = 0; i < readMoreBtn.length; i++) {
//   readMoreBtn[i].addEventListener("click", (e)=>{
//     text[i].classList.toggle("show-more");
//     if(readMoreBtn[i].innerText != "View Less"){
//       readMoreBtn[i].innerText = "View Less";
//     }else{
//       readMoreBtn[i].innerText = "View Again";
//     }
// 
//   });
// 
// 
// }


//readMoreBtn.addEventListener("click",(e)=>{
//  text.classList.toggle("show-more");
//  if(readMoreBtn.innerText === "Read More"){
//    readMoreBtn.innerText = "Read Less";
//  }else{
//    readMoreBtn.innerText = "Read More";
//  }
//})





