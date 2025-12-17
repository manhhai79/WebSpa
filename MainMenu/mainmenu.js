// MENU MOBILE & ANIMATION
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }
}

// SCROLL REVEAL ANIMATION
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}

// POPUP MODAL LOGIC
document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.querySelector(".close-btn");
    const openBtns = document.querySelectorAll(".open-modal-btn");


    if (openBtns) {
        openBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault(); 
                if (modal) {
                    modal.style.display = "block";
                }
            });
        });
    }

    
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


navSlide();