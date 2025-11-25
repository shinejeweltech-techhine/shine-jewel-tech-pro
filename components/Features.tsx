import React from 'react';
import { Truck, PenTool, Clock, Award } from 'lucide-react';

const features = [
  {
    name: 'Precision Engineering',
    description: 'Our machines are calibrated to micron-level accuracy ensuring zero gold loss.',
    icon: PenTool,
  },
  {
    name: 'Nationwide Delivery',
    description: 'We deliver and install machinery across all major jewelry hubs in the country.',
    icon: Truck,
  },
  {
    name: '24/7 Support',
    description: 'Dedicated technical team available round the clock for troubleshooting.',
    icon: Clock,
  },
  {
    name: 'Industry Standard',
    description: 'ISO 9001 certified manufacturing ensuring top-tier build quality.',
    icon: Award,
  },
];

export const Features: React.FC = () => {
  return (
    <div id="features" className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-amber-600 dark:text-amber-500 font-semibold tracking-wide uppercase">Why Choose Shine Jewel Tech</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Built for the Modern Jeweler
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 lg:mx-auto">
            We understand the value of precious metals. Our technology focuses on efficiency, recovery, and reliability.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-lg bg-slate-900 dark:bg-amber-500 text-white shadow-lg transition-transform group-hover:scale-110">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-gray-900 dark:text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-slate-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};