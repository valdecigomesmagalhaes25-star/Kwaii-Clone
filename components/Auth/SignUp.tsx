
import React, { useState } from 'react';
import { User } from '../../types';

interface SignUpProps {
  onSignUp: (user: User) => void;
  onSwitch: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp, onSwitch }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      username: username,
      email: email,
      balance: 0.0,
      videosPublished: 0
    };
    onSignUp(newUser);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-2 text-[#FF5001]">Criar Conta</h1>
        <p className="text-gray-500 mb-8 text-center">Junte-se ao Kwai e comece a ganhar!</p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input 
            type="text" 
            placeholder="Nome de usuário" 
            className="w-full bg-gray-100 p-4 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-[#FF5001]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-gray-100 p-4 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-[#FF5001]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className="w-full bg-gray-100 p-4 rounded-xl mb-6 outline-none focus:ring-2 focus:ring-[#FF5001]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-[#FF5001] text-white font-bold py-4 rounded-full shadow-lg"
          >
            Cadastrar
          </button>
        </form>
      </div>

      <div className="text-center pb-8">
        <p className="text-gray-500 mb-2">Já tem uma conta?</p>
        <button onClick={onSwitch} className="text-[#FF5001] font-bold">Faça login</button>
      </div>
    </div>
  );
};

export default SignUp;
