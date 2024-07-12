
import DaftarPaket from "./pages/DaftarPaket"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import TambahOrderanBaru from "./pages/TambahOrderanBaru"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import DashBoard from "./pages/DashBoard"
import ModalKomplit from "./pages/cuciKomplit/ModalKomplit"
import HomePage from "./pages/HomePage"
import ListCustomers from "./pages/ListCustomers"
import ListTrans from "./pages/ListTrans"
import ModalTrans from "./components/ModalListTrans"
import ModalCustomer from "./components/ModalCustomer"
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
        <Route element={<HomePage/>} path="/"  />
        <Route element={<ListCustomers/>} path="/customers"  />
        <Route element={<ListTrans/>} path="/trans"  />
        <Route element={<ModalTrans/>} path="/modal-trans" />
        <Route element={<ModalCustomer/>} path="/modalcustomers" />
        
      </Routes>
    </div>
  )
}

export default App
