// Lấy các phần tử từ trang
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");

// Sự kiện khi nhấn vào nút 'Em bé Đức Trí' (nút Yes)
yesBtn.addEventListener("click", () => {
    // Cập nhật nội dung và hình ảnh
    question.innerHTML = "Aaaaa thì ra ngươi là đồ béo đáng ghét";
    gif.src = "https://qoobee.com/wp-content/uploads/laughing-emoji-100.gif";

    // Ẩn cả hai nút và mô tả
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    questionPrompt.style.display = "none";
});

// Sự kiện khi di chuyển chuột đến gần nút 'Em bé Uyn Uyn' (nút No)
noBtn.addEventListener("mouseover", () => {
    // Xác định kích thước và vị trí mới cho nút
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Cập nhật vị trí của nút
    noBtn.style.position = 'absolute'; // Thêm dòng này để chắc chắn rằng nút có thể di chuyển đúng
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
