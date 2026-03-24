// ==================== BASE DE DONNÉES DES CHIOTS ====================
// 20 races populaires avec photos, prix et descriptions

let puppies = [
    {
        id: 1,
        name: "Thor",
        breed: "Berger Allemand",
        age: "3 mois",
        price: 1200,
        description: "Chiot Berger Allemand LOF, parents testés dysplasie. Caractère équilibré, excellent gardien et compagnon familial. Premier vaccin fait, vermifugé, puce électronique.",
        image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé, identification I-CAD",
        gender: "Mâle",
        weight: "8 kg",
        color: "Noir et feu"
    },
    {
        id: 2,
        name: "Luna",
        breed: "Golden Retriever",
        age: "2.5 mois",
        price: 1500,
        description: "Golden Retriever LOF, sociable et joueur. Parfait avec les enfants. Parents champions de beauté. Vaccins à jour, vermifugé, identifié.",
        image: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé, identification I-CAD",
        gender: "Femelle",
        weight: "7 kg",
        color: "Doré"
    },
    {
        id: 3,
        name: "Rocky",
        breed: "Bouledogue Français",
        age: "4 mois",
        price: 1800,
        description: "Bouledogue Français LOF, calme et affectueux. Idéal pour appartement. Tête large, bonnes narines. Vaccins à jour, vermifugé.",
        image: "https://images.pexels.com/photos/1795205/pexels-photo-1795205.jpeg",
        available: true,
        vaccines: "Vaccins à jour, vermifugé, identification",
        gender: "Mâle",
        weight: "6 kg",
        color: "Bringé"
    },
    {
        id: 4,
        name: "Maya",
        breed: "Husky Sibérien",
        age: "3 mois",
        price: 1400,
        description: "Husky Sibérien LOF, yeux bleus magnifiques. Très sociable, adore courir. Parents avec pedigree.",
        image: "https://images.pexels.com/photos/4503330/pexels-photo-4503330.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Femelle",
        weight: "9 kg",
        color: "Gris et blanc"
    },
    {
        id: 5,
        name: "Max",
        breed: "Labrador",
        age: "2 mois",
        price: 1300,
        description: "Labrador LOF, caractère doux et joueur. Parfait pour la famille. Parents testés santé.",
        image: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Mâle",
        weight: "7 kg",
        color: "Chocolat"
    },
    {
        id: 6,
        name: "Coco",
        breed: "Caniche Royal",
        age: "3 mois",
        price: 1100,
        description: "Caniche Royal LOF, hypoallergénique, ne perd pas ses poils. Très intelligent et facile à éduquer.",
        image: "https://images.pexels.com/photos/5999765/pexels-photo-5999765.jpeg",
        available: true,
        vaccines: "Vaccins à jour",
        gender: "Femelle",
        weight: "5 kg",
        color: "Blanc"
    },
    {
        id: 7,
        name: "Rex",
        breed: "Rottweiler",
        age: "3 mois",
        price: 1350,
        description: "Rottweiler LOF, excellent gardien. Très loyal et protecteur. Parents testés dysplasie.",
        image: "https://images.pexels.com/photos/6466109/pexels-photo-6466109.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Mâle",
        weight: "10 kg",
        color: "Noir et feu"
    },
    {
        id: 8,
        name: "Nala",
        breed: "Cavalier King Charles",
        age: "2.5 mois",
        price: 1250,
        description: "Cavalier King Charles LOF, doux et câlin. Excellent chien d'appartement. Parents testés santé.",
        image: "https://images.pexels.com/photos/33053/dog-cavalier-king-charles-pet-animal.jpg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Femelle",
        weight: "4 kg",
        color: "Tricolore"
    },
    {
        id: 9,
        name: "Zeus",
        breed: "Doberman",
        age: "3 mois",
        price: 1450,
        description: "Doberman LOF, élégant et protecteur. Très intelligent, facile à dresser. Parents champions.",
        image: "https://images.pexels.com/photos/4455640/pexels-photo-4455640.jpeg",
        available: true,
        vaccines: "Vaccins à jour",
        gender: "Mâle",
        weight: "9 kg",
        color: "Noir et feu"
    },
    {
        id: 10,
        name: "Milo",
        breed: "Beagle",
        age: "2 mois",
        price: 1000,
        description: "Beagle LOF, joyeux et énergique. Parfait pour les familles actives. Bon odorat, adore jouer.",
        image: "https://images.pexels.com/photos/5070247/pexels-photo-5070247.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Mâle",
        weight: "5 kg",
        color: "Tricolore"
    },
    {
        id: 11,
        name: "Chanel",
        breed: "Yorkshire Terrier",
        age: "2.5 mois",
        price: 1150,
        description: "Yorkshire Terrier LOF, petit et élégant. Parfait pour appartement. Très attaché à son maître.",
        image: "https://images.pexels.com/photos/584550/pexels-photo-584550.jpeg",
        available: true,
        vaccines: "Vaccins à jour",
        gender: "Femelle",
        weight: "2 kg",
        color: "Noir et or"
    },
    {
        id: 12,
        name: "Simba",
        breed: "Boxer",
        age: "3 mois",
        price: 1250,
        description: "Boxer LOF, dynamique et protecteur. Excellent avec les enfants. Parents testés santé.",
        image: "https://images.pexels.com/photos/6814607/pexels-photo-6814607.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Mâle",
        weight: "8 kg",
        color: "Fauve"
    },
    {
        id: 13,
        name: "Bella",
        breed: "Shih Tzu",
        age: "2 mois",
        price: 1050,
        description: "Shih Tzu LOF, petit et affectueux. Parfait pour la vie en appartement. Calme et doux.",
        image: "https://images.pexels.com/photos/4519152/pexels-photo-4519152.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Femelle",
        weight: "3 kg",
        color: "Blanc et marron"
    },
    {
        id: 14,
        name: "Koda",
        breed: "Border Collie",
        age: "3 mois",
        price: 1300,
        description: "Border Collie LOF, très intelligent et énergique. Excellent pour l'agility. Parents champions.",
        image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
        available: true,
        vaccines: "Vaccins à jour",
        gender: "Mâle",
        weight: "7 kg",
        color: "Noir et blanc"
    },
    {
        id: 15,
        name: "Gizmo",
        breed: "Carlin",
        age: "2 mois",
        price: 1100,
        description: "Carlin LOF, petit et joueur. Très drôle et attachant. Parfait pour appartement.",
        image: "https://images.pexels.com/photos/970077/pexels-photo-970077.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Mâle",
        weight: "3.5 kg",
        color: "Fauve"
    },
    {
        id: 16,
        name: "Athena",
        breed: "Malinois",
        age: "3 mois",
        price: 1400,
        description: "Malinois LOF, très intelligent et sportif. Excellent pour le travail et l'obéissance.",
        image: "https://images.pexels.com/photos/6942474/pexels-photo-6942474.jpeg",
        available: true,
        vaccines: "Vaccins à jour",
        gender: "Femelle",
        weight: "8 kg",
        color: "Fauve"
    },
    {
        id: 17,
        name: "Einstein",
        breed: "Corgi",
        age: "2.5 mois",
        price: 1200,
        description: "Corgi LOF, petit et espiègle. Très intelligent et fidèle. Parfait pour la famille.",
        image: "https://images.pexels.com/photos/6204203/pexels-photo-6204203.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Mâle",
        weight: "5 kg",
        color: "Roux et blanc"
    },
    {
        id: 18,
        name: "Lola",
        breed: "Jack Russell",
        age: "2 mois",
        price: 950,
        description: "Jack Russell LOF, petit mais très énergique. Parfait pour les personnes actives.",
        image: "https://images.pexels.com/photos/8457905/pexels-photo-8457905.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Femelle",
        weight: "4 kg",
        color: "Blanc et marron"
    },
    {
        id: 19,
        name: "Bear",
        breed: "Chow Chow",
        age: "3 mois",
        price: 1600,
        description: "Chow Chow LOF, majestueux et indépendant. Très propre et calme. Langue bleue caractéristique.",
        image: "https://images.pexels.com/photos/7210256/pexels-photo-7210256.jpeg",
        available: true,
        vaccines: "Vaccins à jour",
        gender: "Mâle",
        weight: "9 kg",
        color: "Roux"
    },
    {
        id: 20,
        name: "Ruby",
        breed: "Setter Irlandais",
        age: "2.5 mois",
        price: 1250,
        description: "Setter Irlandais LOF, élégant et doux. Excellent chien de chasse et de compagnie.",
        image: "https://images.pexels.com/photos/1853484/pexels-photo-1853484.jpeg",
        available: true,
        vaccines: "1er vaccin, vermifugé",
        gender: "Femelle",
        weight: "7 kg",
        color: "Rouge acajou"
    }
];

// Sauvegarde et chargement
function savePuppies() {
    localStorage.setItem('puppies', JSON.stringify(puppies));
}

function loadPuppies() {
    const stored = localStorage.getItem('puppies');
    if (stored) {
        puppies = JSON.parse(stored);
    } else {
        savePuppies();
    }
}

// Afficher les races populaires
function displayPopularBreeds() {
    const container = document.getElementById('popular-breeds');
    if (!container) return;
    
    const breeds = [...new Set(puppies.map(p => p.breed))].slice(0, 8);
    
    container.innerHTML = breeds.map(breed => `
        <div class="breed-card" onclick="filterByBreed('${breed}')">
            <img src="https://via.placeholder.com/100x100?text=${breed.substring(0,3)}" alt="${breed}">
            <h4>${breed}</h4>
            <p>À partir de ${puppies.find(p => p.breed === breed)?.price}€</p>
        </div>
    `).join('');
}

// Filtrer par race
function filterByBreed(breed) {
    window.location.href = `catalog.html?breed=${encodeURIComponent(breed)}`;
}

// Afficher les chiots sur l'accueil
function displayHomePuppies() {
    const grid = document.getElementById('home-puppies');
    if (!grid) return;
    
    const availablePuppies = puppies.filter(p => p.available).slice(0, 8);
    
    grid.innerHTML = availablePuppies.map(puppy => `
        <div class="puppy-card">
            <img src="${puppy.image}" alt="${puppy.name}" onerror="this.src='https://via.placeholder.com/300x250?text=${puppy.breed}'">
            <div class="puppy-info">
                <h3>${puppy.name}</h3>
                <p class="puppy-breed">${puppy.breed} • ${puppy.gender} • ${puppy.age}</p>
                <p class="puppy-price">${puppy.price.toLocaleString()} € <small>ou ${(puppy.price / 50000).toFixed(5)} BTC</small></p>
                <a href="product.html?id=${puppy.id}" class="btn-primary">Voir détails</a>
            </div>
        </div>
    `).join('');
}

// Afficher tous les chiots dans le catalogue
function displayCatalog() {
    const grid = document.querySelector('.puppies-grid');
    const urlParams = new URLSearchParams(window.location.search);
    const breedFilter = urlParams.get('breed');
    
    if (!grid) return;
    
    let filteredPuppies = puppies.filter(p => p.available);
    
    if (breedFilter) {
        filteredPuppies = filteredPuppies.filter(p => p.breed === breedFilter);
        const filterTitle = document.querySelector('.catalog-section h2');
        if (filterTitle) filterTitle.innerHTML = `Chiots ${breedFilter} disponibles`;
    }
    
    if (filteredPuppies.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Aucun chiot disponible pour le moment.</p>';
        return;
    }
    
    grid.innerHTML = filteredPuppies.map(puppy => `
        <div class="puppy-card">
            <img src="${puppy.image}" alt="${puppy.name}" onerror="this.src='https://via.placeholder.com/300x250?text=${puppy.breed}'">
            <div class="puppy-info">
                <h3>${puppy.name}</h3>
                <p class="puppy-breed">${puppy.breed} • ${puppy.gender} • ${puppy.age}</p>
                <p class="puppy-price">${puppy.price.toLocaleString()} €</p>
                <a href="product.html?id=${puppy.id}" class="btn-primary">Réserver</a>
            </div>
        </div>
    `).join('');
}

// Charger les détails d'un chiot
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const puppyId = parseInt(urlParams.get('id'));
    
    const puppy = puppies.find(p => p.id === puppyId);
    
    if (!puppy) {
        window.location.href = 'catalog.html';
        return;
    }
    
    const elements = {
        'puppy-name': puppy.name,
        'puppy-breed': puppy.breed,
        'puppy-age': puppy.age,
        'puppy-gender': puppy.gender,
        'puppy-price': `${puppy.price.toLocaleString()} €`,
        'puppy-description': puppy.description,
        'puppy-vaccines': puppy.vaccines,
        'puppy-weight': puppy.weight,
        'puppy-color': puppy.color
    };
    
    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
    
    const imgEl = document.getElementById('puppy-image');
    if (imgEl) imgEl.src = puppy.image;
    
    const reserveBtn = document.getElementById('reserve-btn');
    if (reserveBtn) {
        reserveBtn.href = `checkout.html?id=${puppy.id}`;
    }
}

// Menu mobile
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadPuppies();
    displayPopularBreeds();
    displayHomePuppies();
    displayCatalog();
    loadProductDetails();
    initMobileMenu();
});

// Exporter pour les autres fichiers
window.filterByBreed = filterByBreed;
