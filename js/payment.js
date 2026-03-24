// Configuration des paiements
// Orange Money, Mobile Money, Cryptomonnaies

let currentPuppy = null;

function initCheckout() {
    const urlParams = new URLSearchParams(window.location.search);
    const puppyId = parseInt(urlParams.get('id'));
    
    const puppies = JSON.parse(localStorage.getItem('puppies') || '[]');
    currentPuppy = puppies.find(p => p.id === puppyId);
    
    if (!currentPuppy) {
        window.location.href = 'catalog.html';
        return;
    }
    
    // Afficher les détails
    document.getElementById('summary-name').textContent = currentPuppy.name;
    document.getElementById('summary-breed').textContent = currentPuppy.breed;
    document.getElementById('summary-price').textContent = `${currentPuppy.price.toLocaleString()} €`;
    document.getElementById('summary-image').src = currentPuppy.image;
    
    // Calculs crypto
    document.getElementById('btc-amount').textContent = (currentPuppy.price / 50000).toFixed(6);
    document.getElementById('eth-amount').textContent = (currentPuppy.price / 3000).toFixed(4);
    document.getElementById('usdt-amount').textContent = currentPuppy.price;
    
    // Initialiser les méthodes de paiement
    initPaymentMethods();
}

function initPaymentMethods() {
    const methodCards = document.querySelectorAll('.method-card');
    const paymentDetails = document.getElementById('payment-details');
    
    methodCards.forEach(card => {
        card.addEventListener('click', () => {
            methodCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            const method = card.dataset.method;
            showPaymentForm(method, paymentDetails);
        });
    });
}

function showPaymentForm(method, container) {
    let html = '';
    
    switch(method) {
        case 'orange-money':
            html = `
                <div class="payment-form">
                    <h3><i class="fas fa-mobile-alt"></i> Paiement Orange Money</h3>
                    <p>Montant à payer : <strong>${currentPuppy.price.toLocaleString()} FCFA</strong></p>
                    <div class="form-group">
                        <label>Numéro Orange Money</label>
                        <input type="tel" id="om-number" placeholder="Ex: 07 12 34 56 78" required>
                    </div>
                    <div class="form-group">
                        <label>Nom du titulaire</label>
                        <input type="text" id="om-name" placeholder="Nom complet" required>
                    </div>
                    <button class="btn-primary" id="pay-om-btn">Payer avec Orange Money</button>
                </div>
            `;
            break;
            
        case 'mobile-money':
            html = `
                <div class="payment-form">
                    <h3><i class="fas fa-phone-alt"></i> Paiement Mobile Money</h3>
                    <p>Montant à payer : <strong>${currentPuppy.price.toLocaleString()} FCFA</strong></p>
                    <div class="form-group">
                        <label>Opérateur</label>
                        <select id="mm-operator">
                            <option value="mtn">MTN Mobile Money</option>
                            <option value="moov">Moov Mobile Money</option>
                            <option value="free">Free Mobile Money</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Numéro de téléphone</label>
                        <input type="tel" id="mm-number" placeholder="Votre numéro" required>
                    </div>
                    <button class="btn-primary" id="pay-mm-btn">Payer avec Mobile Money</button>
                </div>
            `;
            break;
            
        case 'crypto':
            html = `
                <div class="payment-form">
                    <h3><i class="fab fa-bitcoin"></i> Paiement Cryptomonnaie</h3>
                    <p>Montant en BTC : <strong>${(currentPuppy.price / 50000).toFixed(6)} BTC</strong></p>
                    <p>Montant en ETH : <strong>${(currentPuppy.price / 3000).toFixed(4)} ETH</strong></p>
                    <p>Montant en USDT : <strong>${currentPuppy.price} USDT</strong></p>
                    <div class="form-group">
                        <label>Sélectionnez votre crypto</label>
                        <select id="crypto-select">
                            <option value="btc">Bitcoin (BTC)</option>
                            <option value="eth">Ethereum (ETH)</option>
                            <option value="usdt">Tether (USDT - ERC20)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Votre email (pour la confirmation)</label>
                        <input type="email" id="crypto-email" required>
                    </div>
                    <button class="btn-primary" id="pay-crypto-btn">Générer l'adresse de paiement</button>
                </div>
            `;
            break;
    }
    
    container.innerHTML = html;
    
    // Ajouter les événements
    document.getElementById('pay-om-btn')?.addEventListener('click', () => processOrangeMoney());
    document.getElementById('pay-mm-btn')?.addEventListener('click', () => processMobileMoney());
    document.getElementById('pay-crypto-btn')?.addEventListener('click', () => processCrypto());
}

function processOrangeMoney() {
    const number = document.getElementById('om-number')?.value;
    const name = document.getElementById('om-name')?.value;
    
    if (!number || !name) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    // Simuler un paiement Orange Money
    document.getElementById('payment-details').innerHTML = `
        <div class="payment-status pending">
            <i class="fas fa-spinner fa-spin"></i> En attente de confirmation...
        </div>
        <p>Un code de confirmation a été envoyé au ${number}</p>
        <div class="form-group">
            <label>Code de confirmation</label>
            <input type="text" id="confirmation-code" placeholder="Entrez le code reçu">
            <button id="confirm-payment" class="btn-primary">Confirmer le paiement</button>
        </div>
    `;
    
    document.getElementById('confirm-payment')?.addEventListener('click', () => {
        confirmPayment('orange-money');
    });
}

function processMobileMoney() {
    const operator = document.getElementById('mm-operator')?.value;
    const number = document.getElementById('mm-number')?.value;
    
    if (!number) {
        alert('Veuillez entrer votre numéro');
        return;
    }
    
    const operatorName = {
        mtn: 'MTN',
        moov: 'Moov',
        free: 'Free'
    }[operator];
    
    document.getElementById('payment-details').innerHTML = `
        <div class="payment-status pending">
            <i class="fas fa-spinner fa-spin"></i> Demande de paiement ${operatorName}...
        </div>
        <p>Vous allez recevoir une demande de paiement sur votre téléphone</p>
        <p>Montant : <strong>${currentPuppy.price.toLocaleString()} FCFA</strong></p>
        <button id="simulate-payment" class="btn-primary">Simuler la confirmation (démo)</button>
    `;
    
    document.getElementById('simulate-payment')?.addEventListener('click', () => {
        confirmPayment('mobile-money');
    });
}

function processCrypto() {
    const crypto = document.getElementById('crypto-select')?.value;
    const email = document.getElementById('crypto-email')?.value;
    
    if (!email) {
        alert('Veuillez entrer votre email');
        return;
    }
    
    let amount, address;
    const cryptoName = {
        btc: 'Bitcoin',
        eth: 'Ethereum',
        usdt: 'USDT'
    }[crypto];
    
    if (crypto === 'btc') {
        amount = (currentPuppy.price / 50000).toFixed(6);
        address = `bc1q${Math.random().toString(36).substring(2, 15)}`;
    } else if (crypto === 'eth') {
        amount = (currentPuppy.price / 3000).toFixed(4);
        address = `0x${Math.random().toString(36).substring(2, 20)}`;
    } else {
        amount = currentPuppy.price;
        address = `0x${Math.random().toString(36).substring(2, 20)}`;
    }
    
    document.getElementById('payment-details').innerHTML = `
        <div class="payment-status pending">
            <i class="fas fa-clock"></i> En attente de paiement
        </div>
        <p><strong>Envoyez exactement :</strong></p>
        <div class="crypto-address">
            ${amount} ${crypto.toUpperCase()}
        </div>
        <p><strong>À l'adresse :</strong></p>
        <div class="crypto-address">
            ${address}
        </div>
        <p class="small">⚠️ Attention : le paiement doit être confirmé sur la blockchain.</p>
        <button id="check-payment" class="btn-primary">Simuler la confirmation (démo)</button>
    `;
    
    document.getElementById('check-payment')?.addEventListener('click', () => {
        confirmPayment('crypto');
    });
}

function confirmPayment(method) {
    // Sauvegarder la commande
    const order = {
        id: Date.now(),
        puppyId: currentPuppy.id,
        puppyName: currentPuppy.name,
        price: currentPuppy.price,
        method: method,
        date: new Date().toISOString(),
        status: 'confirmed'
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Marquer le chiot comme vendu
    const puppies = JSON.parse(localStorage.getItem('puppies') || '[]');
    const updatedPuppies = puppies.map(p => {
        if (p.id === currentPuppy.id) {
            return { ...p, available: false };
        }
        return p;
    });
    localStorage.setItem('puppies', JSON.stringify(updatedPuppies));
    
    // Afficher la confirmation
    document.getElementById('payment-details').innerHTML = `
        <div class="payment-status confirmed">
            <i class="fas fa-check-circle"></i> Paiement confirmé !
        </div>
        <p>Merci pour votre achat, ${currentPuppy.name} vous attend.</p>
        <p>Un email de confirmation vous a été envoyé.</p>
        <a href="index.html" class="btn-primary">Retour à l'accueil</a>
    `;
}

document.addEventListener('DOMContentLoaded', initCheckout);
