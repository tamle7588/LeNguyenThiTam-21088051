document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn biểu mẫu gửi đi mặc định

    const formData = new FormData(this);
    let submittedInfo = ''; // Chuỗi để chứa thông tin đã nhập

    // Lặp qua các cặp giá trị của formData và thêm vào submittedInfo
    for (let [key, value] of formData.entries()) {
        submittedInfo += `${key}: ${value}\n`;
    }

    // Xuất thông báo với thông tin đã nhập
    alert("\n" + submittedInfo);

    // làm mới form
    this.reset();
});
