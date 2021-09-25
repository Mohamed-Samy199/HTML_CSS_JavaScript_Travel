let search = document.querySelector('#search');
let searchContainer = document.querySelector('.search-container');
let userForm = document.querySelector('#sign');
let loginForm = document.querySelector('.login');
let closeForm = document.querySelector('#close');
let menuList = document.querySelector('#menu');
let navList = document.querySelector('.navbar');
let vidBtn = document.querySelectorAll('.vid');
window.onscroll = () =>{
    search.classList.remove('fa-times');
    searchContainer.classList.remove('active');
    menuList.classList.remove('fa-times');
    navList.classList.remove('active');
    loginForm.classList.remove('active');
}
search.addEventListener('click', () =>{
    search.classList.toggle('fa-times');
    searchContainer.classList.toggle('active');
});
userForm.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
closeForm.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
menuList.addEventListener('click' , ()=>{
    menuList.classList.toggle('fa-times');
    navList.classList.toggle('active');
});
vidBtn.forEach(btn =>{
    btn.addEventListener('click' , ()=>{
        document.querySelector('.buttons .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#slide').src = src;
    });
});
var swiper = new Swiper(".container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".containir", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints:{
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        },
    },
});
window.onscroll = () =>{
if(window.scrollY > 60){
    document.querySelector('#to-top').classList.add('active');
}else{
    document.querySelector('#to-top').classList.remove('active');
}
}
function loader(){
    document.querySelector('.load').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader, 2000);
}
window.onload = fadeOut();