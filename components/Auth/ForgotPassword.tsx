
import React, { useState } from 'react';

interface ForgotPasswordProps {
  onBack: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Recuperar Conta</h1>
        {sent ? (
          <div className="text-center">
            <p className="text-green-600 font-medium mb-6">Um link de recuperação foi enviado para seu email!</p>
            <button onClick={onBack} className="bg-[#FF5001] text-white px-8 py-3 rounded-full">Voltar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <p className="text-gray-500 mb-6 text-center">Informe seu email para receber o link de recuperação de senha.</p>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-gray-100 p-4 rounded-xl mb-6 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="w-full bg-[#FF5001] text-white font-bold py-4 rounded-full">Enviar Link</button>
            <button onClick={onBack} className="w-full mt-4 text-gray-500">Voltar ao login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
