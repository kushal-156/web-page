document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('Mail');
    const phoneInput = document.getElementById('Phoneno');
    const submitButton = document.querySelector('.button1');
    const form = document.querySelector('.contact');

    // Real-time validation for email
    emailInput.addEventListener('input', function () {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = 'rgba(255, 255, 255, 0.7)';
        }
    });

    // Real-time validation for phone number
    phoneInput.addEventListener('input', function () {
        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(phoneInput.value)) {
            phoneInput.style.borderColor = 'red';
        } else {
            phoneInput.style.borderColor = 'rgba(255, 255, 255, 0.7)';
        }
    });

    // Form submission handling
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Stop the form from submitting

        // For demonstration, we'll simply show a thank you message.
        // In a real application, you might want to send the form data to a server.
        const container = document.querySelector('.container');
        container.innerHTML = '<h2>Thank You!</h2><p>Your message has been sent. We\'ll get back to you soon!</p>';
    });
});
