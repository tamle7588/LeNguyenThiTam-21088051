// Đặt sự kiện lắng nghe cho nút gửi
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    // Ngăn chặn hành vi mặc định của form
    event.preventDefault();

    // Lấy giá trị từ các trường input
    var fullname = document.querySelector('input[name="fullname"]').value;
    var mathe = document.querySelector('input[name="mathe"]').value;
    var phone = document.querySelector('input[name="title"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var loaiKH = document.getElementById('Customerid').value;
    var maHD = document.querySelector('input[name="saleoderid"]').value;
    var noiDung = document.querySelector('textarea[name="message"]').value;

    // Hiển thị thông báo
    alert("Họ và Tên: " + fullname + "\n" +
          "Mã thẻ: " + mathe + "\n" +
          "Số điện thoại: " + phone + "\n" +
          "Email: " + email + "\n" +
          "Loại khách hàng: " + loaiKH + "\n" +
          "Mã hóa đơn: " + maHD + "\n" +
          "Nội dung góp ý: " + noiDung);
});
