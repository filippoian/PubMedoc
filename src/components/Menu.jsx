import React, { useState, useRef, useEffect } from 'react';
import { menuCategories } from '../data/menu';
import './Menu.css';

const Menu = () => {
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
                    Il Nostro Menu
                </h2>
                <p className="text-center text-white/90 max-w-2xl mx-auto font-body text-lg font-medium">
                    Scegli una categoria per scoprire le nostre proposte.
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
                            {category.title}
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
                                        <h3 className="item-name">{item.name}</h3>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                    {item.description && (
                                        <p className="item-description">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-xl font-heading font-bold text-secondary uppercase tracking-widest bg-white/90 inline-block px-6 py-2 rounded-full shadow-md backdrop-blur-sm border border-gray-200">
                    Coperto €2
                </p>
            </div>
        </section>
    );
};

export default Menu;
