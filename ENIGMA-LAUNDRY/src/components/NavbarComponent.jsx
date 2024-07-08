import { Link, useNavigate } from "react-router-dom"

const NavbarComponent = () => {
    const navGate1 = useNavigate()

    const handleNavbar = (path) => {
        navGate1(path)

    }



    return (
        <div className="flex justify-center bg-slate-400 h-10 text-center">
            <div className="flex items-center text-center p4" >
                <strong><Link to={"/dashboard"}>RIWAYAT TRANSAKSI</Link></strong>
            </div>
            <div className="flex items-center text-center p-4">
                <strong>MENAGE KARYAWAN</strong>
            </div>
            <div className="flex items-center text-center p-4">
                <strong>DAFTAR</strong>
            </div>

        </div>
    )
}
export default NavbarComponent