import React from 'react';
import { MapPin, Calendar, Ticket } from 'lucide-react';
import { ConcertEvent } from '../types';

const events: ConcertEvent[] = [
  { id: '1', date: 'OCT 12', city: 'SEOUL', venue: 'Olympic Gymnastics Arena', status: 'Sold Out' },
  { id: '2', date: 'OCT 18', city: 'TOKYO', venue: 'Tokyo Dome', status: 'Tickets Available' },
  { id: '3', date: 'NOV 05', city: 'LOS ANGELES', venue: 'Crypto.com Arena', status: 'Tickets Available' },
  { id: '4', date: 'NOV 12', city: 'NEW YORK', venue: 'Madison Square Garden', status: 'Coming Soon' },
  { id: '5', date: 'NOV 20', city: 'LONDON', venue: 'The O2', status: 'Coming Soon' },
];

const Events: React.FC = () => {
  return (
    <section id="tour" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute left-[-10%] top-[20%] w-[40%] h-[40%] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            WORLD <span className="text-neon-light">TOUR</span>
          </h2>
          <div className="h-1 w-24 bg-neon-pink mx-auto rounded-full shadow-[0_0_10px_#ff007f]"></div>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="group bg-brand-black border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between hover:border-neon-pink hover:shadow-[0_0_20px_rgba(255,0,127,0.2)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto mb-6 md:mb-0">
                <div className="bg-brand-dark px-6 py-4 rounded-xl border border-white/5 group-hover:border-neon-pink/30 transition-colors text-center min-w-[120px]">
                    <span className="block text-neon-pink font-bold font-display text-2xl">{event.date.split(' ')[1]}</span>
                    <span className="block text-gray-400 text-sm tracking-wider uppercase">{event.date.split(' ')[0]}</span>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{event.city}</h3>
                  <div className="flex items-center justify-center md:justify-start text-gray-400 gap-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{event.venue}</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex justify-center">
                {event.status === 'Sold Out' ? (
                   <span className="px-6 py-3 rounded-full bg-gray-800 text-gray-400 font-bold uppercase text-xs tracking-widest border border-white/5">
                     Sold Out
                   </span>
                ) : (
                  <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-neon-pink text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-neon-pink hover:shadow-[0_0_15px_#ff007f] transition-all duration-300">
                    <Ticket size={16} />
                    <span>Get Tickets</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;