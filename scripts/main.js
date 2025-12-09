// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && !event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
        }
    });

    // Load featured cars on home page
    if (document.getElementById('featuredCars')) {
        loadFeaturedCars();
    }
});

// Format price with Euro symbol
function formatPrice(price) {
    return '€' + price.toLocaleString('fi-FI');
}

// Format mileage
function formatMileage(mileage) {
    return mileage.toLocaleString('fi-FI') + ' km';
}

// Create car card HTML
function createCarCard(car) {
    return `
        <div class="car-card" onclick="showCarDetails(${car.id})">
            <div class="car-image">🚗</div>
            <div class="car-content">
                <h3 class="car-title">${car.year} ${car.make} ${car.model}</h3>
                <div class="car-details">
                    <span class="car-detail-item">📅 ${car.year}</span>
                    <span class="car-detail-item">⚡ ${car.fuel}</span>
                    <span class="car-detail-item">🔧 ${car.transmission}</span>
                    <span class="car-detail-item">🎨 ${car.color}</span>
                </div>
                <p class="car-detail-item">📏 ${formatMileage(car.mileage)}</p>
                <p class="car-price">${formatPrice(car.price)}</p>
            </div>
        </div>
    `;
}

// Load featured cars (first 6)
function loadFeaturedCars() {
    const featuredCarsContainer = document.getElementById('featuredCars');
    if (!featuredCarsContainer) return;

    const featuredCars = cars.slice(0, 6);
    featuredCarsContainer.innerHTML = featuredCars.map(car => createCarCard(car)).join('');
}

// Show car details in modal
function showCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    const modal = document.getElementById('carModal');
    const detailsContainer = document.getElementById('carDetails');

    if (!modal || !detailsContainer) {
        // If no modal on page, do nothing
        return;
    }

    const featuresHTML = car.features.map(feature => `<li>✓ ${feature}</li>`).join('');

    detailsContainer.innerHTML = `
        <div class="car-detail-modal">
            <h2>${car.year} ${car.make} ${car.model}</h2>
            <div class="car-detail-image">🚗</div>
            <p style="margin-bottom: 2rem; color: var(--text-light);">${car.description}</p>
            
            <div class="car-specs">
                <div class="spec-item">
                    <strong>Price</strong>
                    <span>${formatPrice(car.price)}</span>
                </div>
                <div class="spec-item">
                    <strong>Year</strong>
                    <span>${car.year}</span>
                </div>
                <div class="spec-item">
                    <strong>Mileage</strong>
                    <span>${formatMileage(car.mileage)}</span>
                </div>
                <div class="spec-item">
                    <strong>Fuel Type</strong>
                    <span>${car.fuel}</span>
                </div>
                <div class="spec-item">
                    <strong>Transmission</strong>
                    <span>${car.transmission}</span>
                </div>
                <div class="spec-item">
                    <strong>Color</strong>
                    <span>${car.color}</span>
                </div>
            </div>

            <h3 style="margin: 2rem 0 1rem;">Features</h3>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.5rem; list-style: none;">
                ${featuresHTML}
            </ul>

            <div style="margin-top: 2rem; text-align: center;">
                <a href="contact.html" class="btn btn-primary">Contact About This Car</a>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Close car modal
function closeCarModal() {
    const modal = document.getElementById('carModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
