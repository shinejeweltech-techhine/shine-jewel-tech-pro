import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate network request
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

  return (
    <section id="contact" className="bg-white dark:bg-slate-900 py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Get in Touch</h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-slate-400">
                    Ready to upgrade your jewelry manufacturing unit? Contact us for quotes, customization, or technical consultations.
                </p>

                <div className="mt-8 space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <Phone className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                        </div>
                        <div className="ml-3 text-base text-gray-500 dark:text-slate-300">
                            <p>+91 98765 43210</p>
                            <p className="mt-1">+91 12345 67890</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <Mail className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                        </div>
                        <div className="ml-3 text-base text-gray-500 dark:text-slate-300">
                            <p>sales@shinejeweltech.com</p>
                            <p className="mt-1">support@shinejeweltech.com</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                        </div>
                        <div className="ml-3 text-base text-gray-500 dark:text-slate-300">
                            <p>123 Diamond Industrial Estate,</p>
                            <p>Surat, Gujarat - 395004</p>
                            <p className="mt-1">India</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-100 dark:border-amber-800/30">
                    <h3 className="text-lg font-medium text-amber-900 dark:text-amber-400">Visiting Hours</h3>
                    <p className="mt-2 text-sm text-amber-800 dark:text-amber-200/80">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-slate-950/50 border border-gray-100 dark:border-slate-700 overflow-hidden p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 py-3 px-4 shadow-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500 sm:text-sm transition-colors"
                            placeholder="Rajesh Verma"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 py-3 px-4 shadow-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500 sm:text-sm transition-colors"
                            placeholder="you@company.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 py-3 px-4 shadow-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500 sm:text-sm transition-colors"
                            placeholder="+91..."
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                            Machine Requirement / Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 py-3 px-4 shadow-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500 sm:text-sm transition-colors"
                            placeholder="I am interested in the Laser Cutter X1..."
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={formStatus !== 'idle'}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-all
                                ${formStatus === 'success' ? 'bg-green-600' : 'bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-700'}`}
                        >
                            {formStatus === 'idle' && 'Send Inquiry'}
                            {formStatus === 'submitting' && 'Sending...'}
                            {formStatus === 'success' && 'Message Sent!'}
                        </button>
                    </div>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};