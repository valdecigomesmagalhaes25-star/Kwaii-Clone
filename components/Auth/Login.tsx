
import React, { useState } from 'react';
import { User } from '../../types';

interface LoginProps {
  onLogin: (user: User) => void;
  onSwitch: () => void;
  onForgot: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSwitch, onForgot }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      username: email.split('@')[0],
      email: email,
      balance: 10.50,
      videosPublished: 0
    };
    onLogin(mockUser);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <img src="https://picsum.photos/id/20/200/200" className="w-24 h-24 rounded-3xl mb-4" alt="logo" />
        <h1 className="text-3xl font-bold mb-8 text-[#FF5001]">Kwai</h1>
        
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input 
            type="email" 
            placeholder="Email ou Telefone" 
            className="w-full bg-gray-100 p-4 rounded-xl mb-4 border-none outline-none focus:ring-2 focus:ring-[#FF5001]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className="w-full bg-gray-100 p-4 rounded-xl mb-6 border-none outline-none focus:ring-2 focus:ring-[#FF5001]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-[#FF5001] text-white font-bold py-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          >
            Entrar
          </button>
        </form>

        <button onClick={onForgot} className="mt-4 text-gray-500 text-sm">Esqueceu a senha?</button>
      </div>

      <div className="text-center pb-8">
        <p className="text-gray-500 mb-2">Não tem uma conta?</p>
        <button onClick={onSwitch} className="text-[#FF5001] font-bold">Cadastre-se</button>
      </div>
    </div>
  );
};

export default Login;
