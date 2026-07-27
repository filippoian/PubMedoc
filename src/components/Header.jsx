import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();
    const isHome = location.pathname === '/' || location.pathname === '/en';
    const anchorPrefix = isHome ? '' : (language === 'en' ? '/en' : '/');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show header when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: t.nav.prenota, href: `${anchorPrefix}#prenota` },
        { name: t.nav.menu, href: `${anchorPrefix}#menu` },
        { name: t.nav.contatti, href: `${anchorPrefix}#contatti` },
    ];

    return (
        // MODIFICA 1: Rimosso 'py-1' per eliminare lo spazio interno verticale
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-transparent py-6 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 flex justify-end items-center">

                {/* MODIFICA 2: Aggiunto '-mt-2' (margine negativo) per tirare il logo verso l'alto */}



                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text font-heading font-bold uppercase tracking-wide hover:text-primary transition-colors text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/393780919110"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary text-white px-6 py-2.5 rounded-full font-heading font-bold uppercase text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
                    >
                        <Phone size={16} /> {t.nav.prenota}
                    </a>
                    <button
                        onClick={toggleLanguage}
                        className="border-2 border-secondary text-secondary px-4 py-2 rounded-full font-heading font-bold uppercase text-sm hover:bg-secondary hover:text-white transition-colors"
                        aria-label="Change language"
                    >
                        {language === 'it' ? 'EN' : 'IT'}
                    </button>
                </nav>

                {/* Mobile Language Button + Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={toggleLanguage}
                        className="border-2 border-secondary text-secondary px-3 py-1.5 rounded-full font-heading font-bold uppercase text-xs"
                        aria-label="Change language"
                    >
                        {language === 'it' ? 'EN' : 'IT'}
                    </button>
                    <button
                        className="text-secondary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#F28C28] overflow-hidden shadow-xl m-2 rounded-xl"
                    >
                        <nav className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-secondary font-heading font-bold uppercase text-xl tracking-wide hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/393780919110"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-8 py-3 rounded-full font-heading font-bold uppercase text-lg hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <Phone size={20} /> {t.nav.prenota}
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;