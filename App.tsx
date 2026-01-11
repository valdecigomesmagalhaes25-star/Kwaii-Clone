
import React, { useState, useEffect, useCallback } from 'react';
import { AuthScreen, User, AppTab, Video } from './types';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import ForgotPassword from './components/Auth/ForgotPassword';
import Feed from './components/Feed/Feed';
import BottomNav from './components/Navigation/BottomNav';
import Profile from './components/Profile/Profile';
import Rewards from './components/Rewards/Rewards';
import UploadModal from './components/Upload/UploadModal';
import { initialVideos } from './constants';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authScreen, setAuthScreen] = useState<AuthScreen>(AuthScreen.LOGIN);
  const [currentTab, setCurrentTab] = useState<AppTab>(AppTab.FEED);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);

  // Simulate persistent session and initial data
  useEffect(() => {
    const savedUser = localStorage.getItem('kwai_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    
    const savedVideos = localStorage.getItem('kwai_videos');
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    } else {
      setVideos(initialVideos);
      localStorage.setItem('kwai_videos', JSON.stringify(initialVideos));
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('kwai_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('kwai_user');
    setCurrentTab(AppTab.FEED);
  };

  const handleUpload = (newVideo: Video) => {
    const updatedVideos = [newVideo, ...videos];
    setVideos(updatedVideos);
    localStorage.setItem('kwai_videos', JSON.stringify(updatedVideos));
    
    if (currentUser) {
        const updatedUser = { 
            ...currentUser, 
            videosPublished: currentUser.videosPublished + 1 
        };
        setCurrentUser(updatedUser);
        localStorage.setItem('kwai_user', JSON.stringify(updatedUser));
    }
    setIsUploadOpen(false);
    setCurrentTab(AppTab.FEED);
  };

  const updateBalance = (amount: number) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, balance: currentUser.balance + amount };
      setCurrentUser(updatedUser);
      localStorage.setItem('kwai_user', JSON.stringify(updatedUser));
    }
  };

  if (!currentUser) {
    switch (authScreen) {
      case AuthScreen.LOGIN:
        return <Login onLogin={handleLogin} onSwitch={() => setAuthScreen(AuthScreen.SIGNUP)} onForgot={() => setAuthScreen(AuthScreen.FORGOT_PASSWORD)} />;
      case AuthScreen.SIGNUP:
        return <SignUp onSignUp={handleLogin} onSwitch={() => setAuthScreen(AuthScreen.LOGIN)} />;
      case AuthScreen.FORGOT_PASSWORD:
        return <ForgotPassword onBack={() => setAuthScreen(AuthScreen.LOGIN)} />;
      default:
        return <Login onLogin={handleLogin} onSwitch={() => setAuthScreen(AuthScreen.SIGNUP)} onForgot={() => setAuthScreen(AuthScreen.FORGOT_PASSWORD)} />;
    }
  }

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col">
      <div className="flex-1 overflow-hidden">
        {currentTab === AppTab.FEED && (
          <Feed videos={videos} onReward={updateBalance} userId={currentUser.id} />
        )}
        {currentTab === AppTab.REWARDS && (
          <Rewards user={currentUser} />
        )}
        {currentTab === AppTab.PROFILE && (
          <Profile user={currentUser} onLogout={handleLogout} />
        )}
        {currentTab === AppTab.DISCOVER && (
          <div className="flex items-center justify-center h-full text-gray-500">Discover section coming soon</div>
        )}
      </div>

      <BottomNav 
        activeTab={currentTab} 
        onTabChange={(tab) => {
          if (tab === AppTab.UPLOAD) {
            setIsUploadOpen(true);
          } else {
            setCurrentTab(tab);
          }
        }} 
      />

      {isUploadOpen && (
        <UploadModal 
          onClose={() => setIsUploadOpen(false)} 
          onUpload={handleUpload} 
          userId={currentUser.id}
          username={currentUser.username}
        />
      )}
    </div>
  );
};

export default App;
