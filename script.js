// Menu Data
const menuCategories = [
    {
        id: 'birre',
        title: 'Birre',
        items: [
            { name: 'Hirter pils 4,8%', price: '€4 / €6', description: '0,3 CL / 0,5 CL - Lager chiara/luppolata, Austria' },
            { name: 'Lupulus blonde 8%', price: '€4,5 / €6,5', description: '0,3 CL / 0,5 CL - Strong ale/doppio malto, Belgio' },
            { name: 'Hoegaarden 4,8%', price: '€4 / €6', description: '0,25 CL / 0,5 CL - Blanche, Belgio' },
            { name: 'Leffe Rossa 6,6%', price: '€4,5 / €6,5', description: '0,25 CL / 0,4 CL - Rossa, Belgio' },
            { name: 'Mezzopasso IPA 5,9%', price: '€4,5 / €6,5', description: '0,25 CL / 0,5 CL - IPA, Italia' },
            { name: 'FOUNDERS DIRTY BASTARD 8,5%', price: '€7', description: '0,35 CL - SCOTCH ALE, USA' },
            { name: 'MACHETE 7,6%', price: '€7', description: '0,33 CL - DOUBLE IPA, ITALIA' },
            { name: 'BIOSFERA 4,6%', price: '€5', description: '0,33 CL - BLONDE ALE (gluten free), ITALIA' },
            { name: 'ROTHAUS 5,1%', price: '€5', description: '0,33 CL - PILSNER, GERMANIA' },
            { name: 'ALHAMBRA RESERVA 6,4%', price: '€4', description: '0,33 CL - HELLES BOCK, SPAGNA' },
            { name: 'ANDECHS WEISS 5,5%', price: '€6', description: '0,5 CL - WEISSBIER, GERMANIA' },
            { name: 'DUVEL 6,6%', price: '€5', description: '0,33 CL - BELGIAN STRONG GOLDEN ALE, BELGIO' },
            { name: 'ST. BERNARDUS 8%', price: '€6', description: '0,33 CL - BELGIAN TRIPEL, BELGIO' },
            { name: "O'HARA IRISH STOUTH NITRO 4,3%", price: '€6', description: '0,44 CL - IRISH DRY STOUT, IRLANDA' },
            { name: 'ALL DAY 4,7%', price: '€5', description: '0,33 CL - IPA, USA' },
        ]
    },
    {
        id: 'stuzzicheria',
        title: "LE SFIZIOSITA'",
        items: [
            { name: 'Patate Fritte', price: '€5', description: '' },
            { name: 'Patate Cheddar e Bacon', price: '€7', description: 'Patate fritte, Salsa Cheddar, Bacon Croccante' },
            { name: "Olive all' Ascolana", price: '€8', description: '8 pezzi' },
            { name: 'Bocconcini Pulled Pork', price: '€7', description: '6 pezzi, Serviti con salsa BBQ' },
            { name: 'Bocconcini di Pollo', price: '€5', description: '8 pezzi' },
            { name: 'Jalapeños', price: '€7', description: '6 pezzi, Ripieni di Formaggio' },
            { name: 'Tagliere misto', price: '€10 / €18', description: 'Piccolo / Grande - Salumi e formaggi nostrani' },
            { name: 'Crostini misti', price: '€10', description: '4 pezzi' },
            { name: 'Crostino mediterraneo', price: '€10', description: '4 pezzi - pomodoro secco, guanciale a crudo, burrata, olio evo' },
            { name: 'Mozzarella Stick', price: '€6', description: '8 pezzi' },
            { name: 'Zucchine fritte', price: '€6', description: '' },
            { name: 'Fritto misto', price: '€10', description: "Patate fritte, 2pz Olive all' Ascolana, 2pz Bocconcini di Pollo, 2pz Anelli di Cipolla, 2pz Jalapeños, 2pz Mozzarella stick" },
        ]
    },
    {
        id: 'panini',
        title: 'Panini',
        items: [
            { name: "L'Alba", price: '€13', description: 'Hamburger Scottona 200g, Carbo-crema, Pecorino fritto, Guanciale Croccante' },
            { name: 'Marla', price: '€11', description: 'Hamburger Scottona 200g, Crispy di Mortadella, Burrata, Pesto di Pistacchio' },
            { name: '90 MIN', price: '€10', description: 'Hamburger Scottona 200g, Lattuga, Pomodoro, Cheddar, Bacon' },
            { name: 'Daytona', price: '€9', description: 'Burger di Pollo, Lattuga, Cheddar, Bacon, Cipolla croccante' },
            { name: 'Flop', price: '€10', description: 'Burger Vegetale, Lattuga, Pomodoro, Cheddar' },
            { name: 'La Chiave', price: '€13', description: 'Pastrami, Lattuga, Pomodoro, Burrata, Senape' },
            { name: 'On Fire', price: '€10', description: 'Burger di Salsiccia, Friarielli, Salsa piccante, provola filante' },
            { name: 'Cult', price: '€10', description: 'Porchetta Grigliata, Patate Fritte, Maionese al Pepe' },
        ]
    },
    {
        id: 'pinse-rosse',
        title: 'Pinse Rosse',
        items: [
            { name: 'Lunedì', price: '€10', description: 'Pomodoro, Bufala, Basilico' },
            { name: 'Giuda', price: '€9', description: 'Pomodoro, Mozzarella, Verdure miste grigliate' },
            { name: 'La prima volta', price: '€10', description: 'Pomodoro, Stracciatella, Pomodorini gialli confit' },
            { name: 'Kumitè', price: '€9', description: 'Pomodoro, Mozzarella, Mais, Prosciutto cotto' },
            { name: 'Machete', price: '€12', description: 'Pomodoro, Mozzarella, Salame piccante, Salsiccia, Pecorino Grattugiato' },
            { name: 'Helvisback', price: '€12', description: 'Pomodoro, Mozzarella, Salsiccia, Funghi porcini' },
            { name: 'Thunder', price: '€14', description: 'Pomodoro, Prosciutto crudo, Stracciatella, Tartufo grattugiato' },
            { name: 'Flashback', price: '€12', description: 'Pomodoro, Mozzarella a crudo, Prosciutto Crudo, Olio al Basilico' },
        ]
    },
    {
        id: 'pinse-bianche',
        title: 'Pinse Bianche',
        items: [
            { name: 'S.A.L.M.O', price: '€14', description: 'Mortadella, Stracciatella, Pesto di Pistacchio, Tartufo grattugiato' },
            { name: 'Perdonami', price: '€10', description: 'Mozzarella, Tonno, Cipolla rossa caramellata' },
            { name: 'Russel Crowe', price: '€10', description: 'Mozzarella, Salsiccia, Friarielli' },
            { name: 'Miracolo', price: '€13', description: 'Prosciutto Crudo, Rucola, Pomodorini, Scaglie di Grana, Glassa aceto balsamico' },
            { name: 'Respira', price: '€12', description: 'Mozzarella, Guanciale crispy, Carbo-crema, Crema di pecorino' },
            { name: 'Mauri', price: '€14', description: 'Pastrami, Stracciatella, Pomodorini gialli confit' },
            { name: 'Cringe', price: '€12', description: 'Pere, Pecorino, Glassa d\'aceto balsamico' },
            { name: 'Ranch', price: '€11', description: 'Mozzarella, Prosciutto cotto, Funghi porcini' },
        ]
    },
    {
        id: 'carne',
        title: 'LA CARNE',
        items: [
            { name: 'Arrosticini di castrato', price: '€1,30/PZ', description: '' },
            { name: 'Arrosticini di fegato', price: '€1,50/PZ', description: '' },
            { name: 'Tagliata Sale e Pepe', price: '€18', description: 'Tagliata di Scottona 250/300g, Pepe rosa, Sale nero, Rosmarino' },
            { name: 'Tagliata Rucola e Grana', price: '€18', description: 'Tagliata di Scottona 250/300g, Rucola, Grana' },
            { name: 'Tagliata e Tartufo', price: '€23', description: 'Tagliata di Scottona 250/300g, Tartufo grattugiato' },
        ]
    },
    {
        id: 'piatti-unici',
        title: 'PIATTI UNICI',
        items: [
            { name: 'Cotoletta con patate fritte', price: '€10', description: '' },
            { name: 'Hamburger di scottona 200g con patate fritte', price: '€10', description: '' },
        ]
    },
    {
        id: 'insalatone',
        title: 'INSALATONE',
        items: [
            { name: 'Cabriolet', price: '€13', description: 'Tonno, Scaglie di Grana, Lattuga, Pomodorini, Mais, Crostini di pane' },
            { name: 'Yoko-ono', price: '€13', description: 'Pollo fritto, Mozzarella, Lattuga, Pomodorini, Mais, Crostini di pane' },
        ]
    },
    {
        id: 'dolci',
        title: 'Dolci',
        items: [
            { name: 'Pinsa Dolce Nutella', price: '€6', description: 'Nutella, Cioccolato Bianco, Granella Nocciole' },
            { name: 'Pinsa Dolce Pistacchio', price: '€6', description: 'Pistacchio, Cioccolato Bianco, Granella Pistacchio' },
            { name: "Tiramisu'", price: '€5', description: 'Dai ma come fai a non conoscere gli ingredienti' },
            { name: 'Dolce del giorno', price: '€5', description: 'Dolce della casa' },
        ]
    },
    {
        id: 'bevande',
        title: 'Bevande',
        items: [
            { name: 'Pepsi', price: '€8', description: '1L' },
            { name: 'Bevande in Vetro 0,33cl', price: '€3', description: 'Pepsi / Pepsi Max / 7 Up / Lipton Iced Tea / Oransoda / Mirinda' },
            { name: 'Acqua', price: '€1 / €2', description: '0,5L / 1L' },
            { name: 'Vino', price: 'SQ', description: 'Al calice o in bottiglia' },
            { name: 'Amari', price: '€3', description: '' },
            { name: 'Caffè', price: '€1,5', description: '' },
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Menu
    const menuContainer = document.getElementById('menu-container');

    menuCategories.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'mb-6 last:mb-0';

        const button = document.createElement('button');
        button.className = 'w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-colors duration-200 hover:bg-gray-50 group';
        button.innerHTML = `
            <div class="flex items-center gap-4">
                <h3 class="text-2xl md:text-3xl font-heading font-bold uppercase text-primary group-hover:text-orange-600 transition-colors text-left">
                    ${category.title}
                </h3>
            </div>
            <div class="p-2 rounded-full bg-gray-100 text-secondary transition-transform duration-300 icon-container">
                <i data-lucide="chevron-down" class="w-6 h-6"></i>
            </div>
        `;

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'accordion-content';

        const innerContent = document.createElement('div');
        innerContent.className = 'accordion-inner overflow-hidden';

        const grid = document.createElement('div');
        grid.className = 'pt-4 pb-2 grid grid-cols-1 md:grid-cols-2 gap-4';

        category.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full';
            itemEl.innerHTML = `
                <div class="flex justify-between items-baseline mb-2">
                    <h4 class="font-heading font-bold text-secondary text-xl uppercase">${item.name}</h4>
                    <span class="font-heading font-bold text-primary text-xl whitespace-nowrap ml-4">${item.price}</span>
                </div>
                ${item.description ? `<p class="text-text-muted font-body leading-relaxed text-sm flex-grow">${item.description}</p>` : ''}
            `;
            grid.appendChild(itemEl);
        });

        innerContent.appendChild(grid);
        contentWrapper.appendChild(innerContent);

        // Toggle Logic
        button.addEventListener('click', () => {
            // Close others
            document.querySelectorAll('.accordion-content').forEach(el => {
                if (el !== contentWrapper) {
                    el.classList.remove('open');
                    el.previousElementSibling.querySelector('.icon-container').classList.remove('rotate-180', 'bg-primary', 'text-white');
                    el.previousElementSibling.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');
                }
            });

            // Toggle current
            const isOpen = contentWrapper.classList.toggle('open');
            const iconContainer = button.querySelector('.icon-container');

            if (isOpen) {
                iconContainer.classList.add('rotate-180', 'bg-primary', 'text-white');
                button.classList.add('ring-2', 'ring-primary', 'ring-opacity-50');
            } else {
                iconContainer.classList.remove('rotate-180', 'bg-primary', 'text-white');
                button.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');
            }
        });

        categoryEl.appendChild(button);
        categoryEl.appendChild(contentWrapper);
        menuContainer.appendChild(categoryEl);
    });

    // 2. Initialize Icons
    lucide.createIcons();

    // 3. Header Scroll Effect
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            header.classList.remove('-translate-y-full');
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('-translate-y-full');
        }

        lastScrollY = currentScrollY;

        // Back to Top Visibility
        const backToTopBtn = document.getElementById('back-to-top');
        if (currentScrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
        }
    });

    // 4. Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 5. Back to Top
    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 6. Form Submission (WhatsApp)
    document.getElementById('reservation-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const date = formData.get('date');
        const time = formData.get('time');
        const guests = formData.get('guests');

        const dateFormatted = new Date(date).toLocaleDateString('it-IT', { weekday: 'long', day: '2-digit', month: 'long' });
        const message = `Ciao PUB MÉDOC! Vorrei riservare un tavolo a nome ${name}, il ${dateFormatted} alle ${time} per ${guests} persona/e. Attendo conferma. Grazie mille!`;

        const whatsappURL = `https://wa.me/393780919110?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });

    // 7. Footer Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 8. Force Scroll to Top on Load
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
});
