document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailPattern)) {
        errorMsg.innerText = "Please enter a valid email address.";
        return;
    }
    if (password.length < 8) {
        errorMsg.innerText = "Password must be at least 8 characters long.";
        return;
    }
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    if (!(hasUpperCase && hasLowerCase && hasNumber)) {
        errorMsg.innerText = "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
        return;
    }
    errorMsg.innerText = "";
    this.submit();
});

