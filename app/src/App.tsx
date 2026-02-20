import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WhatIWorkOn from './sections/WhatIWorkOn';
import SentinelAIDashboard from './sections/SentinelAIDashboard';
import Philosophy from './sections/Philosophy';
import About from './sections/About';
import Writing from './sections/Writing';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { LanguageProvider } from './i18n/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark text-foreground">
        <Navigation />
        <main>
          <Hero />
          <WhatIWorkOn />
          <SentinelAIDashboard />
          <Philosophy />
          <About />
          <Writing />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
