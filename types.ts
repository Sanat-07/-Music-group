import React from 'react';

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  color: string;
}

export interface Song {
  id: string;
  title: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  coverUrl: string;
  tracks: Song[];
  type: 'Album' | 'Single' | 'EP';
}

export interface ConcertEvent {
  id: string;
  date: string;
  city: string;
  venue: string;
  status: 'Tickets Available' | 'Sold Out' | 'Coming Soon';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}