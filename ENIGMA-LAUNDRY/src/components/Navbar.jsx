import { Avatar ,Button} from "@nextui-org/react"
import { useDispatch } from "react-redux"
import { Link, useNavigate} from "react-router-dom"

const Navbar = () => {
const dispatch=useDispatch()

const logout =()=>{
    dispatch({ type: "LOGOUT" })
}

    return (
        <div>
            <div className="flex justify-between items-center  h-30 p-6 font-bold text-lg bg-blue-950  text-white">
            <h1 className="text-3xl"><strong>Enigma Laundri</strong></h1>

            <div className="flex ">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                
                <p className="pr-4 pl-4">Admin</p>
                <Button onClick={logout}  radius="none" size="sm" color="primary"  variant="ghost"><strong>LOGOUT</strong></Button>
                
            </div>
            
        </div>
        <div className="flex justify-center bg-slate-400 h-10 text-center">

                <div className="flex items-center text-center p-5">
                    <strong><Link to={"/"}>DASHBOARD</Link></strong>
                </div>
                <div className="flex items-center text-center p-5" >
                    <strong><Link to={"/trans"}>RIWAYAT TRANSAKSI</Link></strong>
                </div>
                <div className="flex items-center text-center p-5">
                    <Link to={"/product"}> <strong>DAFTAR PAKET</strong></Link>
                </div>

            </div>
        </div>

    )
}

export default Navbar