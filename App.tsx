import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductSection } from './components/ProductSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <ProductSection />
        
        {/* Simple About Section */}
        <section id="about" className="bg-slate-900 dark:bg-amber-950/20 text-white py-20 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-white dark:text-amber-500">Innovating Jewelry Manufacturing</h2>
                <p className="text-lg text-slate-300 dark:text-slate-200 leading-relaxed">
                    At Shine Jewel Tech, we combine traditional craftsmanship understanding with modern engineering. 
                    Since our inception, we have helped over 500+ factories automate their production lines. 
                    Our mission is to bring affordable, high-precision technology to every jeweler in India.
                </p>
            </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;