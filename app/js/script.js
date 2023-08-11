/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('successMessage');
    const confirmEmailSpan = document.getElementById('confirmEmail');
    const dismissBtn = document.getElementById('dismissBtn');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (email && isValidEmail(email)) {
            confirmEmailSpan.textContent = email;
            successMessage.style.display = 'block';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    dismissBtn.addEventListener('click', () => {
        successMessage.style.display = 'none';
    });

    const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
});*/