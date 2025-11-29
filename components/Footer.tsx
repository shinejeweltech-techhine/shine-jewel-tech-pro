import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white transition-colors duration-300 border-t border-slate-800 dark:border-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                    {/* लोगो इमेज */}
                    <img 
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdHlNPoJhJDCdywUIsu_bEqTxMApDZLZ7UsXOUkKW-IZL-Bz2OQMxn0a4hMPCJ_J0MXRl4V1yufQKqY6tdgLgKdbMXgDM0tfRfHNq70-3UlUzdPJZ-WNO9iSZCYmZvC-DAEaN5Z7Yk9rPiCgr2qlIh8iz1pDl8VctmuW9MZFxsBqyPc0pJvs2fIiIRwto/s500/logo-removebg-preview.png" 
                      alt="Shine Jewel Tech Logo" 
                      className="h-8 w-8 object-contain" 
                    />
                    <span className="font-bold text-xl tracking-tight">
                        Shine Jewel Tech
                    </span>
                </div>
                <p className="text-slate-400 text-sm">
                    Empowering the jewelry industry with cutting-edge machinery since 2010.
                </p>
                <div className="flex space-x-4 mt-6">
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>

            {/* Links */}
            <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Products</h3>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-base text-gray-400 hover:text-amber-400 transition-colors">Laser Cutting</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-amber-400 transition-colors">Polishing</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-amber-400 transition-colors">Engraving</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-amber-400 transition-colors">Casting</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-base text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-amber-400 transition-colors">Careers</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-amber-400 transition-colors">Blog</a></li>
                    <li><a href="#" className="text-base text-gray-400 hover:text-amber-400 transition-colors">Terms</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Subscribe</h3>
                <p className="mt-4 text-base text-gray-400">
                    Get the latest updates on new machinery launches.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                    <input
                        type="email"
                        required
                        className="appearance-none min-w-0 w-full bg-slate-800 dark:bg-slate-900 border border-transparent rounded-md py-2 px-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500"
                        placeholder="Enter your email"
                    />
                    <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button
                            type="submit"
                            className="w-full bg-amber-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-colors"
                        >
                            Join
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="mt-8 border-t border-slate-800 dark:border-slate-900 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-slate-400">
                &copy; {new Date().getFullYear()} Shine Jewel Tech. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};
