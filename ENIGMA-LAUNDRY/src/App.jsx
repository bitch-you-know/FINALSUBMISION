import OrderCuciKomplit from "./components/OrderCuciKomplit"
import CuciKomplit from "./pages/CuciKomplit"
import DaftarPaket from "./pages/DaftarPaket"
import DashBoard from "./pages/DashBoard"
import Login from "./pages/Login"
import TambahOrderanBaru from "./pages/TambahOrderanBaru"
import {Routes,Route} from 'react-router-dom'
function App() {


  return (
          <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<DashBoard/>} path="/dashboard" />
            <Route element={<DaftarPaket/>} path="/daftar-paket"/>
          </Routes>
  )
}

export default App
