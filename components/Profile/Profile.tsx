
import React from 'react';
import { User, Video } from '../../types.ts';
import { Settings, Grid, Heart, Bookmark } from 'lucide-react';

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  const videos: Video[] = JSON.parse(localStorage.getItem('kwai_videos') || '[]')
    .filter((v: Video) => v.publisherId === user.id);

  return (
    <div className="h-full bg-white text-black overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <span className="font-bold text-lg">{user.username}</span>
        <div className="flex gap-4">
          <Settings className="cursor-pointer" onClick={onLogout} />
        </div>
      </div>

      <div className="p-6 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-gray-100 mb-4 overflow-hidden">
          <img src={`https://picsum.photos/seed/${user.id}/200`} alt="profile" />
        </div>
        <h2 className="font-bold text-xl mb-1">@{user.username}</h2>
        <p className="text-gray-500 text-sm mb-4">Kwai ID: {user.id.substring(0, 8)}</p>
        
        <div className="flex gap-8 mb-6">
          <div className="text-center">
            <p className="font-bold">120</p>
            <p className="text-gray-500 text-xs">Seguindo</p>
          </div>
          <div className="text-center">
            <p className="font-bold">4.2K</p>
            <p className="text-gray-500 text-xs">Seguidores</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{user.videosPublished}</p>
            <p className="text-gray-500 text-xs">Vídeos</p>
          </div>
        </div>

        <button className="w-full bg-[#FF5001] text-white font-bold py-2 rounded-lg mb-2">Editar Perfil</button>
        <button onClick={onLogout} className="w-full border border-gray-300 font-bold py-2 rounded-lg text-gray-600">Sair</button>
      </div>

      <div className="flex border-t border-b">
        <div className="flex-1 flex justify-center p-3 border-b-2 border-orange-500 text-orange-500">
          <Grid size={24} />
        </div>
        <div className="flex-1 flex justify-center p-3 text-gray-400">
          <Bookmark size={24} />
        </div>
        <div className="flex-1 flex justify-center p-3 text-gray-400">
          <Heart size={24} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 p-1">
        {videos.length > 0 ? videos.map(video => (
          <div key={video.id} className="aspect-[3/4] bg-gray-200 relative">
            <img 
              src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
              className="w-full h-full object-cover" 
              alt="thumb"
            />
            <div className="absolute bottom-1 left-1 text-white text-[10px] flex items-center gap-1">
              <Heart size={10} fill="white" /> {video.views}
            </div>
          </div>
        )) : (
          <div className="col-span-3 py-20 text-center text-gray-400">
            Nenhum vídeo publicado ainda.
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
