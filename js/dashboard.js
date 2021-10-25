var sidebar = document.getElementById('side-bar');
var sidebarToggle = document.getElementById('sidebar-toggle');
var nav = document.getElementById('nav-items');
var navToggle = document.getElementById('nav-toggle');


// document.onclick = function(c){
//     if (c.target.id !== 'side-bar' && c.target.id !== 'sidebar-toggle'){
//         sidebarToggle.classList.remove('active');
//         sidebar.classList.remove('active');
//     }
// }


// side bar toggle 
sidebarToggle.onclick = function() {
    sidebarToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

function hideSidebar(){
    sidebarToggle.classList.remove('active');
    sidebar.classList.remove('active');
}


// nav bar toggle

navToggle.onclick = function() {
    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
}







// // side bar toggle 



// $('body').on('click', function(){
//     if( parseInt(sidebar.css('left') ) > 0 ){
//       hideSidebar();
//     }
//   });


// navbar toggle 


// navToggle.addEventListener('click', function() {
//     nav.style.display = 'block';
// })

// function openNav() {
//     nav.style.display = "block";
// }
// function closeNav() {
//     nav.style.display = "none";
// }

// $('body').on('click', function(){
//     if( parseInt( $('#mySidenav').css('width') ) > 0 ){
//       closeNav();
//     }
//   });