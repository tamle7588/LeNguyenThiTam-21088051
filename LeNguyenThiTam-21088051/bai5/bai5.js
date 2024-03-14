const showPasswordBtn = document.getElementById('showPasswordBtn');
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

showPasswordBtn.addEventListener('click', function() {

  alert("Bạn muốn hiện mật khẩu");
  passwordInput.type = 'text';
});

loginBtn.addEventListener('click', function() {

  alert("Bạn đã đăng nhập thành công");
  
  usernameInput.value = '';
  passwordInput.value = '';
});


