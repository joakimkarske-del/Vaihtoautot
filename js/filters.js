// Filter functionality for cars page
document.addEventListener('DOMContentLoaded', function() {
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const yearFilter = document.getElementById('yearFilter');
    const resetButton = document.getElementById('resetFilters');
    const carCards = document.querySelectorAll('.car-card');

    function filterCars() {
        const selectedBrand = brandFilter.value.toLowerCase();
        const selectedPrice = priceFilter.value;
        const selectedYear = yearFilter.value;

        carCards.forEach(card => {
            const brand = card.getAttribute('data-brand');
            const price = parseInt(card.getAttribute('data-price'));
            const year = parseInt(card.getAttribute('data-year'));

            let showCard = true;

            // Brand filter
            if (selectedBrand && brand !== selectedBrand) {
                showCard = false;
            }

            // Price filter
            if (selectedPrice) {
                const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
                if (price < minPrice || price > maxPrice) {
                    showCard = false;
                }
            }

            // Year filter
            if (selectedYear) {
                const [minYear, maxYear] = selectedYear.split('-').map(Number);
                if (year < minYear || year > maxYear) {
                    showCard = false;
                }
            }

            // Show or hide card
            if (showCard) {
                card.style.display = 'block';
                // Add fade-in animation
                card.style.animation = 'fadeIn 0.5s';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listeners
    if (brandFilter) {
        brandFilter.addEventListener('change', filterCars);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterCars);
    }
    if (yearFilter) {
        yearFilter.addEventListener('change', filterCars);
    }

    // Reset filters
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            brandFilter.value = '';
            priceFilter.value = '';
            yearFilter.value = '';
            filterCars();
        });
    }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
