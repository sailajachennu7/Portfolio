// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    let isValid = true;

    // Name Validation
    if (nameField.value.trim() === '') {
        alert('Name is required');
        isValid = false;
    }

    // Email Validation
    if (!validateEmail(emailField.value)) {
        alert('Please enter a valid email address');
        isValid = false;
    }

    // Message Validation
    if (messageField.value.trim() === '') {
        alert('Please enter a message');
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        alert('Message sent successfully!');
        form.reset(); // Clear the form fields
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Dynamic Theme Switcher (Optional)
const themeToggle = document.createElement('button');
themeToggle.innerText = 'Toggle Theme';
themeToggle.classList.add('fixed', 'bottom-5', 'right-5', 'bg-yellow-500', 'text-black', 'px-4', 'py-2', 'rounded-lg');
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-black');
    document.body.classList.toggle('text-gray-900');
});
