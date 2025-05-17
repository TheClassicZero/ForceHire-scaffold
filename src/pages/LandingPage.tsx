import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-black text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ForceHire</h1>
      <p className="mb-6">Modern Law Enforcement Recruiting Made Easy</p>
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Enter Dashboard
      </button>
    </div>
  );
}