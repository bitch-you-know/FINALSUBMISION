
import DaftarPaket from "./pages/DaftarPaket"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import TambahOrderanBaru from "./pages/TambahOrderanBaru"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import DashBoard from "./pages/DashBoard"
import ModalKomplit from "./pages/cuciKomplit/ModalKomplit"
import ModalUser from "./pages/userDetail/ModalUser"
import HomePage from "./pages/HomePage"
import ListCustomers from "./pages/ListCustomers"
import ListTrans from "./pages/ListTrans"
function App() {


  return (

    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<DashBoard/>} path="/dashboard" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<DaftarPaket />} path="/daftar-paket" />
        <Route element={<ModalKomplit/>} path="/modal-komplit" />
        <Route element={<ModalUser/>} path="/modal-user" />
        <Route element={<HomePage/>} path="/"  />
        <Route element={<ListCustomers/>} path="/customers"  />
        <Route element={<ListTrans/>} path="/trans"  />
        
        
      </Routes>
    </div>
  )
}

export default App
