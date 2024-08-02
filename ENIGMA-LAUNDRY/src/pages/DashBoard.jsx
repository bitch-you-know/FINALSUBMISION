import { Button, } from "@nextui-org/react"
import Navbar from "../components/Navbar"
import "../style/CardStyle.css"
import ListCustomers from "../components/ListCustomers"
import { useState } from "react"
import ModalAddCustomer from "../components/ModalAddCustomer"

import { CustomerProvider } from "../contexts/CustomerContex"




const DashBoard = () => {

    const [openModal, setOpenModal] = useState(false)

    const openClick = () => {
        setOpenModal(true)
    }
    const closeModal = () => {
        setOpenModal(false)
    }


    return (

        <CustomerProvider>
            <div className="flex flex-col justify-content-center bg-slate-200 h-screen" >


                <Navbar />


                <header className="flex justify-center items-center w-full pt-1 pb-1 ">
                    <div className="flex justify-between items-center w-[90%] ">
                        <div >
                            <p>Selamat Datang <strong>Admin</strong></p>
                            <h2 className="text-3xl"><strong>DASHBOARD</strong></h2>
                        </div>
                        <div>
                            <Button  onClick={openClick} color="primary" className="mt-2 font-semibold" data-testid="add-customer-button" >+ Order Baru</Button>
                            <ModalAddCustomer isOpen={openModal} onClose={closeModal} />
                        </div>
                    </div>

                </header>
                <main className="flex justify-center w-full p-4" >
                    <div className="flex justify-between items-center w-[90%] bg-slate-300">
                    </div>
                </main>
                <footer className="flex justify-center w-full p-4 pt-1">
                    <div className="flex flex-col justify-between items-center w-[90%] ">
                        <h1 className="font-bold text-2xl" data-testid="customer-title">Customer List</h1>
                        <ListCustomers />
                        <br />
                    </div>
                </footer>
            </div>

        </CustomerProvider>

    )
}

export default DashBoard