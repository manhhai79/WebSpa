// Lấy dịch vụ từ URL (?service=...)
const params = new URLSearchParams(window.location.search);
const service = params.get("service");

if (service) {
    document.getElementById("serviceSelect").value = service;
}

// TOAST
const toast = document.getElementById("toast-success");
const closeToast = document.querySelector(".toast-close");

document.getElementById("datLichForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Hiện toast
    toast.classList.add("show");

    // Tự ẩn sau 3s
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    this.reset();
});

// Nút đóng
closeToast.addEventListener("click", () => {
    toast.classList.remove("show");
});
// const servicePackages = {
//     "cham-soc-da": [
//         "Chăm sóc da mặt cơ bản",
//         "Làm sáng da",
//         "Chống lão hóa",
//         "Cấp ẩm – làm dịu da mặt"
//     ],

//     "laser": [
//         "Laser trị nám – tàn nhang",
//         "Laser Carbon trẻ hóa",
//         "Laser toning trắng da"
//     ],

//     "massage": [
//         "Massage cổ điển",
//         "Massage đá nóng",
//         "Massage đá muối Himalaya"
//     ],

//     "triet-long": [
//         "Triệt lông vĩnh viễn"
//     ],

//     "phun-xam": [
//         "Phun mày Plascell",
//         "Phun môi Plascell",
//         "Điêu khắc Hair Stroke"
//     ],

//     "giam-beo": [
//         "Giảm béo vùng bụng",
//         "Combo toàn thân S-Line",
//         "Slim bắp tay / đùi"
//     ]
// };


const serviceSelect = document.getElementById("serviceSelect");
const subServiceWrapper = document.getElementById("subServiceWrapper");
const subServiceSelect = document.getElementById("subServiceSelect");

// Danh sách dịch vụ con theo dịch vụ chính
const subServices = {
    "Chăm sóc da mặt": ["Chăm sóc da cơ bản", "Làm sáng da", "Cấp ẩm", "Chống lão hóa", "Làm dịu da mặt"],
    "Điều trị Laser": ["Laser trị nám ", "Laser tàn nhang", "Laser carbon trẻ hóa", "Laser Toning trắng da"],
    "Massage thư giãn": ["Massage cổ điển ", "Massage đá nóng ", "Massage đá muối Himalaya"],
    "Triệt lông vĩnh viễn": ["Triệt lông tay", "Triệt lông chân", "Triệt lông bikini"],
    "Phun xăm thẩm mỹ": ["Phun môi Plascell", "Phun mày Plascell", "Điêu khắc Hair stroke"],
    "Giảm béo SlimBody": ["SlimBody bụng", "Combo Toàn thân S-Line", "Slim Bắp tay/Đùi"]
};

// Khi người dùng chọn dịch vụ chính
serviceSelect.addEventListener("change", function () {
    const selectedService = this.value;

    // Xóa các item cũ
    subServiceSelect.innerHTML = "";

    // Nếu có dịch vụ con
    if (subServices[selectedService]) {
        subServices[selectedService].forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            subServiceSelect.appendChild(option);
        });
        subServiceWrapper.style.display = "block"; // hiện vùng chọn
    } else {
        subServiceWrapper.style.display = "none"; // ẩn nếu không có dịch vụ con
    }
});