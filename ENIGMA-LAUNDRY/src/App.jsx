import Login from "./pages/Login"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import DashBoard from "./pages/DashBoard"
import HomePage from "./pages/HomePage"
import TransactionHistory from "./pages/TransactionHistory"
import PackageList from "./pages/PackageList"
import ProtectedRoute from "./components/ProtectedRoute"
import { axiosinstance } from "./lib/axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function App() {
 const token = useSelector((state)=>state.auth.token)
 const dispatch =useDispatch()

  //REFRESH TOKEN 
   const refreshToken = async ()=>{
     try {
          const result = await axiosinstance.get("auth/refresh-token",{
            headers:{ Authorization : `Bearer ${token}` }
          })
          const newToken = result.data.data.token
         if(result.status === 201){
            console.log("Token REFRESH") 
            dispatch({type:"SET_TOKEN" ,token:newToken})
            localStorage.setItem("token",newToken)
            
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
        <Route element={<HomePage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<ProtectedRoute element={<DashBoard />} />} path="/dashboard" />
        <Route element={<ProtectedRoute element={<TransactionHistory />} />} path="/trans" />
        <Route element={<ProtectedRoute element={<PackageList />} />} path="/product" />
      </Routes>

    </div>
  )
}

export default App
