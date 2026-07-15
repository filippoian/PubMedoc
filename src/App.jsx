import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import IntroAnimation from './components/IntroAnimation';
import { AnimatePresence } from 'framer-motion';

// Lazy load non-critical components
const Menu = lazy(() => import('./components/Menu'));
const Info = lazy(() => import('./components/Info'));


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
    <div className="app-container">
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
    </div>
  );
}

export default App;
