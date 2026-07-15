export const menuCategories = [
    {
        id: 'birre',
        title: 'Birre',
        items: [
            { name: 'Hirter pils 4,8%', price: '€4 / €6', description: '0,3 CL / 0,5 CL - Lager chiara/luppolata, Austria' },
            { name: 'Lupulus blonde 8%', price: '€5 / €7', description: '0,3 CL / 0,5 CL - Strong ale/doppio malto, Belgio' },
            { name: 'Hoegaarden 4,8%', price: '€4 / €6', description: '0,25 CL / 0,5 CL - Blanche, Belgio' },
            { name: 'Leffe Rossa 6,6%', price: '€4,5 / €6,5', description: '0,25 CL / 0,4 CL - Rossa, Belgio' },
            { name: 'Mezzopasso IPA 5,9%', price: '€4,5 / €7', description: '0,25 CL / 0,5 CL - IPA, Italia' },
            { name: 'CHAIN BREAKER', price: '€7', description: '5,5% VOL, 40 IBU, Lattina 44 CL - INDIA PALE ALE, IMPAVIDA, GLUTENFREE' },
            { name: 'MOXIE', price: '€7', description: '5,2% VOL, 30 IBU, Lattina 44 CL - AMERICAN PALE ALE, IMPAVIDA' },
            { name: 'SASSONERO', price: '€6', description: '4,8% VOL, 24 IBU, Bottiglia 33 CL - Schwarzbier, Monpiër de Gherdéina, Val Gardena, Italia' },
            { name: 'WEISSE HELL', price: '€6', description: '5,2% VOL, Bottiglia 50 CL - Weissbier, Kloster Scheyern, Baviera, Germania' },
            { name: 'MRS. BITTER', price: '€7', description: '3,8% VOL, Lattina 44 CL - ORDINARY BITTER, IMPAVIDA, LIMITED EDITION, ITALIA' },
            { name: 'APA', price: '€6', description: '4,8% VOL, Bottiglia 33 CL - AMERICAN PALE ALE, BIRRIFICIO DEL DOGE, ZERO BIANCO (TV), ITALIA, GLUTEN FREE' },
            { name: 'MARGOSE', price: '€7', description: '4,7% VOL, 8 IBU, Bottiglia 33 CL - GOSE, CON ACQUA DI MARE, BIRRANOVA, PUGLIA, ITALIA' },
            { name: 'TROPICAL BOMB', price: '€7', description: '8% VOL, 27 IBU, Lattina 33 CL - IMPAVIDA, LIMITED EDITION, ITALIA' },
            { name: 'LIL TROPICAL', price: '€7', description: '4,5% VOL, 8 IBU, Bottiglia 33 CL - SESSION IPA, BIRRANOVA, PUGLIA, ITALIA' },
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
            { name: 'Mozzarella Stick', price: '€10', description: '8 pezzi' },
            { name: 'Zucchine fritte', price: '€10', description: '' },
            { name: 'Fritto misto', price: '€10', description: "Patate fritte, 2pz Olive all' Ascolana, 2pz Bocconcini di Pollo, 2pz Anelli di Cipolla, 2pz Jalapeños, 2pz Mozzarella stick" },
            { name: 'Patate Carbonare', price: '€7', description: 'Patate fritte, Carbo-crema, Guanciale croccante, Pecorino' },
        ]
    },
    {
        id: 'panini',
        title: 'Panini',
        items: [
            { name: "L'Alba", price: '€13', description: 'Hamburger Scottona 200g, Carbo-crema, Pecorino fritto, Guanciale Croccante' },
            { name: 'Marla', price: '€11', description: 'Hamburger Scottona 200g, Crispy di Mortadella, Burrata, Pesto di Pistacchio' },
            { name: '90 MIN', price: '€10', description: 'Hamburger Scottona 200g, Lattuga, Pomodoro, Cheddar, Bacon' },
            { name: 'Daytona', price: '€10', description: 'Burger di Pollo, Lattuga, Cheddar, Bacon, Cipolla croccante' },
            { name: 'Flop', price: '€10', description: 'Burger Vegetale, Lattuga, Pomodorino arrosto, Cheddar, Salsa burger' },
            { name: 'Crudele', price: '€14', description: 'Hamburger Scottona 200g, Porchetta grigliata, Pomodorini arrosto, Zucchine fritte, Maionese al pepe' },
            { name: 'On Fire', price: '€10', description: 'Burger di Salsiccia, Friarielli, Salsa piccante, Provola filante' },
            { name: 'Cult', price: '€10', description: 'Porchetta Grigliata, Patate Fritte, Maionese al Pepe' },
        ]
    },
    {
        id: 'pinse-rosse',
        title: 'Pinse Rosse',
        items: [
            { name: 'Lunedì', price: '€10', description: 'Pomodoro, Bufala, Basilico' },
            { name: 'Giuda', price: '€10', description: 'Pomodoro, Mozzarella, Verdure miste grigliate' },
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
            { name: 'Russel Crowe', price: '€10', description: 'Mozzarella, Salsiccia, Friarielli, Tarallo sbriciolato' },
            { name: 'Miracolo', price: '€13', description: 'Prosciutto Crudo, Rucola, Pomodorini, Scaglie di Grana, Glassa aceto balsamico' },
            { name: 'Respira', price: '€12', description: 'Mozzarella, Guanciale crispy, Carbo-crema, Crema di pecorino' },
            { name: 'Conta su di me', price: '€14', description: 'Salmone affumicato, Stracciatella, Limone grattugiato, Menta' },
            { name: 'Eclissi', price: '€11', description: 'Mozzarella, Salame piccante, Peperoni arrosto, Pecorino grattugiato' },
            { name: 'Ranch', price: '€11', description: 'Mozzarella, Prosciutto cotto, Funghi porcini' },
        ]
    },
    {
        id: 'carne',
        title: 'LA CARNE',
        items: [
            { name: 'Arrosticini di castrato', price: '€1,30/pz', description: '' },
            { name: 'Arrosticini di fegato', price: '€1,50/pz', description: '' },
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
            { name: 'Hamburger di scottona 200g con patate fritte', price: '€10', description: 'Servito con patate fritte' },
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
            { name: "Tiramisu'", price: '€5', description: 'Dai, ma come fai a non conoscere gli ingredienti' },
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
