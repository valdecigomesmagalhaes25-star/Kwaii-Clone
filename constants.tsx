
import { Video } from './types';

export const initialVideos: Video[] = [
  {
    id: '1',
    youtubeId: '3AtDnEC4zak',
    title: 'Incredible Travel Cinematic',
    publisherId: 'admin',
    publisherName: 'TravelVlog',
    views: 12500,
    likes: 840,
    comments: 42,
    timestamp: Date.now()
  },
  {
    id: '2',
    youtubeId: 'jNQXAC9IVRw',
    title: 'Me at the zoo - The first YouTube video',
    publisherId: 'jawed',
    publisherName: 'Jawed',
    views: 300000,
    likes: 1500000,
    comments: 11000,
    timestamp: Date.now() - 1000000
  },
  {
    id: '3',
    youtubeId: '9bZkp7q19f0',
    title: 'PSY - GANGNAM STYLE',
    publisherId: 'psy_off',
    publisherName: 'OfficialPSY',
    views: 5000000,
    likes: 28000000,
    comments: 500000,
    timestamp: Date.now() - 2000000
  }
];

export const COLORS = {
  primary: '#FF5001', // Kwai Orange
  secondary: '#FF8A00',
  white: '#FFFFFF',
  black: '#000000'
};
