
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import ProtectedRoute from "./components/ProtectedRoute"
import { axiosinstance } from "./lib/axios"
import { useDispatch, useSelector } from "react-redux"
import React, { lazy, Suspense, useEffect } from 'react';
import { Spinner } from '@nextui-org/react'
const Login = lazy(() => import('./pages/Login'));
const DashBoard = lazy(() => import('./pages/DashBoard'));
const HomePage = lazy(() => import('./pages/HomePage'));
const TransactionHistory = lazy(() => import('./pages/TransactionHistory'));
const PackageList = lazy(() => import('./pages/PackageList'));

function App() {
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  //REFRESH TOKEN 
  const refreshToken = async () => {
    try {
      const result = await axiosinstance.get("auth/refresh-token", {
        headers: { Authorization: `Bearer ${token}` }
      })
      const newToken = result.data.data.token
      if (result.status === 201) {
        console.log("Token REFRESH")
        dispatch({ type: "SET_TOKEN", token: newToken })
        localStorage.setItem("token", newToken)

      }
      console.log(result.status)

    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(() => {
    const intervalId = setInterval(refreshToken, 1000 * 30);
    return () => clearInterval(intervalId);
  }, [token, dispatch]);

  return (

    <div>
      <Toaster position="top-center" />

      <Routes>
        {/* <Route element={<HomePage />} path="/" /> */}
        <Route element={<Login />} path="/login" />
        <Route element={<ProtectedRoute element={<Suspense fallback={<div><Spinner />Loading... </div>}><DashBoard /></Suspense>} />} path="/" />
        <Route element={<ProtectedRoute element={<Suspense fallback={<div><Spinner />Loading...</div>}><DashBoard /></Suspense>} />} path="/customers" />
        <Route element={<ProtectedRoute element={<Suspense fallback={<div><Spinner />Loading...</div>}><TransactionHistory /></Suspense>} />} path="/trans" />
        <Route element={<ProtectedRoute element={<Suspense fallback={<div><Spinner />Loading...</div>}><PackageList /></Suspense>} />} path="/product" />
      </Routes>

    </div>
  )
}

export default App
