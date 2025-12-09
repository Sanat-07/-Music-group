import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="404 Group Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-4 inline-block animate-bounce">
            <span className="px-4 py-1 rounded-full border border-neon-pink/50 text-neon-pink text-xs uppercase tracking-[0.3em] bg-black/50 backdrop-blur-sm">
                New Single "Not Found" Out Now
            </span>
        </div>
        
        <h1 className="font-display text-[8rem] md:text-[12rem] leading-none font-black text-white relative select-none">
          <span className="block absolute top-0 left-0 text-neon-pink opacity-30 blur-sm animate-pulse-slow">404</span>
          <span className="block relative bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">404</span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl font-light text-gray-300 tracking-[0.5em] uppercase">
          ERROR IN THE SYSTEM
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-neon-pink text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-neon-pink hover:shadow-[0_0_30px_#ff007f] transition-all duration-300 transform hover:-translate-y-1">
            Stream Now
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold uppercase tracking-widest hover:border-neon-pink hover:text-neon-pink backdrop-blur-sm transition-all duration-300">
            View Tour Dates
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="text-neon-pink opacity-80" size={32} />
      </div>
    </section>
  );
};

export default Hero;