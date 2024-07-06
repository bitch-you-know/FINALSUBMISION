
import DaftarPaket from "./pages/DaftarPaket"
import RiwayatTransaksi from "./pages/RiwayatTransaksi"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import TambahOrderanBaru from "./pages/TambahOrderanBaru"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import DashBoard from "./pages/DashBoard"
import ModalKomplit from "./pages/cuciKomplit/ModalKomplit"
import ModalUser from "./pages/userDetail/ModalUser"
function App() {


  return (

    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<DashBoard/>} path="/dashboard" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<RiwayatTransaksi />} path="/riwayat-transaksi" />
        <Route element={<DaftarPaket />} path="/daftar-paket" />
        <Route element={<ModalKomplit/>} path="/modal-komplit" />
        <Route element={<ModalUser/>} path="/modal-user" />
        
      </Routes>
    </div>
  )
}

export default App
