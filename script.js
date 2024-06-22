document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');
    var loader = document.getElementById('loader');

    // Show loader
    loader.style.display = 'block';

    // Simulate AJAX request with setTimeout
    setTimeout(function() {
        // Hide loader
        loader.style.display = 'none';

        // Simple validation
        if (username.trim() === '' || password.trim() === '') {
            errorMessage.textContent = 'Please enter both username and password.';
            successMessage.textContent = '';
        } else {
            // Clear error message
            errorMessage.textContent = '';

            // Simulate successful login
            successMessage.textContent = 'Login successful!';
            // You can replace the success message with AJAX response handling
        }
    }, 1500); // Simulate a delay for user experience
});
