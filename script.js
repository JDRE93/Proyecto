/*
  Este es tu archivo de JavaScript.
*/

// --- 1. TU BASE DE DATOS DE CUPONES ---
const couponsToUnlock = [
    {
        id: 'cumple-01',
        unlockDate: '2026-01-03T00:00:00',
        title: '¡Vale de Cumpleaños Oficial!',
        description: 'Vale por (1) día de ser la Reina Absoluta...',
        imageUrl: 'https://placehold.co/600x400/fecdd3/722f37?text=Foto+Reina+Absoluta',
        category: 'Día Especial' 
    },
    {
        id: 'coupon-4',
        unlockDate: '2026-02-14T00:00:00',
        title: 'Cupón de San Valentín',
        description: 'Vale por (1) aventura sorpresa. Prepara un bolso pequeño...',
        imageUrl: 'https://placehold.co/600x400/722f37/ffffff?text=Foto+Aventura+Secreta',
        category: 'Romántico'
    },
    {
        id: 'coupon-3',
        unlockDate: '2026-02-01T08:00:00',
        title: 'Vale por (1) Masaje Profesional',
        description: 'Un masaje de 60 minutos (¡esta vez de verdad!)...',
        imageUrl: 'https://placehold.co/600x400/e0e7ff/3730a3?text=Foto+Relax',
        category: 'Relajación'
    },
    // --- Cupones On-Demand (sin fecha) ---
    {
        id: 'demand-01', 
        title: 'Vale por (1) Masaje Express',
        description: 'Canjeable en CUALQUIER momento. Válido por 15 minutos...',
        imageUrl: 'https://placehold.co/600x400/c4b5fd/5b21b6?text=Masaje+Express',
        category: 'Relajación'
    },
    {
        id: 'demand-02', 
        title: 'Vale por (1) "Ganas tú"',
        description: 'Para usar sabiamente en nuestra próxima discusión...',
        imageUrl: 'https://placehold.co/600x400/fde68a/854d0e?text=Paz+%26+Amor',
        category: 'Romántico'
    },
    {
        id: 'demand-03', 
        title: 'Vale por (1) Noche de Pelis',
        description: 'Tú eliges la película, yo hago las palomitas...',
        imageUrl: 'https://placehold.co/600x400/a7f3d0/047857?text=Noche+de+Pelis',
        category: 'Familiar'
    }
];

// ======================================================
// --- ESTILOS DE CATEGORÍA ---
// ======================================================
const categoryStyles = {
    'Romántico': 'bg-pink-100 text-pink-800',
    'Familiar': 'bg-green-100 text-green-800',
    'Relajación': 'bg-blue-100 text-blue-800',
    'Sexy': 'bg-red-100 text-red-800',
    'Día Especial': 'bg-yellow-100 text-yellow-800',
    'Default': 'bg-gray-100 text-gray-800' 
};

// ======================================================
// --- HELPERS DE LOCALSTORAGE ---
// ======================================================

function getRedeemedCoupons() {
    const redeemed = localStorage.getItem('redeemedCoupons');
    return redeemed ? JSON.parse(redeemed) : [];
}

function saveRedeemedCoupon(couponId) {
    let redeemed = getRedeemedCoupons();
    if (!redeemed.includes(couponId)) {
        redeemed.push(couponId);
        localStorage.setItem('redeemedCoupons', JSON.stringify(redeemed));
    }
}

// ======================================================
// --- FUNCIONES PARA CREAR HTML ---
// ======================================================

function createUnlockedCardHTML(coupon) {
    
    let dateText = '';
    if (coupon.unlockDate) {
        const unlockDate = new Date(coupon.unlockDate);
        dateText = `Revelado: ${unlockDate.toLocaleString('es-ES', { day: 'numeric', month: 'long' })}`;
    } else {
        dateText = '<span class="text-green-600 font-bold">¡Canjeable cuando quieras!</span>';
    }

    let categoryHTML = '';
    if (coupon.category) {
        const styleClasses = categoryStyles[coupon.category] || categoryStyles['Default'];
        categoryHTML = `
            <span class="${styleClasses} inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase mb-3">
                ${coupon.category}
            </span>
        `;
    }

    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden border-t-8 border-brand-gold transform transition-all hover:scale-105 relative">
            <img 
                src="${coupon.imageUrl}" 
                alt="${coupon.title}" 
                class="w-full h-48 object-cover"
                onerror="this.src='https://placehold.co/600x400/fecaca/b91c1c?text=Error+al+cargar+la+foto'"
            >
            <div class="p-6">
                ${categoryHTML}
                <h3 class="font-script text-3xl text-brand-wine mb-3">${coupon.title}</h3>
                <p class="text-gray-700 mb-4">${coupon.description}</p>
                <p class="text-sm font-bold text-gray-500">${dateText}</p>
                <button class="w-full mt-4 bg-brand-wine text-white py-2 px-4 rounded-lg font-medium hover:bg-opacity-80 transition-colors" onclick="redeemCoupon('${coupon.id}')">
                    ¡Lo quiero ahora!
                </button>
            </div>
            <div class="redeem-overlay-container"></div> 
        </div>
    `;
}

function createLockedCardHTML(coupon) {
    const unlockDate = new Date(coupon.unlockDate);
    let categoryHTML = '';
    if (coupon.category) {
        const styleClasses = categoryStyles[coupon.category] || categoryStyles['Default'];
        categoryHTML = `
            <span class="${styleClasses} opacity-60 inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase mb-3">
                ${coupon.category}
            </span>
        `;
    }

    return `
        <div class="coupon-locked rounded-lg p-6 flex flex-col items-center justify-center h-64">
            <div class="lock-icon">🔒</div>
            <h3 class="font-script text-2xl text-gray-600 mt-4">Cupón Bloqueado</h3>
            <p class="text-gray-500 font-semibold mb-3">Se desbloquea el ${unlockDate.toLocaleString('es-ES', { day: 'numeric', month: 'long' })}</p>
            ${categoryHTML}
        </div>
    `;
}


// Esta función se ejecuta cuando la página termina de cargar
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE PRUEBA DE FECHA ---
    const today = new Date('2026-01-03T10:00:00'); // <-- ¡Fijado el 3 de Enero para probar!
    // const today = new Date(); 
    
    
    // ======================================================
    // --- 2. LÓGICA DEL TEASER (DÍA 1) ---
    // ======================================================
    
    const birthday = new Date('2026-01-03T00:00:00');
    
    const isBirthday = today.getFullYear() === birthday.getFullYear() &&
                       today.getMonth() === birthday.getMonth() &&
                       today.getDate() === birthday.getDate();

    if (isBirthday) {
        
        const teaserSection = document.getElementById('teaser-section');
        if (teaserSection) {
            teaserSection.classList.remove('hidden');
        }

        const teaserCard = document.getElementById('teaser-card');
        if (teaserCard) {
            
            const ID_DEL_CUPON_A_MOSTRAR = 'coupon-3'; // ¡Revela el masaje!
            
            const couponToTease = couponsToUnlock.find(c => c.id === ID_DEL_CUPON_A_MOSTRAR);

            if (couponToTease) {
                
                // --- ¡LÓGICA DE REVELACIÓN (ARREGLADA)! ---
                teaserCard.addEventListener('click', () => {
                    
                    const targetSlot = document.getElementById(`coupon-slot-${couponToTease.id}`);
                    
                    if (targetSlot) {
                        // 1. Genera el HTML del cupón desbloqueado
                        const unlockedHTML = createUnlockedCardHTML(couponToTease);
                        
                        // 2. REEMPLAZA el cupón bloqueado por el desbloqueado
                        targetSlot.innerHTML = unlockedHTML;
                        
                        // 3. Actualiza la tarjeta teaser
                        teaserCard.style.cursor = 'default';
                        teaserCard.innerHTML = `
                            <h3 class="font-script text-3xl text-brand-wine mb-2">¡Revelado!</h3>
                            <p class="text-gray-700 font-semibold">Revisa tu lista de cupones... 😉</p>
                        `;
                    }
                    
                }, { once: true }); // Solo se puede hacer clic una vez
            }
        }
    }

    // ======================================================
    // --- 3. LÓGICA DE DESBLOQUEO (REPARADA) ---
    // ======================================================
    
    const container = document.getElementById('coupons-container');
    const redeemedIds = getRedeemedCoupons(); 
    
    couponsToUnlock.forEach(coupon => {
        
        let cardHTML = '';
        let slotClass = ''; 

        if (redeemedIds.includes(coupon.id)) {
            
            // 1. SI ESTÁ CANJEADO:
            cardHTML = createUnlockedCardHTML(coupon); 
            cardHTML = cardHTML.replace(
                '<div class="redeem-overlay-container"></div>', 
                '<div class="redeem-overlay-container"><div class="redeem-overlay">CANJEADO</div></div>'
            );
            slotClass = 'coupon-redeemed'; 
            
        } else if (coupon.unlockDate) {
            // 2. CON FECHA (no canjeado):
            const unlockDate = new Date(coupon.unlockDate); 
            if (today >= unlockDate) {
                cardHTML = createUnlockedCardHTML(coupon); 
            } else {
                cardHTML = createLockedCardHTML(coupon); 
            }
        } else {
            // 3. SIN FECHA (no canjeado):
            cardHTML = createUnlockedCardHTML(coupon);
        }
        
        container.innerHTML += `
            <div id="coupon-slot-${coupon.id}" class="${slotClass}">
                ${cardHTML}
            </div>
        `;
    });
});

// ======================================================
// --- 4. FUNCIÓN DE CANJEAR (LIMPIADA) ---
// ======================================================
function redeemCoupon(couponId) { // Ya no necesita "forceRedeem"
    
    const cardSlot = document.getElementById(`coupon-slot-${couponId}`);
    
    if (cardSlot && cardSlot.classList.contains('coupon-redeemed')) {
        alert('Este cupón ya fue canjeado. 😉');
        return; 
    }
    
    // Aplicamos el efecto "tachado"
    cardSlot.classList.add('coupon-redeemed');
    
    const coupon = couponsToUnlock.find(c => c.id === couponId);
    if (!coupon) return;

    // Añadimos el texto "CANJEADO"
    const overlayContainer = cardSlot.querySelector('.redeem-overlay-container');
    if (overlayContainer) {
        overlayContainer.innerHTML = '<div class="redeem-overlay">CANJEADO</div>';
    }

    // Guardamos en memoria
    saveRedeemedCoupon(couponId); 

    // Preparamos y abrimos el aviso por email
    const tuEmail = 'TU-EMAIL-AQUI@gmail.com'; // <-- ¡Recuerda cambiar esto!
    
    const subject = `¡Cupón Canjeado: ${coupon.title}!`;
    const body = `¡Hola mi amor!
    
Solo para que sepas que acabo de canjear este cupón:
    
"${coupon.title}"
    
¡Prepárate!
    
Te amo.
    `;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    window.open(`mailto:${tuEmail}?subject=${encodedSubject}&body=${encodedBody}`, '_blank');
}