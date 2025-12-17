const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger){
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
navSlide();


const reviewForm = document.getElementById('reviewForm');
if(reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn load lại trang
        
        const btn = document.querySelector('.btn-submit');
        const originalText = btn.innerText;

        // Hiệu ứng đang gửi
        btn.innerText = "Đang gửi...";
        btn.style.opacity = "0.7";

        setTimeout(() => {
            // Hiệu ứng gửi thành công
            alert("Cảm ơn bạn đã gửi đánh giá! Aura Aesthetics rất trân trọng ý kiến của bạn.");
            
            // Reset form
            reviewForm.reset();
            btn.innerText = originalText;
            btn.style.opacity = "1";
        }, 1500);
    });
}