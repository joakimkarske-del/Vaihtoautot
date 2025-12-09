// Contact form handling
const MESSAGE_DISPLAY_DURATION = 5000;

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Validate form
            if (!data.name || !data.email || !data.subject || !data.message) {
                showMessage('Täytä kaikki pakolliset kentät', 'error');
                return;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showMessage('Syötä kelvollinen sähköpostiosoite', 'error');
                return;
            }

            // Check privacy checkbox
            if (!data.privacy) {
                showMessage('Hyväksy tietosuojakäytäntö jatkaaksesi', 'error');
                return;
            }

            // Simulate form submission (in a real application, this would send to a server)
            console.log('Form data:', data);
            
            // Show success message
            showMessage('Kiitos viestistäsi! Otamme sinuun yhteyttä pian.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide message after configured duration
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, MESSAGE_DISPLAY_DURATION);
    }
});
