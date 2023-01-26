// /*!
// * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
// * Copyright 2013-2022 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
// */
// //
// // Scripts
// // 

// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });


// Contact

// (function() {
//     emailjs.init('MEG8h1bxp9yyE_0jN');
// })();

let nam=document.querySelector('#name');
let email=document.querySelector('#email');
let btn=document.querySelector('#switch');
// let valued={
//     name:false,
//     email:false
// }
btn.addEventListener("click",()=>{
    if(nam.value.length<3){
        document.querySelector('#na').innerHTML="It's not a valid name";
        console.log("hai");
        // valued.name=false;
    }else{
        document.querySelector("#na").innerHTML="";
        // valued.name=true;
    }

    if(email.value.includes("@") ){
        document.querySelector('#em').innerHTML="";
        // valued.email=true;
    }else{
        document.querySelector("#em").innerHTML="It's not a valid format use @";
        // valued.email=false;
    }
    // if(valued.name && valued.email){
    //     console.log("true")
    // }
})




// emailjs.sendForm('service_jy71e99', 'template_g6yzj6f')
// .then(function() {
//     console.log('SUCCESS!');
// }, function(error) {
//     console.log('FAILED...', error);
// });
 



