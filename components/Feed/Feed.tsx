
import React, { useRef, useState, useEffect } from 'react';
import { Video } from '../../types';
import VideoItem from './VideoItem';

interface FeedProps {
  videos: Video[];
  onReward: (amount: number) => void;
  userId: string;
}

const Feed: React.FC<FeedProps> = ({ videos, onReward, userId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideoId, setActiveVideoId] = useState<string>(videos[0]?.id || '');

  // Handle intersection for reward logic and view counting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = entry.target.getAttribute('data-video-id');
            if (videoId && videoId !== activeVideoId) {
              setActiveVideoId(videoId);
              handleView(videoId);
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    const elements = document.querySelectorAll('.snap-center-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeVideoId, videos]);

  const handleView = (videoId: string) => {
    // 1. Give reward to viewer
    onReward(0.002); // $0.002 per view

    // 2. Give reward to publisher (Simulated)
    const storedVideos = JSON.parse(localStorage.getItem('kwai_videos') || '[]');
    const videoIndex = storedVideos.findIndex((v: Video) => v.id === videoId);
    
    if (videoIndex !== -1) {
      storedVideos[videoIndex].views += 1;
      localStorage.setItem('kwai_videos', JSON.stringify(storedVideos));
      
      // In a real app, you'd trigger a balance update on the server for storedVideos[videoIndex].publisherId
      // Here we simulate the publisher getting money if they were another user
      console.log(`Publisher ${storedVideos[videoIndex].publisherName} earned $0.01 for view`);
    }
  };

  return (
    <div ref={containerRef} className="snap-y-container bg-black">
      {videos.map((video) => (
        <div 
          key={video.id} 
          data-video-id={video.id}
          className="snap-center-item w-full relative"
        >
          <VideoItem 
            video={video} 
            isActive={activeVideoId === video.id} 
          />
        </div>
      ))}
      
      {/* Top Tabs */}
      <div className="absolute top-0 left-0 w-full flex justify-center gap-6 p-4 pt-10 z-50 pointer-events-none">
        <button className="text-white font-bold text-lg opacity-70 pointer-events-auto">Seguindo</button>
        <button className="text-white font-bold text-lg border-b-2 border-white pointer-events-auto">Para Você</button>
      </div>

      {/* Kwai Gold Coin (Simulated Reward Animation) */}
      <div className="absolute top-10 right-4 z-50">
        <div className="relative w-14 h-14 bg-yellow-400 rounded-full border-4 border-yellow-600 flex items-center justify-center animate-bounce shadow-lg">
          <span className="text-yellow-900 font-black text-xl">K</span>
          <div className="absolute -bottom-1 -right-1 bg-red-600 text-white text-[10px] px-1 rounded-full">+R$</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
