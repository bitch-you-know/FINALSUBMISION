import { Button } from "@nextui-org/react"
import Navbar from "../components/Navbar"
import "../style/CardStyle.css"
import ListCustomers from "./ListCustomers"
import { useState } from "react"
import ModalCustomer from "../components/ModalCustomer"





const DashBoard = () => {

const [openModal,setOpenModal]=useState()



const openClick=()=>{
    setOpenModal(true)
}
const closeModal=()=>{
    setOpenModal(false)
}


    return (
        <div className="flex flex-col justify-content-center bg-slate-200" >
            <Navbar />
            

            <header className="flex justify-center items-center w-full p-4 pb-1 ">
                <div className="flex justify-between items-center w-[90%] ">
                    <div >
                        <p>Selamat Datang <strong>Admin</strong></p>
                        <h2 className="text-3xl"><strong>DASHBOARD</strong></h2>
                    </div>
                   <div>
                   <Button onClick={openClick} color="primary" className="mt-2">+ Order Baru</Button>
                    <ModalCustomer isOpen={openModal} onClose={closeModal}/>
                   </div>
                </div>

            </header>
            <main className="flex justify-center w-full p-4" >
                <div className="flex justify-between items-center w-[90%] bg-slate-300">
                </div>
            </main>
            <footer className="flex justify-center w-full p-4 pt-1">
                <div className="flex flex-col justify-between items-center w-[90%] ">
                    <h1 className="font-bold text-2xl">Customer List</h1>
                    <ListCustomers />
                    <br />
                </div>
            </footer>
        </div>
    )
}

export default DashBoard