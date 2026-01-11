
import React from 'react';
import { Video } from '../../types';
import { Heart, MessageCircle, Share2, Music } from 'lucide-react';

interface VideoItemProps {
  video: Video;
  isActive: boolean;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, isActive }) => {
  return (
    <div className="h-full w-full flex flex-col bg-black overflow-hidden relative">
      {/* YouTube Player Container */}
      <div className="flex-1 flex items-center justify-center">
        {isActive ? (
          <iframe
            className="w-full h-full pointer-events-none"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.youtubeId}&rel=0&showinfo=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
             <img 
               src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
               className="w-full h-full object-cover opacity-50 blur-sm"
               alt="thumbnail"
             />
          </div>
        )}
      </div>

      {/* Overlay: Social Buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-20">
        <div className="relative mb-2">
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-600">
             <img src={`https://picsum.photos/seed/${video.publisherId}/100`} alt="p" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FF5001] rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-bold">+</div>
        </div>
        
        <div className="flex flex-col items-center">
          <Heart size={36} fill="white" color="white" className="drop-shadow-lg cursor-pointer hover:scale-110 transition-transform" />
          <span className="text-white text-sm font-semibold">{video.likes > 1000 ? (video.likes/1000).toFixed(1)+'K' : video.likes}</span>
        </div>

        <div className="flex flex-col items-center">
          <MessageCircle size={36} fill="white" color="white" className="drop-shadow-lg" />
          <span className="text-white text-sm font-semibold">{video.comments}</span>
        </div>

        <div className="flex flex-col items-center">
          <Share2 size={36} fill="white" color="white" className="drop-shadow-lg" />
          <span className="text-white text-sm font-semibold">Share</span>
        </div>

        {/* Music Disc Spin */}
        <div className="w-12 h-12 rounded-full bg-black border-4 border-gray-800 flex items-center justify-center animate-[spin_4s_linear_infinite]">
           <Music size={20} className="text-white" />
        </div>
      </div>

      {/* Overlay: Bottom Info */}
      <div className="absolute left-4 bottom-20 right-20 z-20">
        <h3 className="text-white font-bold text-lg mb-2">@{video.publisherName}</h3>
        <p className="text-white text-sm line-clamp-2 mb-3">{video.title}</p>
        <div className="flex items-center gap-2">
          <Music size={14} className="text-white" />
          <marquee className="text-white text-sm w-40">Som original - {video.publisherName}</marquee>
        </div>
      </div>

      {/* Bottom Progress Bar (Simulated) */}
      <div className="absolute bottom-16 left-0 w-full h-[2px] bg-gray-600">
         <div className="h-full bg-white animate-[progress_15s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default VideoItem;
