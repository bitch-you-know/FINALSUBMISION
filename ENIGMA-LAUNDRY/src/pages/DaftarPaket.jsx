import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import NavbarAll from "../components/NavbarAll";
import NavbarComponent from "../components/NavbarComponent";
import ModalKomplit from './cuciKomplit/ModalKomplit';

const DaftarPaket = () => {

    const [isOpenModal,SetIsOpenModal]=useState()
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

const openModal =()=>{
    SetIsOpenModal(true)
}

const closeModal =()=>{
    SetIsOpenModal(false)
}

    return (
        <div className="flex flex-col justify-center">
            <NavbarAll />
            <NavbarComponent />
            <div><br /></div>
            <div className="flex justify-center">
                <Card className="w-[80%] ">
                    <CardHeader>
                        <strong><h1>Tambah Orderan Baru</h1></strong>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex flex-row justify-center h-[300px] items-center">
                        <div
                            className="bg-slate-300 w-[200px] h-[200px] m-4 cursor-pointer"
                            onClick={() => handleNavigate('/dashboard')}
                        >
                            <h3>Cuci Komplit</h3>
                        </div>
                        <div
                            className="bg-slate-300 w-[200px] h-[200px] m-4 cursor-pointer"
                            onClick={() => handleNavigate('/dry-clean')}
                        >
                            <h3>Dry Clean</h3>
                        </div>
                        <div
                            className="bg-slate-300 w-[200px] h-[200px] m-4 cursor-pointer"
                            onClick={() => handleNavigate('/cuci-satuan')}
                        >
                            <h3>Cuci Satuan</h3>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={openModal} >buka modal</Button>
                        <ModalKomplit isOpen={isOpenModal} onClose={closeModal} />
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default DaftarPaket;