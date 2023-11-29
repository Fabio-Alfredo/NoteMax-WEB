// ProtectedRoute.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ children, ...rest }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      // Redirige al usuario al login si no está autenticado
      navigate('/');
    }
  }, [token]);

  return (
    <Routes>
      <Route {...rest} element={token ? children : <Navigate to='/' />} />
    </Routes>
  );
};


export default ProtectedRoute;

