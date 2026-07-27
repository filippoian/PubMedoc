import React, { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const language = location.pathname.startsWith('/en') ? 'en' : 'it';

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        const { pathname, hash } = location;
        let targetPath;

        if (pathname === '/en/privacy') {
            targetPath = '/privacy';
        } else if (pathname === '/privacy') {
            targetPath = '/en/privacy';
        } else if (pathname === '/en') {
            targetPath = '/';
        } else {
            targetPath = '/en';
        }

        navigate(`${targetPath}${hash}`);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
