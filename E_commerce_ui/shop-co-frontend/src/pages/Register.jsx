import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      // Railway live backend URL update kar diya hai
      await axios.post('https://ecommerce-production-7cb1.up.railway.app/api/auth/register', {
        name,
        email,
        password
      });

      setMessage("Account created successfully!");
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "This email is already registered.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-16 bg-white p-8 border rounded-lg shadow-md">
      <h2 className="text-2xl font-black mb-6 text-center">Create an Account</h2>
      
      {message && <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm font-medium">{message}</div>}
      {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm font-medium">{error}</div>}

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
            className="w-full bg-gray-100 border rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            className="w-full bg-gray-100 border rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            className="w-full bg-gray-100 border rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
            placeholder="Enter your password"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}