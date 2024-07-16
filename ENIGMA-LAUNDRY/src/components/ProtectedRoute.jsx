import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  // Mengecek apakah token autentikasi ada di localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  // Jika pengguna diautentikasi, render elemen yang diberikan
  // Jika tidak, arahkan pengguna ke halaman login
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;