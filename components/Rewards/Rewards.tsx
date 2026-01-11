
import React from 'react';
import { User } from '../../types';
import { TrendingUp, Award, Clock, DollarSign } from 'lucide-react';

interface RewardsProps {
  user: User;
}

const Rewards: React.FC<RewardsProps> = ({ user }) => {
  return (
    <div className="h-full bg-gray-50 text-black overflow-y-auto">
      {/* Header Banner */}
      <div className="bg-[#FF5001] p-8 pb-12 text-white">
        <h1 className="text-2xl font-bold mb-4">Kwai Bônus</h1>
        <p className="opacity-90">Assista e publique vídeos para ganhar dinheiro real!</p>
      </div>

      {/* Balance Card */}
      <div className="px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <p className="text-gray-500 font-medium mb-1">Seu Saldo Atual</p>
          <div className="flex items-baseline gap-1 text-4xl font-black text-orange-600 mb-4">
            <span className="text-xl">R$</span>
            {user.balance.toFixed(2)}
          </div>
          <button className="w-full bg-[#FF5001] text-white font-bold py-3 rounded-full shadow-lg">Sacar Dinheiro</button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-blue-500 mb-2">
            <TrendingUp size={20} />
            <span className="text-xs font-bold uppercase">Visualizações</span>
          </div>
          <p className="text-2xl font-bold">1.2K</p>
          <p className="text-[10px] text-gray-400">Últimos 7 dias</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-green-500 mb-2">
            <Award size={20} />
            <span className="text-xs font-bold uppercase">Publicações</span>
          </div>
          <p className="text-2xl font-bold">{user.videosPublished}</p>
          <p className="text-[10px] text-gray-400">Total acumulado</p>
        </div>
      </div>

      {/* Task Section */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-4">Tarefas Diárias</h3>
        
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
              <Clock />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm">Assista 10min de vídeo</h4>
              <p className="text-xs text-gray-500">Ganhe R$ 0,50 diariamente</p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div className="bg-orange-500 h-full w-1/3 rounded-full"></div>
              </div>
            </div>
            <button className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">Ir</button>
          </div>

          <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <DollarSign />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm">Publique um vídeo novo</h4>
              <p className="text-xs text-gray-500">Ganhe bônus por visualização</p>
            </div>
            <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">Postar</button>
          </div>
        </div>
      </div>

      <div className="p-4 mb-20">
         <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
            <h4 className="font-bold text-orange-800 mb-1">Como funciona?</h4>
            <p className="text-xs text-orange-700 leading-relaxed">
               Nós repassamos 40% de nossa receita do Google AdMob para os criadores. 
               Você ganha R$ 0,01 por cada visualização que seus vídeos recebem e R$ 0,002 por cada vídeo que assiste.
            </p>
         </div>
      </div>
    </div>
  );
};

export default Rewards;
