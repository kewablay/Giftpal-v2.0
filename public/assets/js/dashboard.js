$(document).ready(function() {

var sidebar = document.getElementById('side-bar');
var sidebarToggle = document.getElementById('sidebar-toggle');
var nav = document.getElementById('nav-items');
var navToggle = document.getElementById('nav-toggle');


// side bar toggle 
sidebarToggle.onclick = function() {
    sidebarToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

function hideSidebar(){
    sidebarToggle.classList.remove('active');
    sidebar.classList.remove('active');
}
document.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      sidebarToggle.classList.remove("active");
       }
    }, true);


// nav bar toggle   

navToggle.onclick = function() {
    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
}

document.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      navToggle.classList.remove("active");
       }
    }, true);


// browse items scroll

const buttonLeft = document.getElementById('button-left')
const buttonRight = document.getElementById('button-right')


buttonRight.onclick = function () {
    document.getElementById('services-container').scrollLeft += 200;
};

buttonLeft.onclick = function () {
document.getElementById('services-container').scrollLeft -= 200;
};



// slick intergration
if (screen.width <= 480){
    console.log('its a small screen ')
    $('.gift-cards').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });         
    
}

})
