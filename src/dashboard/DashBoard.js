// src/components/DashBoard.js
import React from 'react';
import { useAuth } from './context/AuthContext';

const DashBoard = () => {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <h2>Welcome, {state.user}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashBoard;
