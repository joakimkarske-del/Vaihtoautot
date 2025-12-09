// Load all cars and handle filtering
let allCars = [];
let filteredCars = [];

document.addEventListener('DOMContentLoaded', function() {
    allCars = [...cars];
    filteredCars = [...cars];
    displayCars(filteredCars);
});

// Display cars in the grid
function displayCars(carsToDisplay) {
    const inventoryGrid = document.getElementById('inventoryGrid');
    const inventoryCount = document.getElementById('inventoryCount');

    if (!inventoryGrid) return;

    if (carsToDisplay.length === 0) {
        inventoryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-light);">No vehicles found matching your criteria.</p>';
        inventoryCount.textContent = 'No vehicles found';
        return;
    }

    inventoryGrid.innerHTML = carsToDisplay.map(car => createCarCard(car)).join('');
    inventoryCount.textContent = `Showing ${carsToDisplay.length} vehicle${carsToDisplay.length !== 1 ? 's' : ''}`;
}

// Search cars
function searchCars() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    filteredCars = allCars.filter(car => {
        const searchText = `${car.make} ${car.model} ${car.year}`.toLowerCase();
        return searchText.includes(searchInput);
    });

    // Apply existing filters
    applyFilters();
}

// Filter cars
function filterCars() {
    applyFilters();
}

// Apply all filters
function applyFilters() {
    const makeFilter = document.getElementById('makeFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    filteredCars = allCars.filter(car => {
        // Search filter
        const searchText = `${car.make} ${car.model} ${car.year}`.toLowerCase();
        const matchesSearch = !searchInput || searchText.includes(searchInput);

        // Make filter
        const matchesMake = !makeFilter || car.make === makeFilter;

        // Price filter
        let matchesPrice = true;
        if (priceFilter) {
            const [min, max] = priceFilter.split('-').map(Number);
            matchesPrice = car.price >= min && car.price <= max;
        }

        // Year filter
        let matchesYear = true;
        if (yearFilter) {
            const [minYear, maxYear] = yearFilter.split('-').map(Number);
            matchesYear = car.year >= minYear && car.year <= maxYear;
        }

        return matchesSearch && matchesMake && matchesPrice && matchesYear;
    });

    displayCars(filteredCars);
}

// Reset all filters
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('makeFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('yearFilter').value = '';
    
    filteredCars = [...allCars];
    displayCars(filteredCars);
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchCars();
            }
        });
    }
});
