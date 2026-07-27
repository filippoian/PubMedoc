import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import IntroAnimation from './components/IntroAnimation';
import SeoHead from './components/SeoHead';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';

// Lazy load non-critical components
const Menu = lazy(() => import('./components/Menu'));
const Info = lazy(() => import('./components/Info'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const NotFound = lazy(() => import('./components/NotFound'));

function HomePage({ showIntro, setShowIntro }) {
  return (
    <>
      <SeoHead page="home" />
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-20"></div>}>
          <Menu />
          <Info />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <SeoHead page="privacy" />
      <Header />
      <main>
        <Suspense fallback={<div className="py-20"></div>}>
          <PrivacyPolicy />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Force scroll to top on page load/reload
    window.scrollTo(0, 0);

    // Also try to disable browser's scroll restoration if possible
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage showIntro={showIntro} setShowIntro={setShowIntro} />} />
          <Route path="/en" element={<HomePage showIntro={showIntro} setShowIntro={setShowIntro} />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/en/privacy" element={<PrivacyPage />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <main>
                  <Suspense fallback={<div className="py-20"></div>}>
                    <NotFound />
                  </Suspense>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
