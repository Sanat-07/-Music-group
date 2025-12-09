import React from 'react';
import { Member } from '../types';

const members: Member[] = [
  {
    id: '1',
    name: 'MIRA',
    role: 'Leader / Main Vocal',
    bio: 'The charismatic leader with a voice that breaks boundaries.',
    imageUrl: 'https://picsum.photos/400/600?random=1',
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: '2',
    name: 'YUNA',
    role: 'Main Rapper',
    bio: 'Fierce flows and electric energy that powers the group.',
    imageUrl: 'https://picsum.photos/400/600?random=2',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: '3',
    name: 'SUKI',
    role: 'Main Dancer',
    bio: 'Precision and grace in every move, mesmerizing the audience.',
    imageUrl: 'https://picsum.photos/400/600?random=3',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: '4',
    name: 'REMI',
    role: 'Visual / Vocal',
    bio: 'Angelic visuals combined with soulful harmonies.',
    imageUrl: 'https://picsum.photos/400/600?random=4',
    color: 'from-blue-500 to-teal-400'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative BG Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-pink/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
            THE <span className="text-neon-pink">MEMBERS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Four voices, one error. Meet the girls redefining the pop scene.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gray-800">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              
              {/* Hover Glow Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-pink/50 transition-all duration-300 rounded-2xl"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className={`h-1 w-12 bg-gradient-to-r ${member.color} mb-4`}></div>
                <h3 className="font-display text-3xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">
                  {member.name}
                </h3>
                <p className="text-neon-light font-medium tracking-wider text-sm mb-3 uppercase">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;