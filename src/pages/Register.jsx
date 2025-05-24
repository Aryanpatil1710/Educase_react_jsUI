// src/pages/Register.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: type === 'radio' ? value === 'yes' : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users or empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Optional: check if email already exists
    const alreadyExists = existingUsers.find(
      (user) => user.email.toLowerCase() === formData.email.toLowerCase()
    );
    if (alreadyExists) {
      alert('User with this email already exists.');
      return;
    }

    // Save new user to users array
    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Set this user as logged in
    localStorage.setItem('loggedInUser', JSON.stringify(formData));

    // Redirect to account page
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-white py-10 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
        <h1 className="text-2xl font-bold">Create your <br />PopX account</h1>

        {[
          { label: 'Full Name', name: 'fullName' },
          { label: 'Phone number', name: 'phone' },
          { label: 'Email address', name: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Company name', name: 'company' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label className="text-sm text-gray-600 font-medium">
              {label} <span className="text-purple-600">*</span>
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              required
            />
          </div>
        ))}

        <div>
          <label className="text-sm text-gray-600 font-medium block mb-1">
            Are you an Agency? <span className="text-purple-600">*</span>
          </label>
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="no"
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white w-full py-2 rounded-md font-medium"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
