import { Link, useNavigate } from "react-router-dom"

const NavbarComponent = () => {
    const navGate1 = useNavigate()

    const handleNavbar = (path) => {
        navGate1(path)

    }



    return (
        <div className="flex justify-center bg-slate-400 h-10 text-center">

            <div className="flex items-center text-center p-5">
                <strong><Link to={"/dashboard"}>DASHBOARD</Link></strong>
            </div>
            <div className="flex items-center text-center p-5" >
                <strong><Link to={"/trans"}>RIWAYAT TRANSAKSI</Link></strong>
            </div>
            <div className="flex items-center text-center p-5">
               <Link to={"/product"}> <strong>DAFTAR PAKET</strong></Link>
            </div>

        </div>
    )
}
export default NavbarComponent