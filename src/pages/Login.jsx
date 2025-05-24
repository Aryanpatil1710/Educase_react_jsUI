// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Match user with email and password
    const foundUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (foundUser) {
      // Save as current logged-in user
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      navigate('/account');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Sign in to your PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Welcome back! Please enter your details below.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Email*
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Password*
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
