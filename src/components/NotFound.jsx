import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NotFound = () => {
    const { language } = useLanguage();
    const homePath = language === 'en' ? '/en' : '/';

    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
            <Helmet>
                <meta name="robots" content="noindex, follow" />
                <title>404 - Medoc Pub</title>
            </Helmet>
            <h1 className="text-6xl font-heading font-black text-secondary mb-4">404</h1>
            <p className="text-lg text-text-muted font-body mb-8">
                {language === 'en' ? 'Page not found.' : 'Pagina non trovata.'}
            </p>
            <Link
                to={homePath}
                className="bg-primary text-white font-heading font-bold uppercase px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
                {language === 'en' ? 'Back to home' : 'Torna alla home'}
            </Link>
        </section>
    );
};

export default NotFound;
