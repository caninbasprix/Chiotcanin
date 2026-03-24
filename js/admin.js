let puppies = [];

function loadPuppiesFromStorage() {
    const stored = localStorage.getItem('puppies');
    if (stored) {
        puppies = JSON.parse(stored);
    } else {
        // Initialiser avec les données par défaut
        const defaultPuppies = [
            {id:1,name:"Thor",breed:"Berger Allemand",age:"3 mois",price:1200,description:"Chiot Berger Allemand LOF",image:"https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",available:true,vaccines:"1er vaccin",gender:"Mâle",weight:"8 kg",color:"Noir et feu"},
            {id:2,name:"Luna",breed:"Golden Retriever",age:"2.5 mois",price:1500,description:"Golden Retriever LOF",image:"https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",available:true,vaccines:"1er vaccin",gender:"Femelle",weight:"7 kg",color:"Doré"}
        ];
        puppies = defaultPuppies;
        savePuppiesToStorage();
    }
    updateStats();
}

function savePuppiesToStorage() {
    localStorage.setItem('puppies', JSON.stringify(puppies));
}

function updateStats() {
    const total = puppies.length;
    const available = puppies.filter(p => p.available).length;
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    document.getElementById('total-puppies').textContent = total;
    document.getElementById('available-puppies').textContent = available;
    document.getElementById('total-orders').textContent = orders.length;
}

function renderPuppiesTable() {
    const tbody = document.getElementById('puppies-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = puppies.map(puppy => `
        <tr>
            <td>${puppy.id}</td>
            <td><img src="${puppy.image}" style="width:50px;height:50px;object-fit:cover;border-radius:10px;"></td>
            <td><strong>${puppy.name}</strong></td>
            <td>${puppy.breed}</td>
            <td>${puppy.age}</td>
            <td>${puppy.price.toLocaleString()} €</td>
            <td>${puppy.available ? '<span class="badge-available">✅ Disponible</span>' : '<span class="badge-sold">❌ Vendu</span>'}</td>
            <td class="admin-actions">
                <button class="edit-btn" data-id="${puppy.id}"><i class="fas fa-edit"></i></button>
                <button class="delete-btn" data-id="${puppy.id}"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
    
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => openEditModal(parseInt(btn.dataset.id)));
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => deletePuppy(parseInt(btn.dataset.id)));
    });
}

function getNextId() {
    if (puppies.length === 0) return 1;
    return Math.max(...puppies.map(p => p.id)) + 1;
}

function addPuppy(puppyData) {
    const newPuppy = {
        id: getNextId(),
        ...puppyData,
        available: puppyData.available === 'true'
    };
    puppies.push(newPuppy);
    savePuppiesToStorage();
    renderPuppiesTable();
    updateStats();
}

function updatePuppy(id, updatedData) {
    const index = puppies.findIndex(p => p.id === id);
    if (index !== -1) {
        puppies[index] = {
            ...puppies[index],
            ...updatedData,
            available: updatedData.available === 'true'
        };
        savePuppiesToStorage();
        renderPuppiesTable();
        updateStats();
    }
}

function deletePuppy(id) {
    if (confirm('Supprimer ce chiot ? Cette action est irréversible.')) {
        puppies = puppies.filter(p => p.id !== id);
        savePuppiesToStorage();
        renderPuppiesTable();
        updateStats();
    }
}

function openAddModal() {
    document.getElementById('modal-title').textContent = 'Ajouter un chiot';
    document.getElementById('puppy-form').reset();
    document.getElementById('puppy-id').value = '';
    document.getElementById('puppy-modal').style.display = 'flex';
}

function openEditModal(id) {
    const puppy = puppies.find(p => p.id === id);
    if (!puppy) return;
    
    document.getElementById('modal-title').textContent = 'Modifier le chiot';
    document.getElementById('puppy-id').value = puppy.id;
    document.getElementById('puppy-name').value = puppy.name;
    document.getElementById('puppy-breed').value = puppy.breed;
    document.getElementById('puppy-gender').value = puppy.gender;
    document.getElementById('puppy-age').value = puppy.age;
    document.getElementById('puppy-price').value = puppy.price;
    document.getElementById('puppy-image').value = puppy.image;
    document.getElementById('puppy-description').value = puppy.description || '';
    document.getElementById('puppy-vaccines').value = puppy.vaccines || '';
    document.getElementById('puppy-weight').value = puppy.weight || '';
    document.getElementById('puppy-color').value = puppy.color || '';
    document.getElementById('puppy-available').value = puppy.available ? 'true' : 'false';
    document.getElementById('puppy-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('puppy-modal').style.display = 'none';
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const id = document.getElementById('puppy-id').value;
    const puppyData = {
        name: document.getElementById('puppy-name').value,
        breed: document.getElementById('puppy-breed').value,
        gender: document.getElementById('puppy-gender').value,
        age: document.getElementById('puppy-age').value,
        price: parseFloat(document.getElementById('puppy-price').value),
        image: document.getElementById('puppy-image').value,
        description: document.getElementById('puppy-description').value,
        vaccines: document.getElementById('puppy-vaccines').value,
        weight: document.getElementById('puppy-weight').value,
        color: document.getElementById('puppy-color').value,
        available: document.getElementById('puppy-available').value
    };
    
    if (id) {
        updatePuppy(parseInt(id), puppyData);
    } else {
        addPuppy(puppyData);
    }
    
    closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
    loadPuppiesFromStorage();
    renderPuppiesTable();
    
    document.getElementById('open-add-modal')?.addEventListener('click', openAddModal);
    document.getElementById('close-modal')?.addEventListener('click', closeModal);
    document.getElementById('puppy-form')?.addEventListener('submit', handleFormSubmit);
    
    const modal = document.getElementById('puppy-modal');
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});
