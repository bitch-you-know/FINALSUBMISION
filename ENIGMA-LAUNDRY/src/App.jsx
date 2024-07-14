import Login from "./pages/Login"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import DashBoard from "./pages/DashBoard"
import HomePage from "./pages/HomePage"
import ListCustomers from "./pages/ListCustomers"
import ListTrans from "./pages/ListTrans"
import ListProduct from "./pages/ListProduct"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {

  return (

    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<ProtectedRoute element={<DashBoard />} />} path="/dashboard" />
        <Route element={<ProtectedRoute element={<HomePage />} />} path="/" />
        <Route element={<ProtectedRoute element={<ListCustomers />} />} path="/customers" />
        <Route element={<ProtectedRoute element={<ListTrans />} />} path="/trans" />
        <Route element={<ProtectedRoute element={<ListProduct />} />} path="/product" />
      </Routes>

    </div>
  )
}

export default App
