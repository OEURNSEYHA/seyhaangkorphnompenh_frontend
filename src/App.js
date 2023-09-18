// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './dashboard/context/AuthContext';
import LoginForm from './dashboard/component/FormLogin';
import Dashboard from './dashboard/DashBoard';
import PrivateRoute from './dashboard/component/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
       
          <Route path="/login" element={<LoginForm/>}/>
          <PrivateRoute path="/dashboard" element={<Dashboard/>} />
          {/* <Redirect from="/" to="/login" /> */}
          
        
      </Routes>
    </AuthProvider>
  );
}

export default App;

