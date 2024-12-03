//toán tử 3 ngôi
function changeColor(myButtonId) {
    document.getElementById(myButtonId === 'myButton1' ? 'myButton2' : 'myButton1').style = "";
    document.getElementById(myButtonId).style.backgroundColor = "white";
    document.getElementById(myButtonId).style.color = "red";
    document.getElementById(myButtonId).style.fontWeight = "bold";
    document.getElementById(myButtonId).style.border = "none";
    document.getElementById(myButtonId).style.borderTopLeftRadius = "5px";
    document.getElementById(myButtonId).style.borderToprightRadius = "5px";
    document.getElementById(myButtonId).style.height = "56px";
    document.getElementById(myButtonId).style.margin = "0 0 -9px";
    document.getElementById(myButtonId).style.padding = "16px 32px";
    document.getElementById(myButtonId).style.position = "relative";
}

//đổi màu nút ĐN ĐK
function changeColor1(id) {
    if (id === 'DN') {
        document.getElementById('DN').style.color = 'red';
        document.getElementById('DN').style.borderBottom = '2px solid red';
        document.getElementById('DK').style.color = 'gray';
        document.getElementById('DK').style.borderBottom = 'none';
    } else {
        document.getElementById('DN').style.color = 'gray';
        document.getElementById('DN').style.borderBottom = 'none';
        document.getElementById('DK').style.color = 'red';
        document.getElementById('DK').style.borderBottom = '2px solid red';
    }
}
// đổi chỗ ĐN và ĐK
function switchForm() {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    if (loginForm.style.display === "none") {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        loginForm.style.borderBottom = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

}

//   xác nhận tên
function validateName() {
    var name = document.getElementById("name").value;
    document.getElementById("nameError").style.color = "red";
    document.getElementById("nameError").style.fontSize = "14px";


    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Vui lòng nhập họ và tên của bạn!";
    } else {
        document.getElementById("nameError").innerText = "";
    }
}


//   xác nhận SDT
function validatePhoneNumber(phone) {
    var regex = /^0[0-9]{9,10}$/; // Số điện thoại phải bắt đầu bằng số 0 và có từ 10 đến 11 chữ số
    return regex.test(phone);
}
function validatePhone() {
    var phone = document.getElementById("phone").value;
    document.getElementById("phoneError").style.fontSize = "14px";
    document.getElementById("phoneError").style.color = "red";

    if (phone.length < 1) {
        document.getElementById("phoneError").innerText = "Vui lòng nhập số điện thoại của bạn!";
    } else {
        if (!validatePhoneNumber(phone)) {
            document.getElementById("phoneError").innerText = "Số điện thoại không tồn tại!";
            return false;
        } else {
            document.getElementById("phoneError").innerText = "";

        }
    }
}
//    xác nhân email
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    document.getElementById("emailError").style.fontSize = "14px";
    document.getElementById("emailError").style.color = "red";

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Vui lòng nhập email hợp lệ!";
    } else {
        document.getElementById("emailError").innerText = "";
    }
}
// xác nhận mật khẩu 
function validatePassword(password1) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    return regex.test(password1);
}
function validatePassword1() {
    var password1 = document.getElementById("password1").value;
    document.getElementById("passwordError1").style.fontSize = "14px";
    document.getElementById("passwordError1").style.color = "red";
    if (password1.length < 1) {
        document.getElementById("passwordError1").innerText = "Vui lòng nhập mật khẩu của bạn!";
    } else {

        if (!validatePassword(password1)) {
            document.getElementById("passwordError1").innerText = "Mật khẩu ít nhất là 8 kí tự gồm chữ hoa, chữ thường, số và kí tự đặc biệt!";
            return false;
        } else {
            document.getElementById("passwordError1").innerText = "";
        }
    }
}

// xác nhận lại mật khẩu
function validatePassword2() {
    var password2 = document.getElementById("password2").value;
    var password1 = document.getElementById("password1").value;


    document.getElementById("passwordError2").style.fontSize = "14px";
    document.getElementById("passwordError2").style.color = "red";

    if (password2.length < 1) {
        document.getElementById("passwordError2").innerText = "Vui lòng nhập lại mật khẩu của bạn!";
    } else {
        if (password1 != password2) {
            document.getElementById("passwordError2").innerText = "Mật khẩu không trùng khớp!";
            return false;
        } else {
            document.getElementById("passwordError2").innerText = "";
        }
    }
}
//phàn order



function send() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mphone = document.getElementById('mphone').value;

    if (document.getElementById("nameErrororder").innerText !== "" ||
        document.getElementById("phoneErrororder").innerText !== "") {
        alert("vui lòng nhập đầy đủ thông tin ")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var scheduledRadio = document.getElementById("scheduled");
    var immediateRadio = document.getElementById("immediate");
    var selectTime = document.querySelector(".seclect-time select");


    var hoantatBtn = document.getElementById("hoantatBtn");
    hoantatBtn.addEventListener("click", function (event) {
        // Kiểm tra xem người dùng đã chọn "Giao hàng - Nhận hàng hẹn giờ" hoặc "Đặt hàng - Giao hàng ngay" chưa
        if (!scheduledRadio.checked && !immediateRadio.checked) {
            alert("Vui lòng chọn một trong hai phương thức giao hàng.");
            event.preventDefault(); // Ngăn chặn sự kiện mặc định của nút submit
        }

        // Nếu người dùng chọn "Giao hàng - Nhận hàng hẹn giờ", kiểm tra xem họ đã chọn giờ nhận hàng chưa
        if (selectTime.value === "") {
            alert("Vui lòng chọn giờ nhận hàng.");
            event.preventDefault(); // Ngăn chặn sự kiện mặc định của nút submit
        }
        // Kiểm tra xem người dùng đã chọn ít nhất một phương thức thanh toán hay chưa
        var paymentOptions = document.querySelectorAll('input[name="payment"]');
        var paymentSelected = false;

        for (var i = 0; i < paymentOptions.length; i++) {
            if (paymentOptions[i].checked) {
                paymentSelected = true;
                break;
            }
        }

        if (!paymentSelected) {
            alert('Vui lòng chọn một phương thức thanh toán.');
            event.preventDefault(); // Ngăn chặn sự kiện mặc định của form
        }
        if (scheduledRadio.checked && selectTime.value !== "" && paymentSelected) {
            alert("Hoàn tất thanh toán!");
            // Chỗ này có thể thêm các hành động khác sau khi hoàn tất thanh toán
        } else {
            alert("Vui lòng kiểm tra và chọn đầy đủ thông tin thanh toán.");
        }
        event.preventDefault(); // Ngăn chặn sự kiện mặc định của nút submit


    });

});

function validateFormorder() {
    validateNameorder();
    /* validateEmailorder();*/
    validatePhoneorder();

    // Kiểm tra nếu có lỗi thì ngăn chặn việc submit form
    if (document.getElementById("nameError").innerText !== "" ||
        document.getElementById("phoneError").innerText !== "") {
        alert('Vui lòng điền đầy đủ thông tin!');
        return false;
    }

    return true;
}
$(document).ready(function () {
    $("#hoantatBtn").click(function (event) {
        // Gọi hàm validateFormorder khi nút được nhấn
        var isValid = validateFormorder();

        // Nếu hàm trả về false (có nghĩa là form không hợp lệ), ngăn chặn việc submit form
        if (!isValid) {
            event.preventDefault();
        }
    });
});


function validateNameorder() {
    var name = document.getElementById("fname").value;
    document.getElementById("nameErrororder").innerText = "";

    if (name.length < 1) {
        document.getElementById("nameErrororder").innerText = "Vui Lòng Nhập Tên Đăng Nhập!";
    }
}

function validateEmailorder() {
    var email = document.getElementById("lname").value;
    document.getElementById("emailErrororder").innerText = "";

    // Kiểm tra định dạng email bằng regex (đơn giản)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailErrororder").innerText = "Địa chỉ email không hợp lệ!";
    }
}

function validatePhoneorder() {
    var mphone = document.getElementById("mphone").value;
    document.getElementById("phoneErrororder").style.fontSize = "14px";
    document.getElementById("phoneErrororder").style.color = "red";

    if (mphone.length < 1) {
        document.getElementById("phoneErrororder").innerText = "Vui lòng nhập số điện thoại của bạn!";
    } else if (!validatePhoneall(mphone)) {
        document.getElementById("phoneErrororder").innerText = "Số Điện Thoại Phải Là Số!";
    } else if (mphone.charAt(0) !== '0') {
        document.getElementById("phoneErrororder").innerText = "Số Điện Thoại Bắt Đầu Phải Là Số 0!";
    } else if (mphone.length !== 10) {
        document.getElementById("phoneErrororder").innerText = "Độ Dài Số Điện Thoại Hợp Lệ Là 10 Số!";
    } else {
        document.getElementById("phoneErrororder").innerText = "";
    }
}

function validatePhoneall(phone) {
    // Kiểm tra xem chuỗi chỉ chứa chữ số hay không
    var phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
}










function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    toggleNav('openNav', 'closeNav');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    toggleNav('closeNav', 'openNav');
}

function toggleNav(id1, id2) {
    var nav1 = document.getElementById(id1);
    var nav2 = document.getElementById(id2);
    nav1.style.display = "none";
    nav2.style.display = "block";
}


//nút radio chọn rồi có thể xóa
var radios = document.querySelectorAll('input[type="radio"]');

// Lặp qua tất cả các nút radio
for (var x = 0; x < radios.length; x++) {
    // Thêm sự kiện 'click' cho mỗi nút radio
    radios[x].addEventListener('click', function () {
        // Kiểm tra xem nút radio đã được chọn trước đó hay chưa
        if (this.getAttribute('data-checked') === '1') {
            // Nếu đã được chọn, bỏ chọn nó và cập nhật thuộc tính 'data-checked'
            this.checked = false;
            this.setAttribute('data-checked', '0');
        } else {
            // Nếu chưa được chọn, đánh dấu nó là đã được chọn
            this.setAttribute('data-checked', '1');
        }
    });
}







// Biến toàn cục để lưu trữ trạng thái chung
let globalState = {
    count: 1,
    selectedOptions: [],
    cart: [],
    total1: 0
};

var counters = document.getElementsByClassName("counter");

function increase() {
    globalState.count++;
    updateCounters();
    updateTotal();
    saveToLocalStorage();
}

function decrease() {
    if (globalState.count > 1) {
        globalState.count--;
        updateCounters();
        updateTotal();
        saveToLocalStorage();
    }
}

function updateCounters() {
    for (var i = 0; i < counters.length; i++) {
        counters[i].innerText = globalState.count;
    }
}


function updateTotal() {
    let total1 = 0;
    const inputs = document.getElementsByClassName('input1');
    globalState.selectedOptions.length = 0; // Xóa danh sách tùy chọn đã chọn

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            const value = inputs[i].value;

            if (value !== undefined) {
                total1 += Number(value);

                // Lưu tên tùy chọn đã chọn vào mảng selectedOptions
                const optionName = inputs[i].getAttribute('data-product-option-name');
                globalState.selectedOptions.push(optionName);
            }
        }
    }

    // Lưu giá trị total vào globalState
    globalState.total1 = total1;

    // Cập nhật Local Storage
    document.getElementById('total1').innerText = total1 * globalState.count;
    saveToLocalStorage();
    return total1;
}

document.addEventListener("DOMContentLoaded", function () {

    window.onload = function () {
        document.getElementById("thin").checked = true;
        document.getElementById("size9").checked = true;

        // Gọi hàm cập nhật tổng để bật Option 3 và nút "Thêm vào giỏ hàng"
        updateTotal();
    };
});

const product = [
    {
        id: 0,
        image: 'https://img.dominos.vn/Pizza+Seoul+vien+khoai+lang+-+TIENG+ANH.jpg',
        title: 'PIZZA SEOUL BÒ XÀO BULGOGI VIỀN KHOAI LANG PHÔ MAI - SEOUL BEEF BULGOGI CHEESY SWEET POTATO CRUST',
        price: 195000,
    },
    {
        id: 1,
        image: 'https://img.dominos.vn/Pizza+Seoul+ko+vien+-+TIENG+ANH.jpg',
        title: 'PIZZA SEOUL BÒ XÀO BULGOGI - SEOUL BEEF BULGOGI',
        price: 176000,
    },
    {
        id: 2,
        image: 'https://img.dominos.vn/Menu+BG+1.jpg',
        title: 'PIZZA NEW YORK BÒ BEEFSTEAK PHÔ MAI - NEW YORK CHEESESTEAK',
        price: 215000,
    }
];

const categories = [...new Set(product.map(item => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map(item => {
    const { image, title, price } = item;
    return `
        <div class="col-9 col-sm-6 col-md-3 py-2 flex-fit">
            <div class="cart_product">
                <div class="product_img">
                    <div class="img">
                        <a class="product" data-bs-toggle="modal" data-bs-target="#idModal">
                            <img class='images' src="${image}" alt="${title}">
                        </a>
                    </div>
                </div>
                <div class="cart_content">
                  <a  class="name product" data-bs-toggle="modal" data-bs-target="#idModal">${title}</a>
                </div>
                <p class="price"> MEDIA - ${price}₫</p>
            </div>
        </div>
    `;
}).join('');

function addtocart(a) {
    globalState.cart.push({ ...categories[a] });
    updateCounters();
    displaycart();
    updateTotal();
    saveToLocalStorage();
    increaseCount();
}

function delElement(a) {
    globalState.cart.splice(a, 1);
    displaycart();
    saveToLocalStorage();
}

function displaycart() {
    let total = updateTotal();

    // Lưu giá trị vào localStorage
    localStorage.setItem('cartLength', globalState.cart.length);

    // Lấy giá trị từ localStorage và cập nhật tất cả các phần tử có class 'count'
    var counts = document.getElementsByClassName("count");
    var cartLength = localStorage.getItem('cartLength');
    for (var i = 0; i < counts.length; i++) {
        counts[i].innerHTML = cartLength;
    }

    if (globalState.cart.length === 0) {
        document.getElementById('cartItem').innerHTML = `
            <div id="cartItem">
                <img class="img-fluid comp-filter-luminosity" src="/Content/images/img/empty-cart.svg" alt="">
                <h6 class="col-12 col-md-10 text-center" style="margin:auto ">
                    Giỏ hàng chưa có sản phẩm. Xin mời bạn mua hàng
                </h6>
            </div>`;
    } else {




        const cartContent = globalState.cart.map((items, index) => {
            const { image, title, } = items;

            const selectedOptionsList = globalState.selectedOptions.map((option) => {
                return `<li>${option}</li>`;
            }).join('');

            return `
          <div class="org-cart-content">
            <div class="org-cart-title huge my-3">
              <div class="d-flex justify-content-between align-items-center">
                <span class="mb-0">Đơn hàng của bạn</span>
                <span class="mb-0"><span id="item-amount">${index + 1}</span> món</span>
              </div>
            </div>
            <table class="table org-cart-table my-3" style="max-height: 40vh;">
              <tbody>
                <tr class="cart-r-item mt-1">
                  <td class="cart-r-item-amount pb-0" id="item-amount">${globalState.count}</td>
                  <td class="cart-r-item-symbol pb-0">x</td>
                  <td class="cart-r-item-product pb-0">
                    <div class="d-flex justify-content-between">
                      <p class="mb-3 pr-2">
                        <span id="item-name">${title}</span>
                      </p>
                      <div class="wrapper text-right">
                        <span class="mb-0 d-block">
                          <span id="item-price">${total * globalState.count}</span>
                        </span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <div class="wrapper">
                        <ul class="list-unstyled small text-grey-dark mb-2">
                          ${selectedOptionsList}
                        </ul>
                        <div class="d-flex justify-content-start flex-wrap small">
                          <a class="text-armchair text-decoration-none mr-2" style="padding-right: 10px;" data-bs-toggle="modal" data-bs-target="#idModal">Điều chỉnh</a>
                          <a class="text-armchair text-decoration-none mr-2" onclick='delElement(${index})'>Xóa</a>
                        </div>
                      </div>
                      <div class="avatar rounded-xl product-thumbnail">
                        <div class="avatar-img">
                          <img style="width:50px" src="${image}" alt="">
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-saw w-80 h-10 border-primary text-primary">Mua theo chương trình khuyến mãi</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
              <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; right: 0px;">
              <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
            </div>
          </div>
          <div class="org-cart-confirm my-3">
            <div class="px-3">
              <div class="cart_summary mb-2 ">
                <div class="row mb-1 cart_summary-total">
                  <div class="col-8"><span class="text-secondary">Tổng</span></div>
                  <div class="col-4 text-right"><span class=""><span>${total * globalState.count}₫</span></span>
                  </div>
                </div>
                <div class="row mb-1 cart_summary-promotion">
                  <div class="col-8"><span class="text-secondary">Giảm K.Mãi</span>
                  </div>
                  <div class="col-4 text-right"><span
                      class="text-danger"><span>0₫</span></span></div>
                </div>
                <div class="row mb-1 cart_summary-voucher">
                  <div class="col-8"><span class="text-secondary">Giảm Vouchers</span>
                  </div>
                  <div class="col-4 text-right"><span
                      class="text-danger"><span>0₫</span></span></div>
                </div>
                <div class="row mb-1 cart_summary-shipping">
                  <div class="col-8"><span class="text-secondary">Phí giao hàng</span>
                  </div>
                  <div class="col-4 text-right"><span
                      class="text-danger"><span>0₫</span></span></div>
                </div>
              </div>
              <p class="text-danger"></p>
            </div><a href="${cartUrl}" class="btn btn-coke w-100"> HOÀN TẤT ĐƠN
              HÀNG&nbsp;&nbsp;&nbsp;&nbsp;<span>${total * globalState.count}₫</span></a>
          </div>
        `;
        }).join('');

        document.getElementById('cartItem').innerHTML = cartContent;
    }
}

function saveToLocalStorage() {
    localStorage.setItem('globalState', JSON.stringify(globalState));
}


// Đọc trạng thái từ Local Storage
function loadFromLocalStorage() {
    const storedState = localStorage.getItem('globalState');
    if (storedState) {
        globalState = JSON.parse(storedState);
        displaycart();
        // Cập nhật giao diện sau khi đọc từ LS
    }
}




// phần order của Xuất hóa đơn đỏ
function toggleAdditionalFields() {
    var checkbox = document.getElementById("expose_red_bill");
    var additionalFields = document.getElementById("additionalFields");

    if (checkbox.checked) {
        additionalFields.classList.remove("hidden");
    } else {
        additionalFields.classList.add("hidden");
    }
}

//Gọi hàm loadCountFromLocalStorage khi trang được tả
document.addEventListener("DOMContentLoaded", function () {
    loadFromLocalStorage();// Đọc trạng thái từ Local Storage khi trang tải 
});
const exampleElement = document.getElementsByClassName('count');

