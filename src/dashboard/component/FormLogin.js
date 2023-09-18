// src/components/FormLogin.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const FormLogin = () => {
  const { dispatch } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Simulated login logic - you can replace this with your actual authentication logic
    if (formData.username === 'user' && formData.password === 'password') {
      dispatch({ type: 'LOGIN', payload: formData.username });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default FormLogin;
