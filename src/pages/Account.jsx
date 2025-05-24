// src/pages/Account.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/welcome'); // ✅ Redirect to Welcome page after logout
  };

  if (!user) return <div className="p-4">No user data found. Please register or login.</div>;

  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-6 relative">
      <button
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        onClick={handleLogout}
      >
        Logout
      </button>

      <div className="bg-white w-full max-w-md mx-auto rounded-md shadow-sm border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
        </div>

        <div className="p-4 flex items-start gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-700">
              {user.fullName
                ?.split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()}
            </div>
            <div className="absolute bottom-0 right-0 bg-white border border-gray-300 w-6 h-6 rounded-full flex items-center justify-center">
              <FaPen className="text-purple-600 text-xs" />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-800">{user.fullName}</h3>
            <p className="text-xs text-gray-500">{user.email}</p>

            <p className="text-sm text-gray-700 mt-2">Phone: {user.phone}</p>
            <p className="text-sm text-gray-700">Company: {user.company}</p>
            <p className="text-sm text-gray-700">Agency: {user.isAgency ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
