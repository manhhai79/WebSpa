/* --- PHẦN 1: LOGIC HEADER & SCROLL (GIỮ NGUYÊN) --- */
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
    var reveals = document.querySelectorAll('.reveal, .fade-in');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}
navSlide();


/* --- PHẦN 2: LOGIC POPUP (MỚI THÊM) --- */

// Lấy các element
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close-btn");
// Lấy tất cả nút "Đặt Lịch Ngay" trong trang
const bookBtns = document.querySelectorAll(".btn-fill"); 
const serviceInput = document.getElementById("service");

// Gán sự kiện click cho từng nút Đặt Lịch
bookBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Ngăn chặn hành động chuyển trang mặc định của thẻ <a>
        e.preventDefault(); 
        
        // Mở Modal
        modal.style.display = "block";

        // TÍNH NĂNG TỰ ĐIỀN TÊN DỊCH VỤ
        // Tìm thẻ h2 nằm cùng khối cha với nút được nhấn để lấy tên dịch vụ
        const serviceCard = btn.closest(".service-info"); 
        if(serviceCard) {
            const serviceName = serviceCard.querySelector("h2").innerText;
            serviceInput.value = serviceName; // Điền vào ô input
        } else {
            // Nếu bấm nút trên Header thì để trống hoặc điền mặc định
            serviceInput.value = "";
        }
    });
});

// Sự kiện tắt Modal khi ấn dấu X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Sự kiện tắt Modal khi click ra ngoài vùng trắng
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

// Xử lý khi ấn Gửi (Demo: chỉ hiện thông báo)
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ sớm.");
    modal.style.display = "none";
});