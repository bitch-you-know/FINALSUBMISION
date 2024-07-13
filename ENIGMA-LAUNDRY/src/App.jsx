import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import DashBoard from "./pages/DashBoard"
import HomePage from "./pages/HomePage"
import ListCustomers from "./pages/ListCustomers"
import ListTrans from "./pages/ListTrans"
import ListProduct from "./pages/ListProduct"
function App() {

  return (

    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<DashBoard/>} path="/dashboard" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<HomePage/>} path="/"  />
        <Route element={<ListCustomers/>} path="/customers"  />
        <Route element={<ListTrans/>} path="/trans"  />
        <Route element={<ListProduct/>} path="/product" />
        
      </Routes>
    </div>
  )
}

export default App
