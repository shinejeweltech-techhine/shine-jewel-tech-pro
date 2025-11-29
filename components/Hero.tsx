import React from 'react';
import { ArrowRight, Settings, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-50 dark:bg-slate-950 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-200 dark:bg-amber-900/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200 dark:bg-slate-800/30 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-sm font-semibold mb-6 border border-amber-200 dark:border-amber-800/50">
              <span className="flex h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400 animate-pulse"></span>
              Leading Manufacturer in India
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Precision Machinery for
              <span className="block text-amber-600 dark:text-amber-500 bg-clip-text">Jewelry Excellence</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Shine Jewel Tech empowers artisans and factories with state-of-the-art laser cutting, casting, and polishing solutions. Engineered for durability, designed for perfection.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#machines"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-700 md:py-4 md:text-lg md:px-10 transition-all hover:-translate-y-1 shadow-lg shadow-slate-900/20 dark:shadow-amber-500/20"
                >
                  View Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-400 dark:text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4" /> German Technology
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> 2 Year Warranty
                </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md bg-white dark:bg-slate-800 p-2">
              <div className="relative block w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-mKVPip0R8h8uf0dCsmd3cIUD_dJzvLxFBXT80fHWhD5PAAcW0zYCPMaVkO-xWDTZsEP2p_8OuP0_OHmyphRbmGb5l_zYa8Vz3w7nYZtWwoGbDxCqwvFJ6Fxss0hG_cSvYGgBAVFSo0FYZSk06FnIpQxnOsLwIkNXXgAE9UPrwtR6J2431-ubBiX3Rsg/s1024/Gemini_Generated_Image_3kfjiu3kfjiu3kfj.png"
                  alt="Advanced Machinery"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-xl tracking-wide">X1 Laser Series</p>
                  <p className="text-sm text-amber-400">Our Best Seller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
