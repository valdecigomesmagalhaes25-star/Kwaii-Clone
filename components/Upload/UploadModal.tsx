
import React, { useState } from 'react';
import { Video } from '../../types';
import { X, Youtube, Info } from 'lucide-react';

interface UploadModalProps {
  onClose: () => void;
  onUpload: (video: Video) => void;
  userId: string;
  username: string;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose, onUpload, userId, username }) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const extractYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = extractYoutubeId(url);
    if (!videoId) {
      alert('URL do YouTube inválida');
      return;
    }

    const newVideo: Video = {
      id: Math.random().toString(36).substr(2, 9),
      youtubeId: videoId,
      title: title || 'Sem título',
      publisherId: userId,
      publisherName: username,
      views: 0,
      likes: 0,
      comments: 0,
      timestamp: Date.now()
    };

    onUpload(newVideo);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400">
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-100 p-2 rounded-xl text-red-600">
            <Youtube size={24} />
          </div>
          <h2 className="text-xl font-bold text-black">Novo Vídeo</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Link do YouTube</label>
            <input 
              type="text" 
              placeholder="https://www.youtube.com/watch?v=..." 
              className="w-full bg-gray-100 p-4 rounded-xl text-black outline-none border focus:border-orange-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Legenda / Título</label>
            <textarea 
              placeholder="Sobre o que é seu vídeo?" 
              className="w-full bg-gray-100 p-4 rounded-xl text-black outline-none border focus:border-orange-500 h-24"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="bg-orange-50 p-4 rounded-xl flex gap-3 text-orange-800">
             <Info size={24} className="shrink-0" />
             <p className="text-[10px]">
                Ao publicar, seu vídeo estará disponível para toda a comunidade. 
                Você receberá R$ 0,01 por visualização única. Vídeos com conteúdo impróprio serão removidos.
             </p>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#FF5001] text-white font-bold py-4 rounded-full shadow-lg"
          >
            Publicar Vídeo
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
