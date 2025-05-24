import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-end justify-center bg-gray-50 px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-500 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <div className="mt-6 space-y-3">
          <button
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-lg"
            onClick={() => navigate('/register')}
          >
            Create Account
          </button>
          <button
            className="w-full bg-violet-200 text-violet-800 font-semibold py-2 rounded-lg"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
