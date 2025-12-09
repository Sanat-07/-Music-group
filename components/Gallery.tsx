import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  // Generate random heights for masonry feel
  const images = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/600/${[800, 600, 900, 700, 800, 600][i]}?random=${i + 20}`,
    alt: `Gallery Image ${i + 1}`
  }));

  return (
    <section id="gallery" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
            GALLERY
          </h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-neon-pink hover:text-white transition-colors">
            <Instagram size={20} />
            <span className="font-medium">@404_official</span>
          </a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <div key={img.id} className="relative group break-inside-avoid">
              <div className="overflow-hidden rounded-xl border-2 border-transparent hover:border-neon-pink transition-all duration-300">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Neon Frame Effect on Hover */}
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(255,0,127,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="#" className="inline-flex items-center gap-2 text-neon-pink hover:text-white transition-colors">
            <Instagram size={20} />
            <span className="font-medium">@404_official</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;