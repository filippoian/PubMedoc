import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Info = () => {
    const { t, language } = useLanguage();
    const privacyPath = language === 'en' ? '/en/privacy' : '/privacy';
    const [formData, setFormData] = useState({
        name: '',
        date: new Date().toISOString().split('T')[0],
        time: '20:30',
        guests: 2
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, date, time, guests } = formData;

        const dateFormatted = new Date(date).toLocaleDateString(t.info.dateLocale, { weekday: 'long', day: '2-digit', month: 'long' });
        const message = t.info.whatsappMessage(name, dateFormatted, time, guests);

        const whatsappURL = `https://wa.me/393780919110?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <section id="prenota" className="py-24 relative overflow-hidden bg-secondary">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">

                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">

                    {/* Sticker Airplane Element - Left Side */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="bg-white p-3 rounded-full shadow-sticker transform -rotate-6 border-4 border-white/20">
                            <img src="/assets/element2.png" alt="Airplane" className="w-48 md:w-64 h-auto object-contain" />
                        </div>
                    </motion.div>

                    {/* Reservation Form - Right Side */}
                    <div className="w-full md:w-1/2 bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-primary/20">
                        <h2 className="text-3xl md:text-4xl font-heading font-black text-left mb-2 text-secondary uppercase">{t.info.title}</h2>
                        <p className="text-left text-text-muted font-body font-medium mb-8">{t.info.subtitle}</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-secondary font-heading font-bold uppercase text-xs mb-2 tracking-wider">{t.info.name}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text font-body focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                                    placeholder={t.info.namePlaceholder}
                                />
                            </div>

                            <div className="flex justify-between">
                                <div className="w-[49%]">
                                    <label className="block text-secondary font-heading font-bold uppercase text-xs mb-2 tracking-wider">{t.info.date}</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-[48px] bg-white border border-gray-200 rounded-xl px-4 py-3 text-text font-body appearance-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                                    />
                                </div>

                                <div className="w-[49%]">
                                    <label className="block text-secondary font-heading font-bold uppercase text-xs mb-2 tracking-wider">{t.info.time}</label>
                                    <select name="time" value={formData.time} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text font-body focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all appearance-none">
                                        {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'].map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-secondary font-heading font-bold uppercase text-xs mb-2 tracking-wider">{t.info.guests}</label>
                                <input
                                    type="number"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    min="1"
                                    max="20"
                                    required
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text font-body focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-heading font-bold uppercase text-lg py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2 mt-4 transform active:scale-95"
                            >
                                <Send size={20} /> {t.info.submit}
                            </button>

                            <p className="text-xs text-text-muted text-center">
                                {t.info.privacyNotice}{' '}
                                <Link to={privacyPath} className="underline hover:text-primary">
                                    {t.info.privacyLink}
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Info;
