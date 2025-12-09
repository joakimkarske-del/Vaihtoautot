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
                const priceParts = selectedPrice.split('-');
                if (priceParts.length === 2) {
                    const minPrice = Number(priceParts[0]);
                    const maxPrice = Number(priceParts[1]);
                    if (!isNaN(minPrice) && !isNaN(maxPrice) && (price < minPrice || price > maxPrice)) {
                        showCard = false;
                    }
                }
            }

            // Year filter
            if (selectedYear) {
                const yearParts = selectedYear.split('-');
                if (yearParts.length === 2) {
                    const minYear = Number(yearParts[0]);
                    const maxYear = Number(yearParts[1]);
                    if (!isNaN(minYear) && !isNaN(maxYear) && (year < minYear || year > maxYear)) {
                        showCard = false;
                    }
                }
            }

            // Show or hide card
            if (showCard) {
                card.style.display = 'block';
                card.classList.add('animate-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('animate-in');
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
