import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Machines', href: '#machines' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            {/* लोगो इमेज */}
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdHlNPoJhJDCdywUIsu_bEqTxMApDZLZ7UsXOUkKW-IZL-Bz2OQMxn0a4hMPCJ_J0MXRl4V1yufQKqY6tdgLgKdbMXgDM0tfRfHNq70-3UlUzdPJZ-WNO9iSZCYmZvC-DAEaN5Z7Yk9rPiCgr2qlIh8iz1pDl8VctmuW9MZFxsBqyPc0pJvs2fIiIRwto/s500/logo-removebg-preview.png" 
              alt="Shine Jewel Tech Logo" 
              className="h-10 w-10 object-contain" 
            />
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Shine Jewel <span className="text-amber-600 dark:text-amber-400">Tech</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a 
              href="#contact"
              className="bg-slate-900 dark:bg-amber-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-amber-700 transition-colors shadow-lg shadow-amber-500/20"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-50 dark:bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-amber-600 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
