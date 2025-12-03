import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Info from './components/Info';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
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
      <Header />
      <main>
        <Hero />
        <Menu />
        <Info />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
