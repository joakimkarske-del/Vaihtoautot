// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;

    // Simulate form submission (in a real application, this would send to a server)
    formMessage.className = 'form-message success';
    formMessage.textContent = `Thank you, ${name}! We've received your message and will respond to ${email} shortly.`;

    // Reset form
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);

    return false;
}

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
});

function validateField(field) {
    if (field.hasAttribute('required') && !field.value.trim()) {
        field.style.borderColor = 'var(--danger-color)';
        return false;
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            field.style.borderColor = 'var(--danger-color)';
            return false;
        }
    }
    
    field.style.borderColor = 'var(--border-color)';
    return true;
}
