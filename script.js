/*
  Este es tu archivo de JavaScript.
  Versión Final: Base de datos completa, Fases, Diseño arreglado y Separación de secciones.
*/

// ======================================================
// --- 1. TU BASE DE DATOS DE CUPONES ---
// ======================================================
const couponsToUnlock = [
    // --- REGALO PRINCIPAL (DÍA 1) ---
    {
        id: 'cumple-01',
        unlockDate: '2026-01-03T00:00:00', // Se desbloquea el día del cumpleaños
        title: '¡Feliz Cumpleaños, Mi Amor!',
        description: 'Vale por (1) día de ser la Reina Absoluta. Cero quehaceres, tu comida favorita y control total del TV.',
        imageUrl: './img/cumple.jpg', // Asegúrate de tener esta foto o cámbiala
        category: 'Día Especial'
    },

    // --- CATEGORÍA: DÍA ESPECIAL (Amarillo) ---
    // Estos tienen FECHA específica
    {
        id: 'especial-01',
        unlockDate: '2026-02-28T08:00:00',
        title: 'Escapada Madre e Hija',
        description: '¡Prepara las maletas! Te vas de viaje a Cartagena con tu mamá para disfrutar del sol y el mar juntas.',
        imageUrl: './img/especial-cartagena.jpg', // Usa la foto del tiquete aquí
        category: 'Día Especial'
    },
    {
        id: 'especial-02',
        unlockDate: '2026-02-13T08:00:00',
        title: 'Aniversario en Medellín',
        description: 'Un viaje romántico a la Eterna Primavera, solo tú y yo. Celebramos nuestro amor por todo lo alto.',
        imageUrl: './img/especial-medellin.jpg',
        category: 'Día Especial'
    },
    {
        id: 'especial-03',
        // Si quieres que sea sorpresa para una fecha, ponle unlockDate. Si es cuando quiera, déjalo sin fecha.
        // Lo dejaré sin fecha (On-Demand) basado en tu descripción, o puedes ponerle fecha si prefieres.
        title: 'Noche de Fantasía',
        description: 'Cumplir tu fantasía: Masaje erótico realizado por una chica (conmigo como espectador). Una experiencia nueva para explorar.',
        imageUrl: './img/especial-fantasia.jpg',
        category: 'Día Especial'
    },

    // --- CATEGORÍA: ROMÁNTICO (Rosa) ---
    {
        id: 'romantico-01',
        title: 'Chuchitos Ilimitados',
        description: 'Vale por una sesión de muchos besitos ("chuchitos") sin derecho a negarme, en el momento que tú quieras.',
        imageUrl: './img/romantico-01.jpg',
        category: 'Romántico'
    },
    {
        id: 'romantico-02',
        title: 'Game Over, Cuddle Time',
        description: 'Dejo de jugar videojuegos inmediatamente para ir a arruncharme contigo. Sin peros.',
        imageUrl: './img/romantico-02.jpg',
        category: 'Romántico'
    },
    {
        id: 'romantico-03',
        title: 'Cita Sorpresa',
        description: 'Salida esta noche. Tú solo encárgate de verte hermosa, yo me encargo del plan, la logística y el resto.',
        imageUrl: './img/romantico-03.jpg',
        category: 'Romántico'
    },
    {
        id: 'romantico-04',
        title: 'Cine a tu Antojo',
        description: '¿Yo no quiero ir? No importa. Este cupón me obliga a ver la película que TÚ elijas. Incluye crispetas y papitas.',
        imageUrl: './img/romantico-04.jpg',
        category: 'Romántico'
    },
    {
        id: 'romantico-05',
        title: 'Botón de Contentarse',
        description: 'Si estoy de mal genio, este cupón me obliga a contentarme inmediatamente, darte un abrazo y tres besos.',
        imageUrl: './img/romantico-05.jpg',
        category: 'Romántico'
    },
    {
        id: 'romantico-08',
        title: 'Fotógrafo Personal',
        description: 'Tengo paciencia infinita. Te tomo todas las fotos que quieras para tus redes o para nosotros, buscando tu mejor ángulo sin quejarme.',
        imageUrl: './img/romantico-08.jpg',
        category: 'Romántico'
    },
    {
        id: 'romantico-09',
        title: 'Dueña del Auxiliar',
        description: 'Tú eres la DJ. Controlas la música del carro o de la casa durante todo el día/viaje. No se vale criticar tus canciones.',
        imageUrl: './img/romantico-09.jpg',
        category: 'Romántico'
    },
    {
        id: 'romantico-10',
        title: 'Poder de Veto',
        description: '¿Hay un plan familiar o social al que te da pereza ir? Usa este cupón y yo pongo la excusa perfecta para quedarnos en casa.',
        imageUrl: './img/romantico-10.jpg',
        category: 'Romántico'
    },

    // --- CATEGORÍA: RELAJACIÓN (Azul) ---
    {
        id: 'romantico-06',
        title: 'Masaje de Pies VIP',
        description: '20 minutos de masaje relajante en los pies (ideal para desconectar del estrés). Sin quejas de mi parte.',
        imageUrl: './img/romantico-06.jpg',
        category: 'Relajación'
    },
    {
        id: 'romantico-07',
        title: 'Modo Avión',
        description: 'Una hora completa de mi atención indivisa. Sin celulares, sin TV, solo tú y yo hablando o estando juntos.',
        imageUrl: './img/romantico-07.jpg',
        category: 'Relajación'
    },
    {
        id: 'familiar-04',
        title: 'Vale por Dormir',
        description: 'Mañana yo me encargo de TODO (desayuno, limpieza, ruidos). Tú no te levantas de la cama hasta que quieras.',
        imageUrl: './img/familiar-04.jpg',
        category: 'Relajación'
    },
    {
        id: 'familiar-08',
        title: 'Spa Casero',
        description: 'Yo preparo el baño (o ducha caliente), pongo velas, música relajante y te dejo el espacio listo para que te desconectes del mundo.',
        imageUrl: './img/familiar-08.jpg',
        category: 'Relajación'
    },

    // --- CATEGORÍA: FAMILIAR (Verde) ---
    {
        id: 'familiar-01',
        title: 'El Primer Juguete',
        description: '¡Vamos de compras! Salimos a escoger y comprar con toda la ilusión el primer juguete para nuestro futuro hij@.',
        imageUrl: './img/familiar-01.jpg',
        category: 'Familiar'
    },
    {
        id: 'familiar-02',
        title: 'Día con los Abuelos',
        description: 'Pasamos un día completo en familia con tus padres: helado, cine o ir a comer algo rico con ellos.',
        imageUrl: './img/familiar-02.jpg',
        category: 'Familiar'
    },
    {
        id: 'familiar-03',
        title: 'Antojo de Medianoche',
        description: '¿Tienes un antojo urgente? No importa la hora, salgo a conseguirlo (o lo pido) inmediatamente.',
        imageUrl: './img/familiar-03.jpg',
        category: 'Familiar'
    },
    {
        id: 'familiar-05',
        title: 'Menú a la Carta y Compras',
        description: 'Tú eliges qué quieres comer. Yo me encargo de ir al súper por los ingredientes y preparártelo.',
        imageUrl: './img/familiar-05.jpg',
        category: 'Familiar'
    },
    {
        id: 'familiar-06',
        title: 'Desayuno de Hotel en Casa',
        description: 'Te llevo el desayuno a la cama con todo lo que te gusta. No tienes que mover un dedo.',
        imageUrl: './img/familiar-06.jpg',
        category: 'Familiar'
    },
    {
        id: 'familiar-07',
        title: 'Barman Privado',
        description: 'Noche de cócteles (o bebidas ricas sin alcohol) preparadas por mí en casa. Ambiente de bar, pero en pijama.',
        imageUrl: './img/familiar-07.jpg',
        category: 'Familiar'
    },
    {
        id: 'familiar-09',
        title: 'Helado de Emergencia',
        description: 'Vale por salir INMEDIATAMENTE a comer el postre que tú quieras. Sin esperar a la cena.',
        imageUrl: './img/familiar-09.jpg',
        category: 'Familiar'
    },

    // --- CATEGORÍA: SEXY (Rojo) ---
    {
        id: 'sexy-01',
        title: 'Reto Creativo',
        description: 'Me pongo creativo y escribo uno de esos retos en la app que tanto disfrutamos. Tú eliges la temática.',
        imageUrl: './img/sexy-01.jpg',
        category: 'Sexy'
    },
    {
        id: 'sexy-02',
        title: 'Excursión Prohibida',
        description: '¿Te sientes divertida? Nos vamos de excursión en el carro a empañar los vidrios. Requisito: No llevar nada debajo de la falda.',
        imageUrl: './img/sexy-02.jpg',
        category: 'Sexy'
    },
    {
        id: 'sexy-03',
        title: 'Garantía de Placer',
        description: 'Te aseguras de tener por lo menos dos orgasmos esta noche. Yo preparo el ambiente y hago todo el trabajo.',
        imageUrl: './img/sexy-03.jpg',
        category: 'Sexy'
    },
    {
        id: 'sexy-04',
        title: 'Mañanero Garantizado',
        description: 'Con este cupón te aseguras que mañana, en lugar de levantarte a la hora habitual, te despierto 15 minutos antes para iniciar el día con mucho placer.',
        imageUrl: './img/sexy-04.jpg',
        category: 'Sexy'
    },
    {
        id: 'sexy-05',
        title: 'Pasarela Privada',
        description: 'Vamos de compras (físicas o en línea) de lencería. Tú eliges, yo pago, y me das un desfile privado luego.',
        imageUrl: './img/sexy-05.jpg',
        category: 'Sexy'
    },
    {
        id: 'sexy-06',
        title: 'El "Rapidín"',
        description: 'Vale por un encuentro rápido e intenso. Dónde sea y cuándo sea (mientras sea medianamente seguro 😉).',
        imageUrl: './img/sexy-06.jpg',
        category: 'Sexy'
    },
    {
        id: 'sexy-07',
        title: 'Noche de Roles',
        description: 'Esta noche no somos nosotros. Tú eliges los personajes y la historia, yo me meto en el papel.',
        imageUrl: './img/sexy-07.jpg',
        category: 'Sexy'
    },
    {
        id: 'sexy-08',
        title: 'Strip Poker / Prenda',
        description: 'Jugamos cartas, videojuegos o dominó... pero apostamos prendas de ropa. Tú pones las reglas.',
        imageUrl: './img/sexy-08.jpg',
        category: 'Sexy'
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
        categoryHTML = `<span class="${styleClasses} inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase mb-3">${coupon.category}</span>`;
    }

    // NOTA: Quitamos alturas fijas para que la imagen se adapte
    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden border-t-8 border-brand-gold transform transition-all hover:scale-105 relative">
            <img 
                src="${coupon.imageUrl}" 
                alt="${coupon.title}" 
                class="w-full object-cover" 
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
        </div>`;
}

function createLockedCardHTML(coupon) {
    const unlockDate = new Date(coupon.unlockDate);
    let categoryHTML = '';
    if (coupon.category) {
        const styleClasses = categoryStyles[coupon.category] || categoryStyles['Default'];
        categoryHTML = `<span class="${styleClasses} opacity-70 inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase mb-3 z-10 relative">${coupon.category}</span>`;
    }

    // Usamos min-h para consistencia visual
    return `
        <div class="coupon-locked rounded-lg p-6 flex flex-col items-center justify-center relative min-h-[16rem]">
            <img src="${coupon.imageUrl}" alt="Bloqueado" class="coupon-locked-image" onerror="this.style.display='none'">
            <div class="lock-icon">🔒</div>
            <h3 class="font-script text-2xl text-gray-800 mt-4 z-10 relative drop-shadow-md">Cupón Bloqueado</h3>
            <p class="text-gray-600 font-semibold mb-3 z-10 relative drop-shadow-md">Se desbloquea el ${unlockDate.toLocaleString('es-ES', { day: 'numeric', month: 'long' })}</p>
            ${categoryHTML}
        </div>`;
}

// ======================================================
// --- FUNCIÓN DEL CONTADOR ---
// ======================================================
let countdownInterval = null; 
function startCountdown(targetDate) {
    const countdownSection = document.getElementById('countdown-section');
    const daysEl = document.getElementById('timer-days');
    const hoursEl = document.getElementById('timer-hours');
    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');
    
    countdownSection.classList.remove('hidden');

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownSection.innerHTML = `<h2 class="font-script text-5xl text-brand-wine">¡Tu regalo está listo!</h2>`;
            setTimeout(() => window.location.reload(), 4000); 
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer(); 
    countdownInterval = setInterval(updateTimer, 1000); 
}


// ======================================================
// --- LÓGICA PRINCIPAL ---
// ======================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- PRUEBAS DE FECHA (Descomenta para probar en desarrollo) ---
    // const today = new Date('2025-11-30T10:00:00'); // FASE 1: Solo Contador
    // const today = new Date('2025-12-04T10:00:00'); // FASE 2: Contador + Sorpresa
    // const today = new Date('2026-01-03T10:00:00'); // FASE 3: Cumpleaños
    
    const today = new Date(); // <-- DEJA ESTO ACTIVO PARA LA VERSIÓN FINAL
    
    // --- FECHAS CLAVE ---
    const preBirthdayRevealDate = new Date('2025-11-20T00:00:00'); 
    const birthdayDate = new Date('2026-01-03T00:00:00'); 
    
    const countdownSection = document.getElementById('countdown-section');
    const teaserSection = document.getElementById('teaser-section');
    const couponsSection = document.getElementById('coupons-section');
    
    // Contenedores separados
    const dateContainer = document.getElementById('date-coupons-container');
    const demandContainer = document.getElementById('demand-coupons-container');

    if (today < preBirthdayRevealDate) {
        // --- FASE 1 ---
        startCountdown(birthdayDate);

    } else if (today >= preBirthdayRevealDate && today < birthdayDate) {
        // --- FASE 2 ---
        startCountdown(birthdayDate); 
        teaserSection.classList.remove('hidden'); 

        const teaserCard = document.getElementById('teaser-card');
        if (teaserCard) {
            // *** CONFIGURACIÓN DE LA CAJA SORPRESA ***
            const ID_DEL_CUPON_A_MOSTRAR = 'especial-01'; // Muestra el viaje a Cartagena
            
            const couponToTease = couponsToUnlock.find(c => c.id === ID_DEL_CUPON_A_MOSTRAR);

            if (couponToTease) {
                teaserCard.addEventListener('click', () => {
                    const unlockDate = new Date(couponToTease.unlockDate);
                    
                    // 1. Quitamos estilos de "bloqueado"
                    teaserCard.classList.remove('coupon-locked');
                    teaserCard.style.padding = '0';
                    teaserCard.style.cursor = 'default';
                    teaserCard.style.minHeight = '0'; 
                    teaserCard.style.background = 'transparent';
                    teaserCard.style.boxShadow = 'none';

                    // 2. Renderizamos la tarjeta centrada y limpia
                    teaserCard.innerHTML = `
                        <div class="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-2xl mx-auto">
                            <img 
                                src="${couponToTease.imageUrl}" 
                                class="w-full object-contain bg-gray-50 max-h-96" 
                                onerror="this.src='https://placehold.co/600x400/fecaca/b91c1c?text=Error+en+foto'"
                            >
                            <div class="p-6 text-center">
                                <h3 class="font-script text-4xl text-brand-wine mb-3">¡Adelanto Exclusivo!</h3>
                                <p class="text-gray-700 font-bold text-xl mb-2">${couponToTease.title}</p>
                                <p class="text-gray-500 text-md mb-1">Prepárense... este cupón les estará esperando el</p>
                                <p class="text-gray-800 font-bold text-2xl">${unlockDate.toLocaleString('es-ES', { day: 'numeric', month: 'long' })}</p>
                            </div>
                        </div>
                    `;
                }, { once: true });
            }
        }

    } else {
        // --- FASE 3: CUMPLEAÑOS ---
        countdownSection.classList.add('hidden');
        teaserSection.classList.add('hidden');
        couponsSection.classList.remove('hidden'); 
        
        const redeemedIds = getRedeemedCoupons(); 
        
        couponsToUnlock.forEach(coupon => {
            let cardHTML = '';
            let slotClass = ''; 
            let targetContainer = null;

            // 1. GENERAR HTML SEGÚN ESTADO
            if (redeemedIds.includes(coupon.id)) {
                cardHTML = createUnlockedCardHTML(coupon); 
                cardHTML = cardHTML.replace(
                    '<div class="redeem-overlay-container"></div>', 
                    '<div class="redeem-overlay-container"><div class="redeem-overlay">CANJEADO</div></div>'
                );
                slotClass = 'coupon-redeemed'; 
                // Mantenemos la lógica de contenedor incluso si está canjeado
                destinationContainer = coupon.unlockDate ? dateContainer : demandContainer;

            } else if (coupon.unlockDate) {
                destinationContainer = dateContainer;
                const unlockDate = new Date(coupon.unlockDate); 
                if (today >= unlockDate) {
                    cardHTML = createUnlockedCardHTML(coupon); 
                } else {
                    cardHTML = createLockedCardHTML(coupon); 
                }
            } else {
                destinationContainer = demandContainer;
                cardHTML = createUnlockedCardHTML(coupon);
            }
            
            // 2. INSERTAR EN EL CONTENEDOR CORRECTO
            if (destinationContainer) {
                destinationContainer.innerHTML += `<div id="coupon-slot-${coupon.id}" class="${slotClass}">${cardHTML}</div>`;
            }
        });
    }
});

// ======================================================
// --- 4. FUNCIÓN DE CANJEAR ---
// ======================================================
function redeemCoupon(couponId) {
    const cardSlot = document.getElementById(`coupon-slot-${couponId}`);
    if (cardSlot && cardSlot.classList.contains('coupon-redeemed')) {
        alert('Este cupón ya fue canjeado. 😉');
        return; 
    }
    if (!confirm("¿Segura que quieres canjear este cupón ahora?")) return;
    
    cardSlot.classList.add('coupon-redeemed');
    const coupon = couponsToUnlock.find(c => c.id === couponId);
    if (!coupon) return;
    
    const overlayContainer = cardSlot.querySelector('.redeem-overlay-container');
    if (overlayContainer) {
        overlayContainer.innerHTML = '<div class="redeem-overlay">CANJEADO</div>';
    }
    
    saveRedeemedCoupon(couponId); 
    
    const tuEmail = 'TU-EMAIL-AQUI@gmail.com'; // <-- ¡RECUERDA CAMBIAR ESTO POR TU EMAIL REAL!
    
    const subject = `¡Cupón Canjeado: ${coupon.title}!`;
    const body = `¡Hola mi amor!\n\nSolo para que sepas que acabo de canjear este cupón:\n\n"${coupon.title}"\n\n¡Prepárate!\n\nTe amo.`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.open(`mailto:${tuEmail}?subject=${encodedSubject}&body=${encodedBody}`, '_blank');
}