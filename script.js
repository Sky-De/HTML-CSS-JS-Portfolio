const navItems = document.querySelectorAll(".navbar a");
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".navbar a.active").classList.remove("active");
        item.classList.add("active");
    })
})

const date = new Date().getFullYear();
const copyRight = document.querySelector('#CopyRight');
copyRight.innerHTML += date;

// ---------------------
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    // change nav by scroll
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if( top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(`header nav a[href*=${id}]`).classList.add("active");
            })
        }
    });

    // add border to header by scroll
    let header = document.querySelector("header");
    if(window.scrollY > 100) header.style.borderBottom = "1px solid rgba(0,0,0,0.2)";
    else header.style.borderBottom = "none";
}


// menu--------
const menuBtn = document.getElementById("menu-icon");
const navBar = document.querySelector(".navbar");
const icons = document.querySelectorAll(".icon");
menuBtn.addEventListener("click",() => {
    navBar.classList.toggle("open");
    icons.forEach(icon => icon.classList.toggle("hidden"));
});
navItems.forEach(item => item.addEventListener("click", () => {
    if(window.innerWidth > 768 ) return
    navBar.classList.toggle("open");
    icons.forEach(icon => icon.classList.toggle("hidden"));
}))


// ------------------------------------ScrollReveal
ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: "2000",
    delay: "300"
 });
 
 ScrollReveal().reveal('.home-content,.home-content .heading', { origin: "top"});
 ScrollReveal().reveal('.home-img', { origin: "bottom"});
 ScrollReveal().reveal('.about-content,.about-content .heading', { origin: "right",distance: "180px"});
 ScrollReveal().reveal('.about-img', { origin: "left",distance: "180px"});
 ScrollReveal().reveal('.services-box,.services .heading', { origin: "bottom",distance: "180px"});
 ScrollReveal().reveal('.services .heading', { origin: "left",distance: "180px"});
 ScrollReveal().reveal('.portfolio .heading', { origin: "top",distance: "180px"});
 ScrollReveal().reveal('.contact .heading', { origin: "left",distance: "180px"});
 ScrollReveal().reveal('.contact form', { origin: "right",distance: "180px"});

 ScrollReveal().reveal('.p-box-1', { origin: "left",distance: "100px"});
 ScrollReveal().reveal('.p-box-2', { origin: "top",distance: "100px"});
 ScrollReveal().reveal('.p-box-3', { origin: "right",distance: "100px"});
 ScrollReveal().reveal('.p-box-4', { origin: "left",distance: "100px"});
 ScrollReveal().reveal('.p-box-5', { origin: "bottom",distance: "100px"});
 ScrollReveal().reveal('.p-box-6', { origin: "right",distance: "100px"});

   
// ------------------------------------  typed Js

const typed = new Typed(".multi-text", {
    strings: ["JavaScript Developer","React Developer","Web Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
})