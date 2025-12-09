# Vaihtoautot - Used Car Dealer Website

A modern, responsive website for a used car dealership. Built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Car Inventory**: Browse through available vehicles with detailed information
- **Search & Filter**: Find cars by make, price range, and year
- **Car Details**: View comprehensive specifications and features for each vehicle
- **About Page**: Learn about the dealership and services offered
- **Contact Form**: Easy way for customers to get in touch
- **Mobile Navigation**: Touch-friendly navigation menu for mobile devices

## Pages

1. **Home (index.html)**: Landing page with featured cars and call-to-action
2. **Inventory (inventory.html)**: Complete listing of all available vehicles with search/filter
3. **About (about.html)**: Information about the dealership, mission, and services
4. **Contact (contact.html)**: Contact form and dealership information

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No server or build process required - it's a static website!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joakimkarske-del/Vaihtoautot.git
```

2. Navigate to the project directory:
```bash
cd Vaihtoautot
```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local development server (e.g., `python -m http.server` or VS Code Live Server)

### Using a Local Development Server (Optional)

**Python:**
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

**Node.js (using http-server):**
```bash
npx http-server
# Then visit http://localhost:8080
```

## Project Structure

```
Vaihtoautot/
├── index.html              # Home page
├── inventory.html          # Vehicle inventory page
├── about.html              # About us page
├── contact.html            # Contact page
├── styles/
│   └── main.css           # All styling
├── scripts/
│   ├── cars-data.js       # Vehicle inventory data
│   ├── main.js            # Main JavaScript functionality
│   ├── inventory.js       # Inventory page logic
│   └── contact.js         # Contact form handling
└── README.md              # This file
```

## Customization

### Adding New Cars

Edit `scripts/cars-data.js` and add new car objects to the `cars` array:

```javascript
{
    id: 13,
    make: "Honda",
    model: "Civic",
    year: 2021,
    price: 22000,
    mileage: 15000,
    fuel: "Petrol",
    transmission: "Manual",
    color: "Red",
    description: "Your description here",
    features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Changing Colors

Modify the CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* Add your custom colors here */
}
```

### Updating Contact Information

Edit the footer and contact page with your actual business details:
- Phone number
- Email address
- Physical address
- Business hours

## Features in Detail

### Search & Filter
- **Search**: Find cars by make, model, or year
- **Make Filter**: Filter by car manufacturer
- **Price Range**: Filter by price brackets
- **Year Range**: Filter by year of manufacture

### Car Details Modal
- Comprehensive vehicle specifications
- List of features and amenities
- Direct link to contact form

### Contact Form
- Client-side validation
- Required field indicators
- Success/error messages
- Multiple inquiry types

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential features for future versions:
- Backend integration for form submissions
- Database for car inventory
- Image upload functionality
- User accounts and favorites
- Advanced search with more filters
- Virtual test drive scheduler
- Financing calculator
- Trade-in value estimator

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please contact:
- Email: info@vaihtoautot.fi
- Phone: +358 40 123 4567

---

Built with ❤️ for the used car industry