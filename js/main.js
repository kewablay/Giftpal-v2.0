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




buttonRight.onclick = function () {
    document.getElementById('home-row').scrollLeft += 200;
};

buttonLeft.onclick = function () {
    document.getElementById('home-row').scrollLeft -= 200;
};



// buttonRight.onclick = function () {
//     console.log('clicked')
//     document.getElementsByClassName('card-row').scrollLeft += 200;
// };

// buttonLeft.onclick = function () {
//     document.getElementsByClassName('card-row').scrollLeft -= 200;
// };
