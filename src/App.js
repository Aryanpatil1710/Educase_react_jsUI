import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import AccountSetting from './pages/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />              {/* 👈 default homepage */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<AccountSetting />} />
      
      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
