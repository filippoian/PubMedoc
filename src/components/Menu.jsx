import React, { useState, useRef, useEffect } from 'react';
import { menuCategories } from '../data/menu';
import { useLanguage } from '../context/LanguageContext';
import './Menu.css';

const Menu = () => {
    const { language, t } = useLanguage();
    // Default to null (all closed)
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const tabsRef = useRef(null);

    // Find the active category object
    const activeCategory = menuCategories.find(cat => cat.id === activeCategoryId);

    // Function to handle tab click and auto-scroll tab into view
    const handleTabClick = (categoryId) => {
        setActiveCategoryId(categoryId);

        // Optional: Scroll tab into center view on mobile
        // This logic can be refined based on exact behavior needed
    };

    return (
        <section id="menu" className="py-20 relative">
            <div className="container mx-auto px-4 mb-8 relative z-10">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-center text-secondary uppercase tracking-tight drop-shadow-sm mb-4">
                    {t.menu.title}
                </h2>
                <p className="text-center text-white/90 max-w-2xl mx-auto font-body text-lg font-medium">
                    {t.menu.subtitle}
                </p>
            </div>

            <div className="menu-container">
                {/* Horizontal Tabs Navigation */}
                <div className="tabs-container" ref={tabsRef}>
                    {menuCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleTabClick(category.id)}
                            className={`tab-button ${activeCategoryId === category.id ? 'active' : ''}`}
                        >
                            {t.menu.categories[category.id]}
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                <div className="w-full max-w-5xl mx-auto">
                    {activeCategory && (
                        <div key={activeCategory.id} className="items-grid">
                            {activeCategory.items.map((item, idx) => (
                                <div key={`${activeCategory.id}-${idx}`} className="menu-item-card">
                                    <div className="item-header">
                                        <h3 className="item-name">{language === 'en' && item.nameEn ? item.nameEn : item.name}</h3>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                    {(language === 'en' ? item.descriptionEn : item.description) && (
                                        <p className="item-description">
                                            {language === 'en' ? item.descriptionEn : item.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
                <p className="text-lg font-heading font-bold text-primary uppercase tracking-widest bg-orange-100/80 px-6 py-2 rounded-full shadow-md backdrop-blur-sm border border-orange-300">
                    {t.menu.glutenFree}
                </p>
                <p className="text-xl font-heading font-bold text-secondary uppercase tracking-widest bg-white/90 px-6 py-2 rounded-full shadow-md backdrop-blur-sm border border-gray-200">
                    {t.menu.coperto}
                </p>
            </div>
        </section>
    );
};

export default Menu;
