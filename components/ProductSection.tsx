import React from 'react';
import { machines } from '../data';
import { Check } from 'lucide-react';

export const ProductSection: React.FC = () => {
  return (
    <section id="machines" className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Our Machinery</h2>
          <a href="#" className="hidden text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 sm:block">
            Download Catalogue <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {machines.map((product) => (
            <div key={product.id} className="group relative bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-slate-900/50 transition-all duration-300 flex flex-col">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-slate-800 group-hover:opacity-90 overflow-hidden h-64 relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-slate-800 dark:text-amber-400 border border-gray-100 dark:border-slate-700 shadow-sm">
                    {product.category}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-slate-400 line-clamp-3">{product.description}</p>
                    
                    <ul className="mt-4 space-y-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-xs text-gray-600 dark:text-slate-400">
                                <Check className="h-3 w-3 text-amber-500 dark:text-amber-400 mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <p className="text-lg font-bold text-slate-900 dark:text-amber-400">{product.priceRange}</p>
                    <button className="mt-4 w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-2.5 rounded-md text-sm font-semibold hover:bg-slate-900 dark:hover:bg-amber-600 hover:text-white transition-all">
                        View Details
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500">
            View all products <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};