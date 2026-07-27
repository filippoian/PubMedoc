import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SITE_URL = 'https://pubmedocmenu.com';

const SEO_CONTENT = {
    it: {
        home: {
            title: 'Medoc Pub - Birreria Pinseria Paninoteca San Benedetto del Tronto',
            description: 'Medoc Pub a San Benedetto del Tronto. Birre artigianali, pinse romane, hamburger gourmet e tanto altro. Prenota il tuo tavolo ora!',
        },
        privacy: {
            title: 'Informativa Privacy - Medoc Pub',
            description: 'Informativa sul trattamento dei dati personali di Medoc Pub, ai sensi del Regolamento (UE) 2016/679.',
        },
    },
    en: {
        home: {
            title: 'Medoc Pub - Beer House, Pinsa and Sandwich Shop in San Benedetto del Tronto',
            description: 'Medoc Pub in San Benedetto del Tronto. Craft beers, Roman-style pinsa, gourmet burgers and more. Book your table now!',
        },
        privacy: {
            title: 'Privacy Policy - Medoc Pub',
            description: 'Medoc Pub privacy policy on the processing of personal data, pursuant to Regulation (EU) 2016/679.',
        },
    },
};

const SeoHead = ({ page }) => {
    const { language } = useLanguage();
    const content = SEO_CONTENT[language][page];

    const itPath = page === 'privacy' ? '/privacy' : '/';
    const enPath = page === 'privacy' ? '/en/privacy' : '/en';
    const canonicalPath = language === 'en' ? enPath : itPath;

    return (
        <Helmet>
            <html lang={language} />
            <title>{content.title}</title>
            <meta name="description" content={content.description} />
            <link rel="canonical" href={`${SITE_URL}${canonicalPath}`} />
            <link rel="alternate" hrefLang="it" href={`${SITE_URL}${itPath}`} />
            <link rel="alternate" hrefLang="en" href={`${SITE_URL}${enPath}`} />
            <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${itPath}`} />
        </Helmet>
    );
};

export default SeoHead;
