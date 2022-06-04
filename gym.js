burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar2')
navList= document.querySelector('.left-2')
rightNav = document.querySelector('.middle-2')

rightNavv = document.querySelector('.right-2')


burger.addEventListener('click', ()=>{

    rightNav.classList.toggle('nav-v');

    navbar.classList.toggle('nav-h');
    navList.classList.toggle('nav-v');
    rightNavv.classList.toggle('nav-v');


})