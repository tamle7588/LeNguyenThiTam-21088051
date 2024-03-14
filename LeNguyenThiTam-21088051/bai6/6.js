// script.js
document.getElementById('login-btn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are in the correct format (e.g., Gmail format)
    if (isValidUsername(username) && isValidPassword(password)) {
        // Perform login logic here
        alert('Login successful!');
    } else {
        alert('Invalid username or password format. Please check and try again.');
    }
});

function isValidUsername(username) {
    // Implement your username validation logic (e.g., check if it's a valid Gmail address)
    return true;
}

function isValidPassword(password) {
    // Implement your password validation logic (e.g., check if it meets certain criteria)
    return true;
}
