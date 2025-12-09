import React from 'react';
import { Play, Disc, Music as MusicIcon } from 'lucide-react';
import { Album } from '../types';

const albums: Album[] = [
  {
    id: '1',
    title: 'ERROR FOUND',
    year: '2023',
    type: 'Album',
    coverUrl: 'https://picsum.photos/400/400?random=10',
    tracks: [
      { id: '1', title: 'System Failure', duration: '3:12' },
      { id: '2', title: 'Glitch in Paradise', duration: '2:58' },
      { id: '3', title: '404 Love', duration: '3:34' },
      { id: '4', title: 'Reboot', duration: '3:05' },
    ]
  },
  {
    id: '2',
    title: 'NOT FOUND',
    year: '2024',
    type: 'EP',
    coverUrl: 'https://picsum.photos/400/400?random=11',
    tracks: [
      { id: '1', title: 'Not Found', duration: '3:20' },
      { id: '2', title: 'Pink Screen', duration: '2:45' },
      { id: '3', title: 'Disconnected', duration: '3:10' },
    ]
  }
];

const Music: React.FC = () => {
  return (
    <section id="music" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white">
              DISCOGRAPHY
            </h2>
            <p className="text-gray-400 mt-4 text-lg tracking-widest uppercase">
              Listen to the glitch
            </p>
          </div>
          <button className="flex items-center space-x-2 text-neon-pink border border-neon-pink px-6 py-3 rounded-full hover:bg-neon-pink hover:text-white transition-all duration-300">
            <MusicIcon size={18} />
            <span className="font-bold uppercase tracking-wider text-sm">All Releases</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {albums.map((album) => (
            <div key={album.id} className="bg-brand-dark/50 rounded-3xl p-6 md:p-8 border border-white/5 hover:border-neon-pink/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,127,0.1)] group">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Album Art */}
                <div className="relative w-full md:w-48 md:h-48 flex-shrink-0">
                  <img 
                    src={album.coverUrl} 
                    alt={album.title} 
                    className="w-full h-full object-cover rounded-xl shadow-lg group-hover:shadow-neon-pink/20 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-xl backdrop-blur-sm">
                    <button className="bg-neon-pink text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play size={24} fill="currentColor" />
                    </button>
                  </div>
                </div>

                {/* Tracklist */}
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">{album.title}</h3>
                      <p className="text-gray-500 text-sm font-medium mt-1">{album.year} • {album.type}</p>
                    </div>
                    <Disc className="text-gray-600 group-hover:text-neon-pink animate-spin-slow transition-colors" size={24} />
                  </div>

                  <ul className="space-y-3">
                    {album.tracks.map((track, index) => (
                      <li key={track.id} className="flex justify-between items-center text-gray-400 hover:text-white group/track cursor-pointer border-b border-white/5 pb-2 last:border-0">
                        <div className="flex items-center">
                          <span className="text-xs font-mono w-6 text-gray-600 group-hover/track:text-neon-pink">0{index + 1}</span>
                          <span className="font-medium text-sm">{track.title}</span>
                        </div>
                        <span className="text-xs font-mono opacity-50">{track.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Music;