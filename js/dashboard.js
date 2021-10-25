var sidebar = document.getElementById('side-bar');
var sidebarToggle = document.getElementById('sidebar-toggle');
var nav = document.getElementById('nav-items');
var navToggle = document.getElementById('nav-toggle');

// side bar toggle 
sidebarToggle.onclick = function() {
    sidebarToggle.classList.toggle('active');
}

// side bar toggle 
function showSidebar(){
    sidebar.style.left= '0';
}

function hideSidebar(){
    sidebar.style.left= "-300px";
}

$('body').on('click', function(){
    if( parseInt(sidebar.css('left') ) > 0 ){
      hideSidebar();
    }
  });


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