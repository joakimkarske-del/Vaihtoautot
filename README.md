# Vaihtoautot - Used Car Dealer Website

A modern, responsive website for a used car dealership. Built with HTML, CSS, and JavaScript.

## Features

- **Homepage**: Eye-catching hero section with featured cars
- **Car Inventory**: Browse all available cars with filtering options
- **Car Details**: Detailed information page for each vehicle
- **About Us**: Information about the dealership
- **Contact Form**: Get in touch with the dealership
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Finnish Language**: Fully localized for Finnish market

## Pages

- `index.html` - Homepage with hero section and featured cars
- `cars.html` - Full car inventory with filters
- `car-details.html` - Individual car details page
- `about.html` - About the dealership
- `contact.html` - Contact form and information

## Structure

```
Vaihtoautot/
├── index.html          # Homepage
├── cars.html           # Car inventory page
├── car-details.html    # Car details page
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   ├── main.js         # Navigation and general functionality
│   ├── filters.js      # Car filtering functionality
│   ├── contact.js      # Contact form handling
│   └── car-details.js  # Car details page logic
└── images/             # Car images directory
```

## How to Use

1. **Local Development**:
   - Simply open `index.html` in a web browser
   - No build process or server required

2. **Deployment**:
   - Upload all files to your web hosting
   - Ensure directory structure is maintained
   - Add actual car images to the `images/` directory

3. **Customization**:
   - Update car data in `js/car-details.js`
   - Modify colors in `css/styles.css` (CSS variables at top)
   - Replace placeholder images with actual car photos
   - Update contact information in all pages

## Features in Detail

### Car Filtering
The cars page includes filters for:
- Brand (Toyota, Volkswagen, Volvo, BMW, Mercedes-Benz)
- Price range
- Year range

### Car Database
Car information is stored in JavaScript objects in `car-details.js`. In a production environment, this would be replaced with a backend API.

### Responsive Design
The website adapts to different screen sizes:
- Desktop: Full navigation and multi-column layouts
- Tablet: Adjusted layouts
- Mobile: Hamburger menu and single-column layouts

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS (no frameworks)
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration for dynamic car data
- Search functionality
- Image galleries for each car
- Comparison feature
- User favorites/saved cars
- Admin panel for managing inventory

## License

Copyright © 2024 Vaihtoautot. All rights reserved.