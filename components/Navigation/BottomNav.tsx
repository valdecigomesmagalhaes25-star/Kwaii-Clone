
import React from 'react';
import { Home, Search, PlusSquare, Wallet, User as UserIcon } from 'lucide-react';
import { AppTab } from '../../types';

interface BottomNavProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="h-16 bg-black border-t border-gray-800 flex items-center justify-around z-50">
      <button 
        onClick={() => onTabChange(AppTab.FEED)}
        className={`flex flex-col items-center ${activeTab === AppTab.FEED ? 'text-white' : 'text-gray-500'}`}
      >
        <Home size={24} strokeWidth={activeTab === AppTab.FEED ? 3 : 2} />
        <span className="text-[10px] mt-1">Início</span>
      </button>

      <button 
        onClick={() => onTabChange(AppTab.DISCOVER)}
        className={`flex flex-col items-center ${activeTab === AppTab.DISCOVER ? 'text-white' : 'text-gray-500'}`}
      >
        <Search size={24} />
        <span className="text-[10px] mt-1">Descobrir</span>
      </button>

      <button 
        onClick={() => onTabChange(AppTab.UPLOAD)}
        className="flex flex-col items-center"
      >
        <div className="bg-white rounded-lg p-1 text-black hover:scale-110 transition-transform">
          <PlusSquare size={28} />
        </div>
      </button>

      <button 
        onClick={() => onTabChange(AppTab.REWARDS)}
        className={`flex flex-col items-center ${activeTab === AppTab.REWARDS ? 'text-white' : 'text-gray-500'}`}
      >
        <Wallet size={24} />
        <span className="text-[10px] mt-1">Ganhos</span>
      </button>

      <button 
        onClick={() => onTabChange(AppTab.PROFILE)}
        className={`flex flex-col items-center ${activeTab === AppTab.PROFILE ? 'text-white' : 'text-gray-500'}`}
      >
        <UserIcon size={24} strokeWidth={activeTab === AppTab.PROFILE ? 3 : 2} />
        <span className="text-[10px] mt-1">Perfil</span>
      </button>
    </div>
  );
};

export default BottomNav;
