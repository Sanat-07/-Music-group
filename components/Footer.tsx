import React from 'react';
import { Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-8">
            <span className="font-display font-black text-4xl tracking-tighter text-white">404</span>
        </div>

        <div className="flex space-x-8 mb-8">
          {[
            { Icon: Youtube, href: '#' },
            { Icon: Instagram, href: '#' },
            { Icon: Twitter, href: '#' },
            { Icon: Facebook, href: '#' },
          ].map(({ Icon, href }, index) => (
            <a 
              key={index} 
              href={href} 
              className="text-gray-400 hover:text-neon-pink hover:scale-110 transition-all duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Management</a>
        </div>

        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} 404 Entertainment. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;