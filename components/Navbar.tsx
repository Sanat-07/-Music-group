import React, { useState, useEffect } from 'react';
import { Menu, X, Music2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Music', href: '#music' },
    { name: 'Tour', href: '#tour' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-neon-pink/30 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative group">
              <span className="font-display font-black text-3xl tracking-tighter text-white group-hover:text-neon-pink transition-colors duration-300">
                404
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-neon-pink rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_#ff007f]"></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-neon-pink transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-neon-pink group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></span>
              </button>
            ))}
            <button className="bg-transparent border-2 border-neon-pink text-neon-pink px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-neon-pink hover:text-white hover:shadow-[0_0_20px_#ff007f] transition-all duration-300">
              Fan Club
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-pink transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-black/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white hover:text-neon-pink">
                <X size={32} />
            </button>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-2xl font-bold text-white hover:text-neon-pink transition-colors tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button className="mt-8 bg-neon-pink text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(255,0,127,0.5)]">
              Join Fan Club
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;