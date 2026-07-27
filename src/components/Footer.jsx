import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t, language } = useLanguage();
    const privacyPath = language === 'en' ? '/en/privacy' : '/privacy';
    return (
        <footer id="contatti" className="bg-secondary pt-20 pb-10 border-t-8 border-primary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

                    {/* Brand */}
                    <h2 className="text-4xl font-heading font-black text-white mb-6">MÉDOC <span className="text-primary">PUB</span></h2>

                    <div className="flex gap-6 mb-12">
                        <a href="https://instagram.com/medocpub" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors p-3 bg-white rounded-full shadow-lg hover:scale-110 transform duration-300">
                            <Instagram size={28} />
                        </a>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">

                        <a
                            href="https://maps.google.com/?q=Via+Monfalcone,+10,+San+Benedetto+del+Tronto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group p-6 rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:bg-primary transition-colors">
                                <MapPin size={24} className="text-white" />
                            </div>
                            <h4 className="text-white font-heading font-bold uppercase mb-2">{t.footer.whereWeAre}</h4>
                            <p className="text-blue-100 text-sm font-body">Via Monfalcone, 10<br />San Benedetto del Tronto (AP)</p>
                        </a>

                        <a href="tel:+393780919110" className="flex flex-col items-center group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:bg-primary transition-colors">
                                <Phone size={24} className="text-white" />
                            </div>
                            <h4 className="text-white font-heading font-bold uppercase mb-2">{t.footer.callUs}</h4>
                            <p className="text-blue-100 text-sm font-body">+39 378 091 9110</p>
                        </a>

                        <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:bg-primary transition-colors">
                                <Clock size={24} className="text-white" />
                            </div>
                            <h4 className="text-white font-heading font-bold uppercase mb-2">{t.footer.hours}</h4>
                            <p className="text-blue-100 text-sm font-body">{t.footer.hoursValue}</p>
                        </div>

                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 text-center text-blue-200 text-xs font-heading font-bold uppercase tracking-widest space-y-3">
                    <p>
                        <Link to={privacyPath} className="hover:text-white transition-colors underline underline-offset-2">
                            Privacy Policy
                        </Link>
                    </p>
                    <p>&copy; {new Date().getFullYear()} Pub Médoc. P.IVA: 02574390445</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
