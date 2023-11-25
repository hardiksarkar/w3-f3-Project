function validateForm() {
    var form = document.getElementById('myForm');
    if (form.checkValidity() === false) {
        // document.getElementById("error-message").innerHTML = "All";
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');

    // Custom validation for password matching
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('error-message').innerHTML = 'Error: Passwords do not match.';
    } else {
        document.getElementById('error-message').innerHTML = '';
    }
}