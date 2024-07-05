import { Button } from "@nextui-org/react"
import NavbarAll from "../components/NavbarAll"
import NavbarComponent from "../components/NavbarComponent"
import "../style/CardStyle.css"
import OrderCuciKomplit from "../components/OrderCuciKomplit"
import { useNavigate } from "react-router-dom"
import RiwayatTransaksi from "./RiwayatTransaksi"




const DashBoard = () => {

const navigate =useNavigate()


const tambahOrderan = ()=>{
    return (
        navigate("/daftar-paket")
    )
}


    return (
        <div className="flex flex-col justify-content-center" >
            <NavbarAll />
            <NavbarComponent />

            <header className="flex justify-center items-center w-full p-4 ">
                <div className="flex justify-between items-center w-[90%] bg-green-300">
                    <div >
                        <p>Selamat Datang <strong>Admin</strong></p>
                        <h2 className="text-3-xl"><strong>DASHBOARD</strong></h2>
                    </div>
                    <Button onClick={tambahOrderan} color="primary" className="mt-2">+ Order Baru</Button>
                </div>

            </header>
            <main className="flex justify-center w-full p-4" >
                <div className="flex justify-between items-center w-[90%] bg-green-300">
                    <div className="card">
                        div1
                    </div>
                    <div className="card">
                        div2
                    </div>
                    <div className="card">
                        div3
                    </div>
                </div>
            </main>
            <footer className="flex justify-center w-full p-4 pt-1">
                 <div className="flex justify-between items-center w-[90%] bg-green-300">
                    <RiwayatTransaksi/>
                 </div>
            </footer>

        </div>
    )
}

export default DashBoard