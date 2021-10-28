var navToggle = document.getElementById('nav-toggler');
var nav = document.getElementById('nav-item-list');

navToggle.onclick = function(){
    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
}

document.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      navToggle.classList.remove("active");
       }
    }, true);



// news letter form submission 
    
var newsLetterForm = document.getElementById('myform');
var submit = document.getElementById('go');
console.log(submit)

submit.onclick = function(){
    document.forms["myform"].submit(); return false;
}