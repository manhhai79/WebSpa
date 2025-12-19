/* --- 1. DỮ LIỆU SẢN PHẨM --- */
const products = [
    { 
        id: 1, 
        name: "Serum Vàng 24K Aura", 
        price: 990000, old_price: 1500000, 
        img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600", 
        cat: "face",
        desc: "Tinh chất vàng 24K đậm đặc giúp tái tạo collagen, làm mờ nếp nhăn và mang lại làn da căng bóng rạng rỡ chỉ sau 1 tuần sử dụng.",
        ingredients: "Vàng 24K nguyên chất, Hyaluronic Acid, Niacinamide, Chiết xuất nhân sâm.",
        guide: "Sử dụng 2 lần sáng/tối. Nhỏ 3-5 giọt ra tay, vỗ nhẹ lên mặt và massage đều."
    },
    { 
        id: 2, 
        name: "Kem Chống Nắng Aura SPF50+", 
        price: 499000, old_price: 850000, 
        img: "https://images.unsplash.com/photo-1556228720-1957be83f709?q=80&w=600", 
        cat: "face",
        desc: "Bảo vệ da toàn diện trước tia UV. Kết cấu mỏng nhẹ, nâng tông tự nhiên, không gây bết dính.",
        ingredients: "Titanium Dioxide, Zinc Oxide, Chiết xuất rau má, Vitamin E.",
        guide: "Thoa trước khi ra ngoài 20 phút. Nên thoa lại sau mỗi 3-4 tiếng hoạt động ngoài trời."
    },
    { 
        id: 3, 
        name: "Sữa Dưỡng Thể Trắng Da Body", 
        price: 350000, old_price: 650000, 
        img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=600", 
        cat: "body",
        desc: "Dưỡng trắng chuyên sâu với Alpha Arbutin, giúp da cơ thể mềm mịn và đều màu sau 2 tuần.",
        ingredients: "Alpha Arbutin, Sữa dê, Vitamin B3, Collagen thủy phân.",
        guide: "Thoa đều toàn thân sau khi tắm sạch. Massage kỹ vùng khuỷu tay và đầu gối."
    },
    { 
        id: 4, 
        name: "Toner Hoa Hồng Cấp Ẩm", 
        price: 299000, old_price: 450000, 
        img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600", 
        cat: "face",
        desc: "Cân bằng độ pH, se khít lỗ chân lông và cấp ẩm tức thì cho làn da tươi mới.",
        ingredients: "Nước chưng cất hoa hồng Damask, HA, Aloe Vera.",
        guide: "Thấm ướt bông tẩy trang hoặc vỗ trực tiếp lên mặt sau khi rửa mặt."
    },
    { 
        id: 5, 
        name: "Mặt Nạ Bùn Khoáng", 
        price: 199000, old_price: 350000, 
        img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=600", 
        cat: "face", 
        desc: "Thải độc tố, hút sạch bã nhờn và ngăn ngừa mụn hiệu quả.",
        ingredients: "Bùn khoáng biển chết, than hoạt tính, tràm trà.",
        guide: "Đắp lớp mỏng lên mặt, thư giãn 15 phút rồi rửa sạch với nước ấm. Dùng 2 lần/tuần."
    },
    { 
        id: 6, 
        name: "Kem Tan Mỡ Body Slim", 
        price: 790000, old_price: 1200000, 
        img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600", 
        cat: "body", 
        desc: "Đốt cháy mỡ thừa vùng bụng, đùi với công nghệ sinh nhiệt tiên tiến.",
        ingredients: "Tinh chất gừng, ớt, caffeine, tảo biển.",
        guide: "Thoa kem lên vùng cần giảm mỡ, quấn đai nịt bụng để tăng hiệu quả."
    },
    { 
        id: 7, 
        name: "Bộ Trị Mụn Chuyên Sâu", 
        price: 650000, old_price: 950000, 
        img: "https://images.unsplash.com/photo-1571781565036-d3f75df02f67?q=80&w=600", 
        cat: "treatment", 
        desc: "Combo sữa rửa mặt và serum giúp gom cồi mụn, giảm sưng viêm nhanh chóng.",
        ingredients: "Salicylic Acid (BHA), Tea Tree Oil, Rau má.",
        guide: "Rửa mặt sạch, chấm serum lên nốt mụn. Dùng sáng và tối."
    },
    { 
        id: 8, 
        name: "Tinh Dầu Massage Body", 
        price: 150000, old_price: 250000, 
        img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600", 
        cat: "body", 
        desc: "Hương sả chanh thư giãn, giảm căng thẳng mệt mỏi sau ngày dài.",
        ingredients: "Dầu Hạnh nhân, Tinh dầu Sả chanh, Vitamin E.",
        guide: "Lấy một lượng vừa đủ ra tay, xoa nóng rồi massage lên cơ thể."
    }
];

let cart = [];
let currentId = null;
const formatMoney = num => num.toLocaleString('vi-VN') + 'đ';

/* --- 2. RENDER SẢN PHẨM --- */
function renderProducts(filter = 'all') {
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    const data = filter === 'all' ? products : products.filter(p => p.cat === filter);

    data.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProductModal(p.id);
        card.innerHTML = `
            <img src="${p.img}" class="card-img" alt="${p.name}">
            <div class="card-body">
                <div class="card-cat">${p.cat === 'face' ? 'Da mặt' : p.cat === 'body' ? 'Cơ thể' : 'Đặc trị'}</div>
                <h3 class="card-title">${p.name}</h3>
                <div class="card-price">
                    <span class="price-new">${formatMoney(p.price)}</span>
                    <span class="price-old">${formatMoney(p.old_price)}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
renderProducts();

function filterProduct(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts(cat);
}

/* --- 3. PRODUCT DETAIL & TABS --- */
function openProductModal(id) {
    const p = products.find(i => i.id === id);
    if (!p) return;
    currentId = id;
    document.getElementById('detail-img').src = p.img;
    document.getElementById('detail-name').innerText = p.name;
    document.getElementById('detail-price').innerText = formatMoney(p.price);
    document.getElementById('detail-old-price').innerText = formatMoney(p.old_price);
    document.getElementById('detail-cat').innerText = p.cat.toUpperCase();
    document.getElementById('tab-desc').innerText = p.desc;
    document.getElementById('tab-ingre').innerText = p.ingredients;
    document.getElementById('tab-guide').innerText = p.guide;
    document.getElementById('detail-qty').value = 1;
    openTab('desc'); 
    document.getElementById('productDetailModal').style.display = 'block';
}

function closeProductModal() {
    document.getElementById('productDetailModal').style.display = 'none';
}

function openTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
    
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(t => t.getAttribute('onclick').includes(tabName));
    if(activeBtn) activeBtn.classList.add('active');
    
    const activePane = document.getElementById(`tab-${tabName}`);
    if(activePane) {
        activePane.style.display = 'block';
        activePane.classList.add('active');
    }
}

function adjustQty(n) {
    const input = document.getElementById('detail-qty');
    let val = parseInt(input.value) + n;
    if(val < 1) val = 1;
    input.value = val;
}

function addToCartFromDetail() {
    const qty = parseInt(document.getElementById('detail-qty').value);
    addToCart(currentId, qty);
    closeProductModal();
}

/* --- 4. CART & CHECKOUT --- */
function addToCart(id, qty = 1) {
    const p = products.find(i => i.id === id);
    const item = cart.find(i => i.id === id);
    if (item) item.qty += qty;
    else cart.push({...p, qty: qty});
    updateCartUI();
    showToast();
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');
    const countHeader = document.getElementById('cart-count-header');
    container.innerHTML = '';
    let total = 0, count = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        count += item.qty;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}">
                <div class="cart-info">
                    <h4>${item.name}</h4>
                    <p>${formatMoney(item.price)} x ${item.qty}</p>
                </div>
                <i class="fa-solid fa-trash cart-remove" onclick="removeItem(${index})"></i>
            </div>
        `;
    });
    if (cart.length === 0) container.innerHTML = '<p style="text-align:center; color:#999; margin-top:50px;">Giỏ hàng trống</p>';
    totalEl.innerText = formatMoney(total);
    countEl.innerText = count;
    countHeader.innerText = `(${count})`;
}

function removeItem(idx) {
    cart.splice(idx, 1);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.querySelector('.cart-overlay').classList.toggle('open');
}

function showToast() {
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

function openCheckoutModal() {
    if (cart.length === 0) return alert("Giỏ hàng trống! Vui lòng chọn sản phẩm.");
    document.getElementById('checkoutModal').style.display = 'block';
    document.getElementById('cart-sidebar').classList.remove('open');
    document.querySelector('.cart-overlay').classList.remove('open');
    
    const summaryContainer = document.getElementById('checkout-summary');
    summaryContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        summaryContainer.innerHTML += `
            <div class="sum-item">
                <span class="sum-name">${item.name} (x${item.qty})</span>
                <span class="sum-price">${formatMoney(itemTotal)}</span>
            </div>
        `;
    });
    document.getElementById('order-total-text').innerText = formatMoney(total);
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

function processOrder(e) {
    e.preventDefault();
    closeCheckoutModal();
    const successModal = document.getElementById('orderSuccessModal');
    successModal.style.display = 'block';
    cart = []; 
    updateCartUI();
}

function closeSuccessModal() {
    document.getElementById('orderSuccessModal').style.display = 'none';
}

window.onclick = e => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
}