// Car details page - Dynamic content loading
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    const contentDiv = document.getElementById('carDetailsContent');

    // Car database (in a real application, this would come from a backend)
    const cars = {
        '1': {
            name: 'Toyota Corolla',
            year: 2020,
            price: '22 900',
            mileage: '45 000',
            image: 'images/car1.jpg',
            description: 'Hyvin pidetty Toyota Corolla Hybrid on erinomainen valinta, joka yhdistää luotettavuuden ja taloudellisuuden. Auto on varustettu automaattivaihteistolla ja täydellisellä huoltohistorialla.',
            specs: {
                'Vuosimalli': '2020',
                'Kilometrit': '45 000 km',
                'Polttoaine': 'Hybridi (Bensiini/Sähkö)',
                'Vaihteisto': 'Automaatti',
                'Vetotapa': 'Etuveto',
                'Teho': '122 hv',
                'Väri': 'Harmaa metallic',
                'Omistajat': '1',
                'Katsastettu': '10/2024',
                'Seuraava katsastus': '10/2026'
            },
            features: [
                'Ilmastointi',
                'Lämmitin/pistorasia',
                'Peruutuskamera',
                'Cruise control',
                'LED-ajovalot',
                'Bluetooth handsfree',
                'Vetokoukku',
                'Huoltokirja',
                'Takuu 3 kk'
            ]
        },
        '2': {
            name: 'Volkswagen Golf',
            year: 2019,
            price: '18 500',
            mileage: '62 000',
            image: 'images/car2.jpg',
            description: 'Sporttinen Volkswagen Golf Style on täydellinen yhdistelmä ajomukavuutta ja ajotaloutta. Suomalainen 1-omisteinen auto, joka on huollettu säännöllisesti merkkihuollossa.',
            specs: {
                'Vuosimalli': '2019',
                'Kilometrit': '62 000 km',
                'Polttoaine': 'Bensiini',
                'Vaihteisto': 'Manuaali 6-vaiht.',
                'Vetotapa': 'Etuveto',
                'Teho': '130 hv',
                'Väri': 'Musta',
                'Omistajat': '1',
                'Katsastettu': '08/2024',
                'Seuraava katsastus': '08/2026'
            },
            features: [
                'Ilmastointi',
                'Navigointijärjestelmä',
                'LED-valot',
                'Sähkötoimiset ikkunat',
                'Vakionopeudensäädin',
                'Kaistavahti',
                'Multifunktio-ohjauspyörä',
                'Suomiauto',
                'Takuu 3 kk'
            ]
        },
        '3': {
            name: 'Volvo XC60',
            year: 2021,
            price: '42 900',
            mileage: '28 000',
            image: 'images/car3.jpg',
            description: 'Upea Volvo XC60 edustaa skandinaavista luksusta parhaimmillaan. Neliveto, automaatti ja huippuvarustelu tekevät tästä täydellisen perheen SUV:n.',
            specs: {
                'Vuosimalli': '2021',
                'Kilometrit': '28 000 km',
                'Polttoaine': 'Diesel',
                'Vaihteisto': 'Automaatti 8-vaiht.',
                'Vetotapa': 'Neliveto (AWD)',
                'Teho': '190 hv',
                'Väri': 'Valkoinen metallic',
                'Omistajat': '1',
                'Katsastettu': '11/2024',
                'Seuraava katsastus': '11/2026'
            },
            features: [
                'Nahkasisusta',
                'Panoraamakatto',
                'Navigointijärjestelmä',
                'Peruutuskamera 360°',
                'Lämmitettävät istuimet',
                'Lämmitettävä ohjauspyörä',
                'Mukautuva vakkari',
                'Kaistanpitovahti',
                'LED-valot',
                'Digitaalinen mittaristo',
                'Harman Kardon äänentoisto',
                'Sähkötoiminen takaluukku',
                'Takuu 6 kk'
            ]
        },
        '4': {
            name: 'BMW 3-sarja',
            year: 2019,
            price: '28 900',
            mileage: '55 000',
            image: 'images/car4.jpg',
            description: 'Sporttinen BMW 3-sarja M Sport -varustuksella. Neliveto takaa erinomaisen ajodynamiikan kaikissa olosuhteissa.',
            specs: {
                'Vuosimalli': '2019',
                'Kilometrit': '55 000 km',
                'Polttoaine': 'Diesel',
                'Vaihteisto': 'Automaatti 8-vaiht.',
                'Vetotapa': 'Neliveto (xDrive)',
                'Teho': '190 hv',
                'Väri': 'Sininen metallic',
                'Omistajat': '2',
                'Katsastettu': '09/2024',
                'Seuraava katsastus': '09/2026'
            },
            features: [
                'M Sport -paketti',
                'Navigointi',
                'LED-valot',
                'Sporttiistuimet',
                'Ilmastointi',
                'Cruise control',
                'PDC edessä ja takana',
                'Bluetooth',
                'USB-liitännät',
                'Takuu 3 kk'
            ]
        },
        '5': {
            name: 'Mercedes-Benz C-Class',
            year: 2020,
            price: '35 500',
            mileage: '38 000',
            image: 'images/car5.jpg',
            description: 'Tyylikäs Mercedes-Benz C-Class AMG Line -paketilla. Laadukas nahkasisusta ja täydellinen varustelu.',
            specs: {
                'Vuosimalli': '2020',
                'Kilometrit': '38 000 km',
                'Polttoaine': 'Diesel',
                'Vaihteisto': 'Automaatti 9-vaiht.',
                'Vetotapa': 'Takaveto',
                'Teho': '194 hv',
                'Väri': 'Harmaa metallic',
                'Omistajat': '1',
                'Katsastettu': '10/2024',
                'Seuraava katsastus': '10/2026'
            },
            features: [
                'AMG Line -paketti',
                'Nahkasisusta',
                'LED-valot',
                'Navigointi',
                'Lämmitettävät istuimet',
                'Peruutuskamera',
                'Vakionopeudensäädin',
                'Sporttiohjauspyörä',
                'Burmester äänentoisto',
                'Takuu 3 kk'
            ]
        },
        '6': {
            name: 'Toyota Yaris',
            year: 2018,
            price: '16 900',
            mileage: '72 000',
            image: 'images/car6.jpg',
            description: 'Taloudellinen ja luotettava Toyota Yaris Hybrid. Täydellinen kaupunkiauto pienellä polttoaineenkulutuksella.',
            specs: {
                'Vuosimalli': '2018',
                'Kilometrit': '72 000 km',
                'Polttoaine': 'Hybridi',
                'Vaihteisto': 'Automaatti',
                'Vetotapa': 'Etuveto',
                'Teho': '100 hv',
                'Väri': 'Punainen',
                'Omistajat': '2',
                'Katsastettu': '07/2024',
                'Seuraava katsastus': '07/2026'
            },
            features: [
                'Ilmastointi',
                'Bluetooth',
                'LED-päiväajovalot',
                'Sähköikkunat',
                'Etusumuvalaisimet',
                'Säädettävä ohjauspyörä',
                'Huoltokirja',
                'Takuu 3 kk'
            ]
        }
    };

    if (!carId || !cars[carId]) {
        contentDiv.innerHTML = `
            <div style="padding: 50px; text-align: center;">
                <h2>Autoa ei löytynyt</h2>
                <p>Valitsemaasi autoa ei löydy tietokannastamme.</p>
                <a href="cars.html" class="btn btn-primary">Palaa autoihin</a>
            </div>
        `;
        return;
    }

    const car = cars[carId];

    // Build specs HTML
    let specsHTML = '';
    for (const [key, value] of Object.entries(car.specs)) {
        specsHTML += `<li><strong>${key}:</strong> <span>${value}</span></li>`;
    }

    // Build features HTML
    let featuresHTML = '';
    car.features.forEach(feature => {
        featuresHTML += `<li>${feature}</li>`;
    });

    // Generate content
    contentDiv.innerHTML = `
        <div class="car-details-header">
            <h1>${car.name}</h1>
            <p class="car-year">${car.year} • ${car.mileage} km</p>
            <p class="price" style="font-size: 2.5rem; margin-top: 1rem;">${car.price} €</p>
        </div>
        <div class="car-details-body">
            <div class="car-image-section">
                <img src="${car.image}" alt="${car.name}" onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(car.name)}'">
            </div>
            <div class="car-specs-section">
                <h2>Tekniset tiedot</h2>
                <ul class="specs-list">
                    ${specsHTML}
                </ul>
            </div>
            <div class="car-description-section">
                <h2>Kuvaus</h2>
                <p>${car.description}</p>
                <h2 style="margin-top: 2rem;">Varusteet</h2>
                <ul class="features-list">
                    ${featuresHTML}
                </ul>
            </div>
        </div>
    `;
});
