const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close-btn");
const bookBtns = document.querySelectorAll(".btn-book");
const serviceInput = document.getElementById("service");
const bookingForm = document.getElementById("bookingForm");

// Mở modal + tự điền tên dịch vụ
bookBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        modal.style.display = "block";

        const serviceBox = btn.closest(".service-info");
        serviceInput.value = serviceBox
            ? serviceBox.querySelector("h2").innerText
            : "";
    });
});

// Đóng modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Gửi form
bookingForm.addEventListener("submit", e => {
    e.preventDefault();

    alert("🎉 Aura đã nhận được thông tin đặt lịch và sẽ liên hệ sớm nhất!");

    bookingForm.reset();
    modal.style.display = "none";
});
