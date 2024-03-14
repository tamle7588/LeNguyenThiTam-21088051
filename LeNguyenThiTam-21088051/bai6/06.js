// script.js


function isValidUsername(username) {
    return /\d/.test(username);
}

function isValidPassword(password) {
    return password.length >= 5 && /[a-zA-Z]/.test(password) && /\d/.test(password);
}

document.querySelector('.input-submit').addEventListener('click', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('logEmail').value;
    var password = document.getElementById('logPassword').value;

      if (isValidUsername(username) && isValidPassword(password)) {
       
        alert('Login successful!');
    } else {
        alert('Định dạng tên người dùng hoặc mật khẩu không hợp lệ. Vui lòng kiểm tra và thử lại. Tên người dùng phải chứa ít nhất một số và mật khẩu phải dài ít nhất 5 ký tự,chứa số và chữ cái.');
    }
});

function myLogPassword() {
    var passwordInput = document.getElementById("logPassword");
    var eyeIcon = document.getElementById("eye");
    var eyeSlashIcon = document.getElementById("eye-slash");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.style.opacity = "0";
        eyeSlashIcon.style.opacity = "1";
    } else {
        passwordInput.type = "password";
        eyeIcon.style.opacity = "1";
        eyeSlashIcon.style.opacity = "0";
    }
}
