const nav=document.querySelector('.nav__icon')
const items=document.querySelector('.nav__items')
const card=document.querySelector(".card")
const navText=document.querySelectorAll('.nav__link');
const navcontiner=document.querySelector('.nav__items')

nav.addEventListener('click',function(e){
    
    items.style.display=items.style.display===''?'flex':"";

})
const header=document.querySelector(".header");
var myNav = document.querySelector('.nav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= header.offsetHeight || document.documentElement.scrollTop >= header.offsetHeight ){
     
      
        myNav.classList.add("nav-colored");
      
        navText.forEach(el => {
            el.classList.remove('nav-colored-text')
        });
        myNav.classList.remove("nav-transparent");
        navcontiner.classList.remove('nav-back')
       

    } 
    else {
      

        myNav.classList.add("nav-transparent");
        navcontiner.classList.add('nav-back')
        navText.forEach(el => {
            el.classList.add('nav-colored-text')
        });
        myNav.classList.remove("nav-colored");
        
    }
};

card.addEventListener("click",function(e){
    
})

//header
const cont=document.querySelector('.header__img')
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("header__slide");
  var dots = document.getElementsByClassName("header__dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000);} 


  ///content 

  if(window.innerWidth <=600){
    const slides=document.querySelectorAll('.header__slide')
    const content=['Build...',"Trust...","Improve..."]
    slides.forEach((s,i)=>{
        let after=s.querySelector("::after")
        after.style.content=`${content[i]}`;

    })
  }