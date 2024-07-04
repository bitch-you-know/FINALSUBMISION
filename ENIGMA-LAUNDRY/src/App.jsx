import OrderCuciKomplit from "./components/OrderCuciKomplit"
import CuciKomplit from "./pages/CuciKomplit"
import DaftarPaket from "./pages/DaftarPaket"
import DashBoard from "./pages/DashBoard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import TambahOrderanBaru from "./pages/TambahOrderanBaru"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
function App() {


  return (

    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<DashBoard />} path="/dashboard" />
        <Route element={<DaftarPaket />} path="/daftar-paket" />
      </Routes>
    </div>
  )
}

export default App
