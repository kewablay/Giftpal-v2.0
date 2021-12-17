// $(document).ready(() => {
//   let navToggle = document.getElementById("nav-toggler");
//   let nav = document.getElementById("nav-item-list");
//   let pillsTab = document.getElementById("pills-tab");
//   let tabs = document.querySelector(".tab-content");
//   let activeTab = tabs.querySelector(".active");
//
//   navToggle.onclick = function() {
//     navToggle.classList.toggle("active");
//     nav.classList.toggle("active");
//   };
//
//   document.addEventListener(
//     "click",
//     () => {
//       if (nav.classList.contains("active")) {
//         nav.classList.remove("active");
//         navToggle.classList.remove("active");
//       }
//     },
//     true
//   );
//
//   // news letter form submission
//
//   let newsLetterForm = document.getElementById("myform");
//
//
//   // gift card scroll
//
//   const buttonLeft = document.getElementById("button-left");
//   const buttonRight = document.getElementById("button-right");
//   // console.log(buttonLeft);
//   // console.log(buttonRight);
//   // console.log(screen.width)
//
//   if (screen.width <= 480) {
//     buttonLeft.onclick = function() {
//       pillsTab.scrollLeft -= 200;
//     };
//     buttonRight.onclick = function() {
//       pillsTab.scrollLeft += 200;
//     };
//   } else if (screen.width > 480) {
//     buttonLeft.onclick = function() {
//       let scrollRow = activeTab.firstElementChild;
//       scrollRow.scrollLeft -= 200;
//     };
//
//     buttonRight.onclick = function() {
//      let  scrollRow = activeTab.firstElementChild;
//       scrollRow.scrollLeft += 200;
//     };
//   }
// });
