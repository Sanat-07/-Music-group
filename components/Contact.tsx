import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-pink/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <Mail className="mx-auto text-neon-pink mb-6" size={48} />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              JOIN THE <span className="text-neon-pink">SYSTEM</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Subscribe to the official 404 newsletter for exclusive content, presale codes, and updates.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/5 border border-white/10 text-white px-6 py-4 rounded-full focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all placeholder-gray-500"
              />
              <button className="bg-neon-pink text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-neon-pink transition-all duration-300 flex items-center justify-center gap-2 group">
                Subscribe
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;