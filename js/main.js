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

submit.onclick = function(){
    document.forms["myform"].submit(); return false;
}


// gift card scroll 

const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
console.log(buttonLeft);
console.log(buttonRight);



buttonLeft.onclick = function () {
    tabs = document.querySelector('.tab-content');
    activeTab = tabs.querySelector(".active");
    scrollRow = activeTab.firstElementChild;
    scrollRow.scrollLeft -= 200;
};

buttonRight.onclick = function () {
    tabs = document.querySelector('.tab-content');
    activeTab = tabs.querySelector(".active");
    scrollRow = activeTab.firstElementChild;
    scrollRow.scrollLeft += 200;
};

