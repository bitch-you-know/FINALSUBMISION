import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element}) => {

  const token =useSelector((state)=>state.auth.token)

  // Mengecek apakah token autentikasi ada di localStorage
  const isAuthenticated = !! token;

  // Jika pengguna diautentikasi, render elemen yang diberikan
  // Jika tidak, arahkan pengguna ke halaman login
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;